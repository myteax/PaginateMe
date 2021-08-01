const action = (arr) => {
  let count = 5;
  let numberOfPages = 0;
  let div = Math.ceil(arr.length / count);
  let newarr = {};

  for (let i = 0; i < div; i++) {
    newarr[i + 1] = arr.slice(i * count, (i + 1) * count);
  }
  numberOfPages = Object.keys(newarr).length;
  return { newarr, numberOfPages };
};

let arr = [
  "fwv",
  "wvewev",
  "wvewev",
  "wvev",
  "Awvwer",
  "wve",
  "Vwev",
  "Vweffv",
  "ppow",
  "wvev",
  "Awvwer",
  "wve",
  "Vwev",
  "Vweffv",
  "wvev",
  "Awvwer",
  "wve",
  "Vwev",
  "Vweffv",
  "ppow",
  "wvev",
  "Awvwer",
  "wve",
  "Vwev",
  "Vweffv",
  "ppow",
  "wvev",
  "Awvwer",
  "wve",
  "Vwev",
  "Vweffv",
  "ppow",
  "wvev",
  "Awvwer",
  "wve",
  "Vwev",
  "Vweffv",
  "wvev",
  "Awvwer",
  "wve",
  "Vwev",
  "Vweffv",
  "ppow",
  "wvev",
  "Awvwer",
  "wve",
  "Vwev",
  "Vweffv",
  "ppow",
];

console.log(action(arr));
