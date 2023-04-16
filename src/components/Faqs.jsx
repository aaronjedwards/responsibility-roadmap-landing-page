import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [{
    question: "What kind of things can I expect to learn?",
    answer: "You can expect to learn about living independently, financial literacy, taxes, time management skills, and more."
  },
  {
    question: "Is the app free to use?",
    answer: "Yes, Responsibility Roadmap is a free platform aimed at helping individuals prepare for the real world. All of our learning modules and materials are free forever. We do offer a premium subscription for those who want to access additional features."
  },
  {
    question: "Who is this designed for?",
    answer: "Responsibility Roadmap is designed for young adults transitioning into independence, college students, and early-career professionals seeking to improve essential life skills."
  }],
  [{
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
  }],
  [{
    question: "Are there any additional resources available on the platform?",
    answer: "Yes, Responsibility Roadmap offers a variety of supplementary resources, including articles, videos, and community forums to support your learning experience."
  },
  {
    question: "Can I access this on my mobile device?",
    answer: "Yes, Responsibility Roadmap is accessible on all major devices, including smartphones, tablets, and computers."
  }]
];


export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
