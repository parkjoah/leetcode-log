/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const lastP = new Map(); 
  const lastW = new Map(); 

  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    const w = words[i];

    if ((lastP.get(ch) ?? -1) !== (lastW.get(w) ?? -1)) return false;

    lastP.set(ch, i);
    lastW.set(w, i);
  }

  return true;
};
