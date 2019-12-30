const TrieNode = require('./TrieNode');

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let index = 0;
    let crawler = this.root;

    for (let level = 0; level < word.length; level++) {
      index = word.charCodeAt(level) - 'a'.charCodeAt(0);
      if (crawler.children[index] === null) {
        crawler.children[index] = new TrieNode();
      }
      crawler = crawler.children[index];
    }

    crawler.isEndOfWord = true;
  }

  search(word) {
    let index = 0;
    let crawler = this.root;
    for (let level = 0; level < word.length; level++) {
      index = word.charCodeAt(level) - 'a'.charCodeAt(0);
      if (crawler.children[index] === null) {
        return false;
      }
      crawler = crawler.children[index];
    }
    return crawler !== null && crawler.isEndOfWord;
  }
}

module.exports = Trie;
