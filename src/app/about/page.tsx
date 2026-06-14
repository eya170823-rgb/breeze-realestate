export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">BREEZE</span>
            <span className="text-sm text-gray-400">부동산중개</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm text-gray-600">
            <a href="/properties" className="hover:text-yellow-600">매물보기</a>
            <a href="/about" className="hover:text-yellow-600">소개</a>
            <a href="/contact" className="hover:text-yellow-600">문의</a>
          </div>
          <a href="tel:010-2601-0110" className="bg-yellow-600 text-white px-4 py-2 text-sm rounded hover:bg-yellow-700">
            010-2601-0110
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-600 text-sm font-medium mb-4 tracking-widest uppercase">Jeju Island</p>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            제주의 공간을<br />연결합니다
          </h1>
          <p className="text-gray-500 text-lg mb-10">브리즈부동산중개</p>
          <div className="flex flex-wrap gap-4">
            <a href="/properties" className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-700">
              매물 보기
            </a>
            <a href="tel:010-2601-0110" className="bg-yellow-600 text-white px-8 py-3 rounded hover:bg-yellow-700">
              전화하기
            </a>
            <a href="sms:010-2601-0110" className="bg-yellow-500 text-white px-8 py-3 rounded hover:bg-yellow-600">
              문자 상담
            </a>
            <a href="https://open.kakao.com" className="border border-gray-300 text-gray-700 px-8 py-3 rounded hover:border-yellow-600 hover:text-yellow-600">
              카카오 상담
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-yellow-600 text-3xl mb-4">🏠</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">지역 전문</h3>
            <p className="text-gray-500 text-sm">제주 부동산 전문 중개</p>
          </div>
          <div>
            <div className="text-yellow-600 text-3xl mb-4">🤝</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1:1 밀착 중개</h3>
            <p className="text-gray-500 text-sm">고객 상황에 맞는 맞춤형 부동산 솔루션</p>
          </div>
          <div>
            <div className="text-yellow-600 text-3xl mb-4">✨</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">신뢰 중개</h3>
            <p className="text-gray-500 text-sm">투명하고 정직한 거래로 신뢰를 쌓습니다</p>
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