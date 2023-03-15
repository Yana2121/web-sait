import React, { useState } from 'react';
import { Header } from '../Header';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";


function TestHW() {
	const questions = [
		{
			questionText: 'Какая функция выводит что-либо в консоль?',
			answerOptions: [
				{ answerText: 'write();', isCorrect: false },
				{ answerText: 'log();', isCorrect: false },
				{ answerText: 'out();', isCorrect: false },
				{ answerText: 'print();', isCorrect: true },
			],
		},
		{
			questionText: 'С помощью какого(их) символов создаются комментарии?',
			answerOptions: [
				{ answerText: '//', isCorrect: false },
				{ answerText: '#', isCorrect: true },
				{ answerText: '/* */', isCorrect: false },
				{ answerText: '(* *)', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='hzz'>
		<div className='app'>
		
			{showScore ? (
				<div className='score-section'>
					Вы ответили на {score} из {questions.length}
                    <div className='ji'>
                    <Link className="pp" to="/HW"><button className='button5'>Назад</button></Link>
                    </div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Вопрос {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
                        
					</div>

				</>
			)}

		</div>
		</div>
	);
}

export {TestHW}