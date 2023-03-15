import React, { useState } from 'react';
import { Header } from '../Header';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";


function TestLoo() {
	const questions = [
		{
			questionText: 'Что делает цикл while?',
			answerOptions: [
				{ answerText: 'Выходит из цикла', isCorrect: false },
				{ answerText: 'Повторяется, пока выполняется условие', isCorrect: true },
				{ answerText: 'Пропускает определенный блок', isCorrect: false },
				{ answerText: 'Нет правильного варианта', isCorrect: false },
			],
		},
		{
			questionText: 'Что делает оператор breack?',
			answerOptions: [
				{ answerText: 'Выходит из цикла', isCorrect: true },
				{ answerText: 'Повторяется, пока выполняется условие', isCorrect: false },
				{ answerText: 'Пропускает определенный блок', isCorrect: false },
				{ answerText: 'Нет правильного варианта', isCorrect: false },
			],
		},
        {
			questionText: 'Что делает оператор continue?',
			answerOptions: [
				{ answerText: 'Выходит из цикла', isCorrect: false },
				{ answerText: 'Повторяется, пока выполняется условие', isCorrect: false },
				{ answerText: 'Пропускает определенный блок', isCorrect: true },
				{ answerText: 'Нет правильного варианта', isCorrect: false },
			],
		},
        {
			questionText: 'Можно ли использовать else для циклов?',
			answerOptions: [
				{ answerText: 'Да', isCorrect: true },
				{ answerText: 'Нет', isCorrect: false },
                { answerText: 'Только в определенных ситуациях', isCorrect: false },
				{ answerText: 'Оператор else не используется в puthon', isCorrect: false },
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
                    <Link className="pp" to="/Loo"><button className='button5'>Назад</button></Link>
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

export {TestLoo}