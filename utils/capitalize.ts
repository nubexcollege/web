export const capitalize = (line: string) => {
  const ignoreWords = ["a", "an", "the", "and", "in", "on", "of"];
  return line.split(" ").map((word) => {
    if (ignoreWords.includes(word)) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
};
