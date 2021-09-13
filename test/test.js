const s = "loveleetcode";

const c = "e";

var shortestToChar = function (s, c) {
  let res = Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    // 如果当前位置是目标字符就跳出
    if (s[i] === c) continue;
    // 分别向左、右两个方向寻找目标字符 C，取最短距离
    let left = i,
      right = i,
      shortest = Infinity;

    while (left >= 0) {
      if (s[left] === c) {
        shortest = Math.min(shortest, i - left);
        break;
      }
      left--;
    }

    while (right < s.length) {
      if (s[right] === c) {
        shortest = Math.min(shortest, right - i);
        break;
      }
      right++;
    }
    res[i] = shortest;
  }
  return res;
};

console.log(shortestToChar(s, c), "---c----");