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

// Brackets [] - charecter sets
re = /gr[ae]y/i; // Must Be An a Or e
re = /[GF]ray/i; // Must Be An G Or F
re = /[^GF]ray/i; // Match anyThing except a G or F
re = /[A-Z]ray/i; // Match anyThing any UPPERcase Latter A to Z
re = /[a-z]ray/i; // Match anyThing any lower case Latter a to z
re = /[A-Za-z]ray/i; // Match any latter in any case
re = /[0-9]ray/; // match 0 - 9 any digit

// Braces {} - Quantifires
re = /Hel{2}o/i; /// must occur exactly {m} amount

re = /Hel{2,4}o/i; // must occur exactly {m} amount of Times

re = /Hel{2,}o/i; // must occur atlist m amount of Times
// Parenthese() -Grouping
//sytring to match
re = /([0-9]x){3}/;

//Shorthand Cheratecr Classes

re = /\w/; // Word Charecter  - alphanumeric or _

re = /\w+/; // +  = one or more
re = /\w/; // Word Charecter  - alphanumeric or _
re = /\W/; // Non Word Charecter  (upper case W)
re = /\d/; // Match Any Digit
re = /\d+/; // Match Any Digit 0 to more times
re = /\D/; // Match any Non digit
re = /\s/; // Match white space charecters
re = /\S/; // Match NON white space charecters
re = /Hell\b/i; // word boundry

//Assertions
re = /x(?=y)/; // Match x only if Followed by y
re = /x(?!y)/; // Match x only if NOT  Followed by y

const str = "fsdSGsgSyxy";
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
