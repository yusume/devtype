"use client";

import { useSearchParams } from "next/navigation";

const results: Record<string, { title: string; description: string }> = {
  trycatch: {
    title: "try-catch 남용형",
    description:
      "삶도 에러를 뱉지만 나는 잡는다. 실패해도 프로그램은 안 멈춤. 단지 의미를 잃음.",
  },
  주석: {
    title: "주석형 인간",
    description:
      "코드보다 주석이 더 길다. 일부는 시, 일부는 유서. 본인도 코드 못 읽음.",
  },
  커밋안함: {
    title: "커밋 안 함형",
    description:
      "git은 스냅샷이 아니라 감정일기. 커밋 메시지는 ‘ㅇㅇ’, ‘몰라’, ‘진짜최종’.",
  },
  디버깅거부: {
    title: "디버깅 거부형",
    description:
      "내 코드는 완벽하니까 콘솔도 필요 없다. 오류 나면 환경 탓.",
  },
};

export default function ResultPage() {
  const params = useSearchParams();
  const type = params.get("type") ?? "";
  const result = results[type];

  if (!result) return <div className="p-8">결과가 없습니다.</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">{result.title}</h2>
      <p className="text-lg text-gray-700">{result.description}</p>
    </div>
  );
}