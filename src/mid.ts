import chalk from "chalk";
import { charactersAll, charactersLetters, charactersNumbers } from "./data";
import { Options } from "./models";

/**
 * Generates an ID with the selected prefix from a predefined list.
 * @param {Options} [options] - The options for generating the ID.
 * @param {string | null} [options.prefix=null] - The selected prefix for the ID.
 * @param {number} [options.length=8] - The length of the generated part of the ID (excluding the prefix).
 * @param {"all" | "numbers" | "letters"} [options.charactersSet="all"] - The character set to use.
 * @param {string} [options.includeChars] - Additional characters to include in the character set.
 * @param {string} [options.excludeChars] - Characters to exclude from the character set.
 * @returns {string} The generated ID. The total length of the ID will be equal to the length of the prefix plus the specified length.
 * @example
 * // Example 1: Using default parameters
 * // Defaults Parameters: { prefix: "JJPV", length: 8 }
 * const generatedId = mid();
 * console.log(generatedId); // Outputs something like 'JJPVoVnm'
 *
 * // Example 2: Using custom parameters
 * const customId = mid({ prefix: "PVOC", length: 16, charactersSet: "all" });
 * console.log(customId); // Outputs something like 'PVOC1hgJks7d5jT2'
 */
export function mid({
  prefix = null,
  length = 8,
  charactersSet = "all",
  includeChars,
  excludeChars,
}: Options = {}): string {
  if (length > 64) {
    console.warn(
      chalk.yellow(
        "The specified length exceeds the maximum allowed length of 64. Setting length to 64."
      )
    );
    length = 64;
  } else if (length < 4) {
    console.warn(
      chalk.yellow(
        "The specified length is less than the minimum allowed length of 4. Setting length to 4."
      )
    );
    length = 4;
  }

  let characters;
  switch (charactersSet) {
    case "all":
      characters = charactersAll;
      break;
    case "numbers":
      characters = charactersNumbers;
      break;
    case "letters":
      characters = charactersLetters;
      break;
    default:
      characters = charactersAll;
  }

  if (includeChars) {
    characters += includeChars;
  }

  if (excludeChars) {
    characters = characters.replace(new RegExp(`[${excludeChars}]`, "g"), "");
  }

  let id = "";
  for (let i = 0; i < length; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }

  const finalId = prefix ? prefix + id : id;

  return finalId;
}
