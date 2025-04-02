"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">DevType 테스트</h1>
      <p className="text-lg mb-6">당신은 어떤 개발자일까요? 🤔</p>
      <Link href="/quiz">
        <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800">
          테스트 시작하기
        </button>
      </Link>
    </main>
  );
}