import { characters } from "./data";
import type { Prefix } from "./models";

/**
 * Generates an 8-character ID with the selected prefix from a predefined list
 * @param {Prefix} prefix - The selected prefix from the list
 * @returns {string} The generated ID
 * @example
 * const selectedPrefix = 'PVOC';
 * const generatedId = mid(selectedPrefix);
 * console.log(generatedId); // Outputs something like 'PVOC1a2b'
 */
export function mid(prefix: Prefix): string {
  // Calculate how many characters we need to generate to complete the 8 characters
  const remainingLength = 8 - prefix.length;

  // Generate the remaining characters
  let id = prefix;
  for (let i = 0; i < remainingLength; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }

  return id;
}
