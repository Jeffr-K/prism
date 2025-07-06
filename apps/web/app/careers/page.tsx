export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">커리어</h1>
          <p className="text-gray-600">성공적인 커리어를 위한 정보와 팁을 제공합니다</p>
        </div>

        {/* Career Tips Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">이력서 작성 팁</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 명확하고 간결한 문장으로 작성하세요</li>
              <li>• 구체적인 성과와 수치를 포함하세요</li>
              <li>• 지원 직무와 관련된 경험을 강조하세요</li>
              <li>• 오타와 문법 오류를 꼭 확인하세요</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">면접 준비 가이드</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 회사와 직무에 대한 충분한 조사를 하세요</li>
              <li>• 예상 질문에 대한 답변을 미리 준비하세요</li>
              <li>• 자신의 경험을 구체적으로 설명할 수 있도록 하세요</li>
              <li>• 적절한 복장과 태도를 유지하세요</li>
            </ul>
          </div>
        </div>

        {/* Career Articles */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6">커리어 아티클</h2>
          <div className="space-y-6">
            {[1, 2, 3].map((article) => (
              <div key={article} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  개발자 커리어 성장을 위한 5가지 팁
                </h3>
                <p className="text-gray-600 mb-3">
                  개발자로서 지속적으로 성장하기 위해 필요한 핵심 요소들을 알아보세요.
                  기술적 역량뿐만 아니라 소프트 스킬의 중요성과 함께...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">2024.01.15</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 