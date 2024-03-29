import readline from "readline";

/**
 * Read a line from stdin
 * @returns {Promise<string>} The line read from stdin
 * @example
 *    const line = await read_line();
 *    console.log(line);
 */
export default async function read_line() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question("", (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}
