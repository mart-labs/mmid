import { charactersAll, charactersLetters, charactersNumbers } from "./data";
import { Options } from "./models";

/**
 * Generates an ID with the selected prefix from a predefined list.
 * @param {Options} [options] - The options for generating the ID.
 * @returns {string} The generated ID. The length of the generated ID will be equal to the specified length.
 * @example
 * // Example 1: Using default parameters
 * // Defaults Parameters: { prefix: "JJPV", length: "8" }
 * const generatedId = mid();
 * console.log(generatedId); // Outputs something like 'JJPVoVnm'
 *
 * // Example 2: Using custom parameters
 * const customId = mid({ prefix: "PVOC", length: "16", charactersSet: "all" });
 * console.log(customId); // Outputs something like 'PVOC1hgJks7d5jT2'
 */
export function mid({
  prefix = "JJPV",
  length = "8",
  charactersSet = "all",
  includeChars,
  excludeChars,
}: Options = {}): string {
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

  // Include specific characters if provided
  if (includeChars) {
    characters += includeChars;
  }

  // Exclude specific characters if provided
  if (excludeChars) {
    characters = characters.replace(new RegExp(`[${excludeChars}]`, "g"), "");
  }

  // Calculate how many characters we need to generate to complete the specified length
  const remainingLength = Number(length) - prefix.length;

  // Generate the remaining characters
  let id = prefix;
  for (let i = 0; i < remainingLength; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }

  return id;
}

console.log(
  mid({
    length: "32",
    charactersSet: "letters",
    prefix: "JEFF",
  })
);
