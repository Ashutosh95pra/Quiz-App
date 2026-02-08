const question=[
  {
    que: "What is the correct way to create a JavaScript object?",
    a: "let obj = Object();",
    b: "let obj = {};",
    c: "let obj = new Object[];",
    d : "let obj = ();",
    correct : "b"
  },
  {
  que: "How do you access the value of property 'name' in the object user?",
  a: "user[name]",
  b: "user->name",
  c: "user.name",
  d: "user::name",
  correct: "c"
  },
  {
  que: "Which method is used to get all keys of an object?",
  a: "Object.values()",
  b: "Object.entries()",
  c: "Object.keys()",
  d: "Object.getKeys()",
  correct: "c"
  },
  {
  que: "How do you add a new property 'city' to an object person?",
  a: "person->city = 'Delhi';",
  b: "add person.city = 'Delhi';",
  c: "person.city = 'Delhi';",
  d: "person['add'] city = 'Delhi';",
  correct: "c"
  },
  {
  que: "What will be the output of console.log(obj.c)?",
  a: "0",
  b: "null",
  c: "undefined",
  d: "error",
  correct: "c"
},
{
  que: "Which loop is best to iterate over object properties?",
  a: "for",
  b: "forEach",
  c: "for...of",
  d: "for...in",
  correct: "d"
},
{
  que: "What does Object.values(obj) return?",
  a: "Object keys",
  b: "Object values",
  c: "Key-value pairs",
  d: "Object length",
  correct: "b"
},
{
  que: "How do you delete a property 'age' from an object user?",
  a: "remove user.age;",
  b: "delete user.age;",
  c: "user.age = delete;",
  d: "user.remove(age);",
  correct: "b"
},
{
  que: "What will be the output of: console.log('brand' in car)?",
  a: "false",
  b: "undefined",
  c: "true",
  d: "error",
  correct: "c"
},
{
  que: "Which of the following is NOT a valid JavaScript object?",
  a: "{}",
  b: "new Object()",
  c: "[]",
  d: "Object.create(null)",
  correct: "c"
}

]
let right=0;
let wrong=0;
let index=0;
let total=question.length;
let que=document.getElementById("ques");
let optionques=document.querySelectorAll(".options");
const loadQuestion=()=>{
  if(index===total){
    return endQuiz()
  }
  reset();
  const data=question[index];
  que.innerText=`${index+1}) ${data.que}`;
  optionques[0].nextElementSibling.innerText=data.a;
  optionques[1].nextElementSibling.innerText=data.b;
  optionques[2].nextElementSibling.innerText=data.c;
  optionques[3].nextElementSibling.innerText=data.d;
}


let submitQuiz=()=>{
  let data=question[index];
  const ans=getAnswer();
  if(ans==data.correct){
    right++;
  }else{
    wrong++;
  }
  index++;
  loadQuestion();
  return;
} 

const getAnswer=()=>{
  let answer;
  optionques.forEach((input)=>{
    if(input.checked){
      answer= input.value;
    }
  });
  return answer;
}

const reset=()=>{
  optionques.forEach(
    (input)=>{
      input.checked=false;
    }
  )
}
const endQuiz=()=>{
  document.getElementById("box").innerHTML=`
  <h2>Thank you for playing the Quiz</h2>
  <h3>${right} / ${total} are correct </h3>
  <h3>${wrong} / ${total} are wrong </h3>
  `
}

loadQuestion();