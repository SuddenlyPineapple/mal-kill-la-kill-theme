import fs from "fs";
import parser from "csv-parser";
import stream from "stream";

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
        await sleep(50);
        processRow(row);
        done();
    },
});

const app = () => {
    log(`Start processing csv file: ${config.filename}`, "color");
    fs.createReadStream(config.filename).pipe(parser()).pipe(writableStream);
    log("CSV file successfully processed", "color");
};

app();
