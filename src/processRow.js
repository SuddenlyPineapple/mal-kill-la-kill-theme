import axios from "axios";
import chalk from "chalk";

import log from "./log.js";

const processRow = (row) => {
    console.log(row);
    log(row);
};

export default processRow;
