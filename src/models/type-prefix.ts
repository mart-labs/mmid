export interface Options {
  prefix?: string | null;
  length?: number;
  charactersSet?: "all" | "numbers" | "letters";
  includeChars?: string;
  excludeChars?: string;
}
