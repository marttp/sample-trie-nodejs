// Keys for create Trie
const keys = ['hello', 'hi', 'the', 'that', 'mango'];
// Inputs for test trie search
const testInput = ['the', 'these'];

const runTrie = (keys, inputs) => {
  const Trie = require('./Trie');
  const trie = new Trie();

  console.time('trieProcess');
  addWord(trie, keys);
  inputs.forEach(input => {
    if (typeof input !== 'string') {
      throw new Error('Not a string type');
    }
    const isExist = trie.search(input.toLowerCase());
    if (isExist) {
      console.log(`[${input}] is in trie.`);
    } else {
      console.log(`[${input}] isn't in trie.`);
    }
  });
  console.timeEnd('trieProcess');
};

const runTrieVersion2 = (keys, inputs) => {
  const TrieV2 = require('./TrieV2');
  const trieNewVersion = new TrieV2();

  console.time('trieV2Process');
  addWord(trieNewVersion, keys);
  inputs.forEach(input => {
    if (typeof input !== 'string') {
      throw new Error('Not a string type');
    }
    const isExist = trieNewVersion.search(input.toLowerCase());
    if (isExist) {
      console.log(`[${input}] is in trie.`);
    } else {
      console.log(`[${input}] isn't in trie.`);
    }
  });
  console.timeEnd('trieV2Process');
};

const addWord = (trie, keys) => {
  for (let i = 0; i < keys.length; i++) {
    if (typeof keys[i] !== 'string') {
      throw new Error('Not a string type');
    }
    const word = keys[i].toLowerCase();
    trie.insert(word);
  }
};

runTrie(keys, testInput);
console.log('\n')
runTrieVersion2(keys, testInput);