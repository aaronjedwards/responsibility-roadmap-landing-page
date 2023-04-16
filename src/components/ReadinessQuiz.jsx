import Link from 'next/link'

import { Container } from '@/components/Container'

const questions = [
  {
    question: "What kind of things can I expect to learn?",
    answer: "You can expect to learn about living independently, financial literacy, taxes, time management skills, and more."
  },
  {
    question: "Is the app free to use?",
    answer: "Yes, Responsibility Roadmap is a free platform aimed at helping individuals prepare for the real world."
  },
  {
    question: "Who is this designed for?",
    answer: "Responsibility Roadmap is designed for young adults transitioning into independence, college students, and early-career professionals seeking to improve essential life skills."
  },
  {
    question: "How do I access the learning modules?",
    answer: "Simply visit our website, sign up for a free account, and you'll have access to all of our learning modules."
  },
  {
    question: "Do I need any prior knowledge or experience to use this?",
    answer: "No, Responsibility Roadmap is designed for users of all backgrounds and experience levels. Our learning modules cater to a variety of skill levels and are designed to help you learn at your own pace."
  },
  {
    question: "Can I track my progress through the learning modules?",
    answer: "Yes, Responsibility Roadmap allows you to track your progress and achievements as you complete each learning module."
  },
  {
    question: "Are there any additional resources available on the platform?",
    answer: "Yes, Responsibility Roadmap offers a variety of supplementary resources, including articles, videos, and community forums to support your learning experience."
  },
  {
    question: "Can I access this on my mobile device?",
    answer: "Yes, Responsibility Roadmap is accessible on all major devices, including smartphones, tablets, and computers."
  }
];


export function ReadinessQuiz() {
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
          <p className="mt-2 text-lg text-gray-600">
            How prepared are you?
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20"
        >
          {questions.map((question, columnIndex) => (
            <li key={columnIndex} className="border p-6 rounded-lg">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {question.question}
                    </h3>
              <p className="mt-4 text-sm text-gray-700">{question.answer}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
