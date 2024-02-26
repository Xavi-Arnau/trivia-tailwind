import React from "react";

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
  const sanitize = (text) =>
    text
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'")
      .replaceAll("&amp;", "&")
      .replaceAll("&deg;", "º")
      .replaceAll("&shy;", "\u00AD");
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
            key={answer}
            className="text-base text-white bg-veryDarkBlue cursor-pointer py-2 px-6 w-5/6 rounded-lg"
          >
            {sanitize(answer)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Question;
