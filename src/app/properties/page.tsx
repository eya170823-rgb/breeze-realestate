export default function PropertyDetail() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">BREEZE</span>
            <span className="text-sm text-gray-400">부동산중개</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm text-gray-600">
            <a href="/properties" className="text-yellow-600 font-medium">매물보기</a>
            <a href="/about" className="hover:text-yellow-600">소개</a>
            <a href="/contact" className="hover:text-yellow-600">문의</a>
          </div>
          <a href="tel:010-2601-0110" className="bg-yellow-600 text-white px-4 py-2 text-sm rounded hover:bg-yellow-700">
            010-2601-0110
          </a>
        </div>
      </nav>

      <section className="pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <a href="/properties" className="text-sm text-gray-400 hover:text-yellow-600 mb-8 inline-block">
            ← 매물 목록으로
          </a>
          <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center mb-8">
            <span className="text-gray-400">사진 준비중</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-yellow-50 text-yellow-600 px-2 py-1 rounded">원룸</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">매물 상세 정보</h1>
              <p className="text-gray-500 mb-6">제주시 노형동</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded p-4">
                  <p className="text-xs text-gray-400 mb-1">보증금</p>
                  <p className="font-bold text-gray-900">500만원</p>
                </div>
                <div className="bg-gray-50 rounded p-4">
                  <p className="text-xs text-gray-400 mb-1">월세</p>
                  <p className="font-bold text-gray-900">45만원</p>
                </div>
                <div className="bg-gray-50 rounded p-4">
                  <p className="text-xs text-gray-400 mb-1">면적</p>
                  <p className="font-bold text-gray-900">20㎡</p>
                </div>
                <div className="bg-gray-50 rounded p-4">
                  <p className="text-xs text-gray-400 mb-1">층</p>
                  <p className="font-bold text-gray-900">3층</p>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 mb-3">매물 설명</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  구글 시트 연동 후 매물 설명이 자동으로 표시됩니다.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h2 className="font-bold text-gray-900 mb-4">상담 문의</h2>
                <a href="tel:010-2601-0110" className="block text-center bg-yellow-600 text-white py-3 rounded mb-3 hover:bg-yellow-700 text-sm">
                  전화 상담
                </a>
                <a href="https://open.kakao.com" className="block text-center bg-yellow-400 text-gray-900 py-3 rounded hover:bg-yellow-500 text-sm font-medium">
                  카카오톡 상담
                </a>
                <p className="text-xs text-gray-400 text-center mt-4">010-2601-0110</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-white font-bold text-lg mb-2">브리즈부동산중개</p>
          <p className="text-sm">제주특별자치도 제주시</p>
          <p className="text-sm mt-1">010-2601-0110</p>
          <p className="text-xs mt-4 text-gray-600">© 2026 BREEZE 부동산중개. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}