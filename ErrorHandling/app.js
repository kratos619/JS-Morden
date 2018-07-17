let re;
//llitral cheracters

re = /hello/;
re = /hello/i;
// metacheracter Symbolls
re = /^h/i; //must start with
re = /World$/i; //must end with

re = /^hello$/i; // must begin and end with
re = /^h.llo$/i; // Matches any ONE Character
re = /h*llo/i; // Matches any any Character 0 or more times
//times

re = /gre?a?y/i; // Optional Cheracter

re = /gre?a?y\?/i; // escape Cheracter

const str = "Gray";
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} Not matched ${re.source}`);
  }
}

reTest(re, str);
