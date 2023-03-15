import React, { useState } from 'react';
import { Header } from '../Header';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

function TestL() {
	const questions = [
		{
			questionText: 'Выберите одно верное утверждение про списки:',
			answerOptions: [
				{ answerText: 'списки в Python являются изменяемыми', isCorrect: true },
				{ answerText: 'списки представляют собой массивы', isCorrect: false },
				{ answerText: 'списки невозможно сортировать', isCorrect: false },
				{ answerText: 'списки имеют фиксированный размер', isCorrect: false },
			],
		},

        {
			questionText: 'Выберите возможные способы задания списка',
			answerOptions: [
				{ answerText: 'r = lists', isCorrect: false },
				{ answerText: 'd = list', isCorrect: false },
				{ answerText: 'c=[]', isCorrect: true },
				{ answerText: '1b = [1, 3]', isCorrect: false },
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
                    <Link className="pp" to="/L"><button className='button5'>Назад</button></Link>
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

export {TestL}