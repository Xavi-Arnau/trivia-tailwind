import React from "react";
import Question from "./Question";

const Questions = ({ questions }) => {
  return (
    <div className="flex flex-col mt-24 md:flex-row  justify-between flex-wrap">
      {questions.map((question) => (
        <Question
          key={question.question}
          category={question.category}
          type={question.type}
          difficulty={question.difficulty}
          question={question.question}
          correctAnswer={question.correct_answer}
          incorrectAnswers={question.incorrect_answers}
          answers={question.orderedAnswers}
        />
      ))}
    </div>
  );
};

export default Questions;
