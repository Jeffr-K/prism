export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">기업 정보</h1>
          <p className="text-gray-600">다양한 기업들의 정보를 확인하세요</p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="기업명 검색"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              검색
            </button>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((company) => (
            <div key={company} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">P</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">테크 스타트업</h3>
                  <p className="text-sm text-gray-500">IT/소프트웨어</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                혁신적인 기술로 미래를 만들어가는 스타트업입니다.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>서울 강남구</span>
                <span>50-100명</span>
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">TypeScript</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Node.js</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 