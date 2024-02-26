import React from "react";
import Questions from "./Questions";
import { useContext, useEffect, useState } from "react";

const Board = () => {
  const [questions, setQuestions] = useState([]);
  const apiUrl = "https://opentdb.com/api.php?type=multiple";
  const settings = {
    number: 6,
    category: 21,
    difficulty: "easy",
  };

  useEffect(() => {
    const fetchData = async () => {
      const filterNumber = "&amount=" + settings.number;
      const filterCategory = "&category=" + settings.category;
      const filterDifficulty =
        "&difficulty=" + settings.difficulty.toLowerCase();
      const response = await fetch(
        `${apiUrl}${filterNumber}${filterCategory}${filterDifficulty}`
      );
      const data = await response.json();
      data.results.forEach((question) => {
        question.orderedAnswers = [
          question.correct_answer,
          ...question.incorrect_answers,
        ].sort((a, b) => 0.5 - Math.random());
      });
      console.log(data);
      console.log(
        `${apiUrl}${filterNumber}${filterCategory}${filterDifficulty}`
      );
      setQuestions(data.results);
    };

    fetchData();
  }, []);
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-16 text-center">
        <h2 className="text-4xl font-bold text-center">
          Can you guess the right answers?
        </h2>

        <Questions questions={questions} />
      </div>
    </section>
  );
};

export default Board;
