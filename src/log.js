import chalk from "chalk";

const log = (message, type) => {
    if (type === "color") console.log(chalk.yellow.bgBlue(message));
    else if (type === "error") console.log(chalk.red.bgBlack(message));
    else console.log(message);
};

export default log;
