import React, {useState} from 'react';
// Types
import {QuestionState, Difficulty, fetchQuizQuestions} from './API'
// Components
import QuestionCard from "./components/QuestionCard"

// Styles
import { GlobalStyle, Wrapper, FloatingCard} from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading]=useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setuserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  //console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  //console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setuserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    if (!gameOver) {
      //Users answer
      const answer = e.currentTarget.value;
      // Check answer against the correct answer
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(prev => prev + 1);
      }
      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setuserAnswers((prev)=> [...prev, answerObject])

    }
  }

  const nextQuestion = () => {
    // move to the next question if this isn't the last question
    const nextQuestion = number +1;
    if (nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    } else {
      setNumber(nextQuestion)
    }

  }

  return (
    <>
    <GlobalStyle />

    <div className="col-sm">
      <Wrapper>
      <h1>CU Sports Center</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ?  (
        <button className="start" onClick={startTrivia}>Start</button>
      ) : null}

      {!gameOver ? 
      <FloatingCard>
        <div>
          <p className="score">Score: {score} </p> 
        </div>
        
      </FloatingCard>
      : null}
      
      {loading && <p>Loading Questions ...</p>}

      {!loading && !gameOver && ( 
        <QuestionCard 
        questionNumber={number + 1}
        totalQuestions = {TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}
      />

      )}
      
      
      
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ? (
        <div className = "next-button">
          <button className="next next-question" onClick={nextQuestion}>
            Next Question
          </button>
      </div>
        
      ) : null }  

      
      </Wrapper>
    </div>

   
    </>
  );
}

export default App;
