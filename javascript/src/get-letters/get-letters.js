/**
Complete the getLetter(s) function in the editor. It has one parameter: a string, s , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string s is in the set {a, e, i, o, u} , then return A.
If the first character in string s is in the set {b, c, d, f, g}, then return B.
If the first character in string s is in the set {h, j, k, l, m}, then return C.
If the first character in string s is in the set {n, p, q, r, s, t, u, v, w, x, y, z}, then return D.

You can get the letter at some index  i in s  using the syntax s[i] or s.charAt(i).
 */

function getLetter(s) {
  let letter;
  // Write your code here
  let a = ('a','e','i','o','u'),
      b = ('b','c','d','f','g'),
      c = ('h','j','k','l','m'),
      d = ('n','p','q','r','s','t','u','v','w','x','y','z');
  if(s[0] == a){
    letter = 'A';
  }
  else if (s[0] == b){
    letter= 'B';
  }
  else if(s[0] == c){
    letter = 'c';
  }
  else if(s[0] == d){
    letter = 'D';
  }

  return letter;
}

export { getLetter };
