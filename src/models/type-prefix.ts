export type Prefix =
  | "PVOC"
  | "0204"
  | "JJLM"
  | "1230"
  | "JJPV"
  | "0230"
  | "FLDR"
  | "IVTY"
  | "AUTH"
  | "MART"
  | "JEFF"
  | "PROD";

export interface Options {
  prefix?: Prefix;
  length?: "8" | "16" | "32" | "64";
  charactersSet?: "all" | "numbers" | "letters";
  includeChars?: string;
  excludeChars?: string;
}
