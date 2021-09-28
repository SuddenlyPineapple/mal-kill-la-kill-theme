import fs from "fs";
import parser from "csv-parser";
import stream from "stream";
import mergeFiles from "merge-files";

import processRow from "./processRow.js";
import config from "../config/index.js";
import log from "./log.js";

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const writableStream = new stream.Writable({
    objectMode: true, // Because input is object from csv-parser
    async write(row, encoding, done) {
        // Required
        // chunk is object with data from a line in the csv
        await sleep(500);
        processRow(row);
        done();
    },
});

const app = async () => {
    log(`Start processing csv file: ${config.filename}`, "color");
    fs.createReadStream(config.filename)
        .pipe(parser())
        .pipe(writableStream)
        .on("finish", async () => {
            log("CSV file successfully processed", "color");
            log("Merge files into one file", "color");

            var outputCssFile = fs.createWriteStream("output.css", {
                flags: "a",
            });

            outputCssFile.on("close", () =>
                log("Merging of files completed!", "color")
            );

            var r1 = fs.createReadStream("mal-animes.css");
            var r2 = fs.createReadStream("theme/main.css");

            r1.pipe(outputCssFile);
            r2.pipe(outputCssFile);
        });
};

app();
