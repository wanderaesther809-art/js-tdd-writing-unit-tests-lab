export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  if (word.length === 0) return false; // Check empty string first

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must only contain letters");
  }

  const lowerWord = word.toLowerCase();
  const reversed = lowerWord.split("").reverse().join("");
  return lowerWord === reversed;
}
