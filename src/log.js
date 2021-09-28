import chalk from "chalk";

const log = (message, type) => {
    if (type === "color") console.log(chalk.black.bgBlue(message));
    else if (type == "color:green") console.log(chalk.yellow.bgGreen(message));
    else if (type === "error") console.log(chalk.black.bgRed(message));
    else console.log(message);
};

export default log;
