import React from "react";
import { useState } from "react";

const Question = ({
  category,
  type,
  difficulty,
  question,
  correctAnswer,
  incorrectAnswers,
  onClick,
  answers,
}) => {
  const [answered, setAnswered] = useState(null);

  const sanitize = (text) =>
    text
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'")
      .replaceAll("&amp;", "&")
      .replaceAll("&deg;", "º")
      .replaceAll("&shy;", "\u00AD");

  const addAnswer = (answer) => {
    if (answer === correctAnswer) {
      console.log("ok");
      setAnswered(answer);
    } else {
      console.log("ko");
      setAnswered(answer);
    }
  };
  const colorAnswers = (current) => {
    //right answer and we clicked it
    if (answered === current && current === correctAnswer) {
      return "text-base text-white bg-green-800 cursor-pointer py-2 px-6 w-5/6 rounded-lg";
      //right answer but we didn't click it
    } else if (
      correctAnswer === current &&
      answered !== current &&
      answered !== null
    ) {
      return "text-base text-white bg-red-800 cursor-pointer py-2 px-6 w-5/6 rounded-lg";
      //wrong answer and didn't click it
    } else if (correctAnswer !== current && answered !== null) {
      return "text-base text-white bg-neutral-500 cursor-pointer py-2 px-6 w-5/6 rounded-lg";
      //no answer given yet
    } else {
      return "text-base text-white bg-veryDarkBlue cursor-pointer py-2 px-6 w-5/6 rounded-lg";
    }
  };
  return (
    <div className="md:w-1/3 p-3">
      <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray ">
        <h2 className="text-xl uppercase bg-darkBlue text-white py-2 px-6">
          {category}
        </h2>
        <p className="text-sm bg-brightRed py-1 px-4 uppercase text-white">
          {difficulty}
        </p>
        <p className="min-h-28">{sanitize(question)}</p>
        {answers.map((answer) => (
          <p
            onClick={() => addAnswer(answer)}
            key={answer}
            className={colorAnswers(answer)}
          >
            {sanitize(answer)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Question;
