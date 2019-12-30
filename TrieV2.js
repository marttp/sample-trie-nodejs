const TrieNodeV2 = require('./TrieNodeV2');

class TrieV2 {
  constructor() {
    this.root = new TrieNodeV2();
  }

  insert(word) {
    let crawler = this.root;
    for (let level = 0; level < word.length; level++) {
        const character = word[level];
        if (!crawler.children[character]) {
            crawler.children[character] = new TrieNodeV2();
        }
        crawler = crawler.children[character];
    }
    crawler.isEndOfWord = true;
  }

  search(word) {
    let crawler = this.root;
    for (let level = 0; level < word.length; level++) {
        const character = word[level];
      if (!crawler.children[character]) {
        return false;
      }
      crawler = crawler.children[character];
    }
    return crawler && crawler.isEndOfWord;
  }
}

module.exports = TrieV2;
