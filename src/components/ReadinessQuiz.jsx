import React, { useMemo, useState } from 'react'
import { Container } from '@/components/Container'
import { Button } from './Button'

const responsibilityReadinessQuiz = [
  {
    question:
      'Which of the following is an essential step in creating a personal budget?',
    answers: [
      { text: 'Calculating your monthly income', correct: true },
      { text: 'Choosing your favorite restaurants', correct: false },
      { text: 'Deciding on a vacation destination', correct: false },
      { text: 'Picking a new hobby', correct: false },
    ],
  },
  {
    question: 'What is the primary purpose of an emergency fund?',
    answers: [
      { text: 'To pay for an extravagant vacation', correct: false },
      {
        text: 'To cover unexpected expenses or financial emergencies',
        correct: true,
      },
      { text: 'To invest in high-risk stocks', correct: false },
      { text: 'To buy a new car', correct: false },
    ],
  },
  {
    question: 'How often should you review and adjust your personal budget?',
    answers: [
      { text: 'Once a year', correct: false },
      { text: 'Every 5 years', correct: false },
      {
        text: 'Monthly or whenever your financial situation changes',
        correct: true,
      },
      { text: 'Never', correct: false },
    ],
  },
  {
    question:
      'Which of the following is a key strategy for effective time management?',
    answers: [
      { text: 'Procrastination', correct: false },
      { text: 'Overloading your schedule with tasks', correct: false },
      { text: 'Setting priorities and creating a to-do list', correct: true },
      { text: 'Ignoring deadlines', correct: false },
    ],
  },
  {
    question:
      'When filing your taxes, why is it important to keep track of your deductions and credits?',
    answers: [
      { text: 'To increase the complexity of your tax return', correct: false },
      {
        text: 'To potentially lower your taxable income and tax liability',
        correct: true,
      },
      {
        text: 'To impress your friends with your organizational skills',
        correct: false,
      },
      {
        text: 'Deductions and credits have no impact on your taxes',
        correct: false,
      },
    ],
  },
]

export function ReadinessQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [userAnswers, setUserAnswers] = useState(
    Array(responsibilityReadinessQuiz.length).fill(null)
  )

  const handleAnswerClick = (answerIndex) => {
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = answerIndex
    setUserAnswers(newUserAnswers)

    if (currentQuestion < responsibilityReadinessQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowScore(true)
    }
  }

  const { question, answers } = responsibilityReadinessQuiz[currentQuestion]

  const score = useMemo(() => {
    // determine the users score based on the number of correct answers
    let score = 0
    console.log(userAnswers)
    userAnswers.forEach((answerIndex, i) => {
      if (
        responsibilityReadinessQuiz[i].answers[answerIndex] &&
        responsibilityReadinessQuiz[i].answers[answerIndex].correct
      ) {
        score++
      }
    })
    return score
  }, [userAnswers])

  return (
    <section
      id="readiness-quiz"
      aria-labelledby="readiness-quiz-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Responsibility Readiness Quiz.
          </h2>
          <p className="mt-2 text-lg text-gray-600">How prepared are you?</p>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-6 w-full max-w-lg rounded-lg border p-6">
            {showScore ? (
              <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-lg text-gray-900">
                  You answered {score} out of{' '}
                  {responsibilityReadinessQuiz.length} questions correctly
                </h3>
                <Button href="/login">Get started to learn even more!</Button>
              </div>
            ) : (
              <>
                <h3 className="pb-4 text-lg font-semibold leading-6 text-gray-900">
                  {question}
                </h3>
                <ul role="list" className="space-y-2">
                  {answers.map((answer, j) => (
                    <li
                      key={j}
                      className="cursor-pointer rounded-lg border hover:bg-blue-50"
                      onClick={() => handleAnswerClick(j)}
                    >
                      <p className="p-2 text-sm text-gray-700">{answer.text}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
