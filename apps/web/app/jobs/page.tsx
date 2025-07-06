export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">채용 정보</h1>
          <p className="text-gray-600">다양한 기업의 채용 정보를 확인하세요</p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="직무, 회사명 검색"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>지역 선택</option>
              <option>서울</option>
              <option>부산</option>
              <option>대구</option>
              <option>인천</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>경력 선택</option>
              <option>신입</option>
              <option>1-3년</option>
              <option>3-5년</option>
              <option>5년 이상</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              검색
            </button>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((job) => (
            <div key={job} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    프론트엔드 개발자
                  </h3>
                  <p className="text-gray-600 mb-2">테크 스타트업</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>서울 강남구</span>
                    <span>신입/경력</span>
                    <span>3,000만원 ~ 5,000만원</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  지원하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 