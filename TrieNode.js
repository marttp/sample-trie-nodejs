const ALPHABET_SIZE = 26;

class TrieNode {
  constructor() {
    this.isEndOfWord = false;
    this.children = new Array(ALPHABET_SIZE).fill(null);
  }
}

module.exports = TrieNode;
