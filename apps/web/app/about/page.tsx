export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">회사소개</h1>
          <p className="text-gray-600">Prism은 최고의 인재와 기업을 연결하는 채용 플랫폼입니다</p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">미션</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Prism은 기술과 혁신을 통해 인재와 기업이 서로를 찾을 수 있는 최고의 플랫폼을 제공합니다. 
            우리는 개인의 꿈과 기업의 성장이 함께 이뤄지는 세상을 만들기 위해 노력합니다.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">비전</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            아시아 최고의 채용 플랫폼으로 성장하여, 수많은 인재들이 자신의 꿈을 실현할 수 있도록 돕고, 
            기업들이 최고의 인재를 만날 수 있는 가교 역할을 하겠습니다.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">핵심 가치</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">혁신</h3>
              <p className="text-gray-600">최신 기술을 활용하여 사용자 경험을 지속적으로 개선합니다</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">신뢰</h3>
              <p className="text-gray-600">투명하고 정확한 정보로 사용자와의 신뢰 관계를 구축합니다</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">성장</h3>
              <p className="text-gray-600">개인과 기업의 지속적인 성장을 지원합니다</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">팀 소개</h2>
          <p className="text-gray-700 mb-8">
            Prism은 다양한 분야의 전문가들이 모여 최고의 서비스를 제공하기 위해 노력하고 있습니다.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold mb-1">김개발</h3>
                <p className="text-sm text-gray-600">프론트엔드 개발자</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 