//1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.
function countWords(paragraph,love,you)
{
  let a =(paragraph.split(" "));

  let count = 0;
  let count1 = 0;

  for(let i=0;i< a.length;i++)
  {
    if(a[i].includes(love))
          count++;
      
    if(a[i].includes(you))
      count1++;
  }
    if(count < count1)
    
      return count1;
      return count;
  }

  

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
const word = "love";
const word1 = "you";
console.log(countWords(paragraph,word, word1));

//1.b. Write a function called ***cleanText***. The function takes raw text as a parameter and returns the clean text.
function cleanText(sentence){
    return sentence.replace(/[^a-zA-Z. ]/g, "")

}
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));

//1.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.
function cleanTextCount(sentence1){
   return sentence1.trim().split(/\b\w{2,}/g).length;
}
let sentence1 = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;
console.log(cleanTextCount(sentence1));
//1.d. How many words were used to construct this sentence. Now, don't exclude one letter words.
function wordsCount(sentence2){
  return sentence2.trim().split(/\s+/).length;
}
let sentence2 = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;
console.log(wordsCount(sentence2));
// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
//solution:


let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);

//2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique

  let arr2 = [];
  while(arr2.length < 7)
  {
    var ranNum = Math.floor(Math.random()*9) + 1;
    if(arr2.indexOf(ranNum) === -1) arr2.push(ranNum);   
  }

console.log(arr2);
//2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The  reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.

function reverseArray(array){
 let arr1 =[];
 
 while(i = array.pop())
   arr1.push(i);
   return arr1;
}
console.log(reverseArray(["A", "B", "C"]));

//2.d. Write a function which check if items of an array are unique?

const unique = (value,index,self) => {
  return self.indexOf(value) === index
}
const arrOne = [1, 4, 6, 2, 1];
const uniqueArray = arrOne.filter(unique);
console.log(uniqueArray);





