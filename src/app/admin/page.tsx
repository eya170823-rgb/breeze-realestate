export default function Admin() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-gray-900 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">BREEZE</span>
            <span className="text-gray-400 text-sm">관리자</span>
          </div>
          <a href="/" className="text-gray-400 text-sm hover:text-white">홈으로</a>
        </div>
      </nav>
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">관리자 페이지</h1>
          <p className="text-gray-500 text-sm mb-10">구글 시트에서 매물을 관리하세요</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <p className="text-sm text-gray-400 mb-1">총 매물</p>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <p className="text-sm text-gray-400 mb-1">거래가능</p>
              <p className="text-3xl font-bold text-yellow-600">0</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <p className="text-sm text-gray-400 mb-1">거래완료</p>
              <p className="text-3xl font-bold text-gray-400">0</p>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 p-8 text-center">
            <p className="text-gray-400 text-sm mb-6">구글 시트에서 매물을 직접 관리할 수 있습니다</p>
            <a href="https://docs.google.com/spreadsheets" target="_blank" className="inline-block bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 text-sm">
              구글 시트 열기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}