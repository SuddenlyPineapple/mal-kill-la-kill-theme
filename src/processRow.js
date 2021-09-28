import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";

import log from "./log.js";

const processRow = (row) => {
    const anime_id = row.series_animedb_id;
    log(`Get anime with id: ${anime_id}`, "color");

    axios
        .get("https://myanimelist.net/anime/" + anime_id)
        .then(async (response) => {
            const $ = cheerio.load(response.data);
            const coverURL = $(
                "#content > table > tbody > tr > td.borderClass > div > div:nth-child(1) > a > img"
            ).attr("data-src");

            const cssString = `#more${anime_id}{background-image:url('${coverURL}')}\n`;

            fs.appendFile("mal-animes.css", cssString, { flag: "a" }, (err) => {
                err
                    ? log(err, "error")
                    : log(`Sucess: ${cssString}`, "color:green");
            });
        });
};

export default processRow;
