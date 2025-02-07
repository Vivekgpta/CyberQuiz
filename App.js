// import logo from './logo.svg';
import './App.css';
// import './index.css';
import React from 'react';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];
// flex justify-center items-center h-screen

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answered, setAnswered] = React.useState(false);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const NextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
   
  };

  // flex justify-center items-center h-screen
  // w-full max-w-1g bg-gray p-5 rounded shadow-lg
  // p-2 border text-center font-bold mb-2 text-xl

  return (
    <div className="main-container">
     <div className="sub-container">
      <div className='header-quiz'><h1>Quiz App</h1>
      </div>
      {/* <hr></hr><br></br> */}
      {showScore ? <div className='score-section'>
        Your Score is {score} out of {questions.length} .
        
      </div>:
      <div>
        <div>{questions[currentQuestion].questionText}</div>
        {
          questions[currentQuestion].answerOptions.map((option, index) => (
            <button id='option'
            onClick={()=>handleAnswerOption(index, option.isCorrect)}
            // 
            className={`block w-full p-2 mt-2 rounded border ${
              answered && selectedAnswer === index
              ? option.isCorrect
              ? "bg-green-500"
              : "bg-red-500"
              : "bg-white"
            }`}>{option.answerText}</button>
          ))
        }
        {/* block w-full  text-white */}
        <button  className={`${answered ? "bg-green-500" : "bg-green-300"} btn`}  
        disabled={answered ? "" : "disabled"}
        onClick={NextQuestion}>Next Question</button>
        {/* block w-full p-2 mt-2 rounded border */}
        <p className='footer'>Question {currentQuestion + 1} of {questions.length} </p>
      </div>
  }
     </div>

    </div>
  );
}

export default App;
