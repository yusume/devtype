"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    question: "코드를 짜다가 안 되는 부분이 생겼을 때 나는:",
    options: [
      "일단 로그 찍고 본다",
      "코드를 다 지우고 다시 짠다",
      "대충 try-catch 박고 넘어간다",
      "안 되는 부분을 주석으로 덮어버린다",
    ],
  },
  {
    question: "커밋 메시지를 작성할 때:",
    options: [
      "작업 내용을 깔끔히 정리해서 작성",
      "그냥 'fix'라고 씀",
      "기억 안 남",
      "커밋 안 하고 복붙해놓음",
    ],
  },
  // ...더 추가 가능
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState<number[]>([]);
  const router = useRouter();

  const handleClick = (index: number) => {
    setScore([...score, index]);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      const result = getResult(score.concat(index));
      router.push(`/result?type=${result}`);
    }
  };

  const getResult = (answers: number[]) => {
    const count = [0, 0, 0, 0];
    answers.forEach((ans) => count[ans]++);
    const maxIndex = count.indexOf(Math.max(...count));
    return ["trycatch", "주석", "커밋안함", "디버깅거부"][maxIndex];
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Q{current + 1}. {questions[current].question}
      </h2>
      <div className="space-y-4">
        {questions[current].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="block w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-left"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
