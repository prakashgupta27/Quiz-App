// import React, { useState, useRef } from "react";
// // import useRef from "react";
// import "./Quiz.css";
// import data from "../../assets/data";

// const Quiz =()=>{


//     let[index , setindex]= useState(0);
//     let[question , setQuestion] = useState(data[index]);
//     let[lock, setlock]= useState(false);
//     let[score, setScore] =useState(0);
//     let[result , setResult] =useState(false);

//     let Option1= useRef(null);
//     let Option2= useRef(null);
//     let Option3= useRef(null);
//     let Option4= useRef(null);

//     let option_array=[Option1, Option2 ,Option3 ,Option4];


//     const checkAns =(e,ans)=>{
//         if (lock === false) {
//             if(ans===question.ans){
//                 e.target.classList.add("Correct");
//                 setlock(true);
//                 setScore(prev=>prev+1);
//             }else{
//                 e.target.classList.add("Wrong");
//                 setlock(true);
//                 option_array[question.ans-1].current.classList.add("Correct")
//             }
//         }
//     }

//     const next=()=>{
//         if(lock === true){
//             if(index === data.lenght-1){
//                 setResult(true);
//                 return 0;
//             }
//             setindex(++index);
//             setQuestion(data[index]);
//             setlock(false);
//             option_array.map((option)=>{
//                 option.current.classList.remove("Wrong");
//                 option.current.classList.remove("Correct");
//                 return null;

//             })
//         }
//     }

// return(
//     <div className="container">
//     <h1>Quiz App</h1>
//     <hr />
//     {result?<></>:<> <h2>{index+1}.{question.question}</h2>
//     <ul>
//         <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
//         <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
//         <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
//         <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>

//     </ul>
//     <button onClick={next}>Next</button>
//     <div className="index">{index+1} of {data.lenght} Question</div>
//     </>}
//     <h2>You Scored {score} out of {data.lenght}</h2>
//     {result?<>
//     </>:<></>}
//     <button>Reset</button>
//     </div>
//     )
// }

// export default Quiz
import React, { useState, useRef } from "react";
import "./Quiz.css";
import data from "../../assets/data";

const name =prompt("Enter you Name")

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (ans === question.ans) {
        e.target.classList.add("Correct");
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("Wrong");
        option_array[question.ans - 1].current.classList.add("Correct");
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(prevIndex => prevIndex + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      option_array.forEach(option => {
        option.current.classList.remove("Wrong");
        option.current.classList.remove("Correct");
      });
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    option_array.forEach(option => {
      option.current.classList.remove("Wrong");
      option.current.classList.remove("Correct");
    });
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h2>{name} ! You Scored {score} out of {data.length}</h2>
          <button onClick={resetQuiz}>Reset</button>
        </>
      ) : (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
          </ul>
          <button onClick={next} disabled={!lock}>Next</button>
          <div className="index">{index + 1} of {data.length} Question</div>
        </>
      )}
    </div>
  );
}

export default Quiz;
