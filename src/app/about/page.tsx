export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">BREEZE</span>
            <span className="text-sm text-gray-400">부동산중개</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm text-gray-600">
            <a href="/properties" className="hover:text-amber-700">매물보기</a>
            <a href="/about" className="text-amber-700 font-medium">소개</a>
            <a href="/contact" className="hover:text-amber-700">문의</a>
          </div>
          <a href="tel:010-2601-0110" className="bg-amber-700 text-white px-4 py-2 text-sm rounded hover:bg-amber-800">
            010-2601-0110
          </a>
        </div>
      </nav>
      <section className="pt-32 pb-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-700 text-sm font-medium mb-4 tracking-widest uppercase">About Us</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">브리즈부동산중개</h1>
          <p className="text-gray-500 text-lg max-w-2xl">제주 부동산 전문 중개사무소입니다. 신뢰를 바탕으로 한 투명한 중개 서비스를 제공합니다.</p>
        </div>
      </section>
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-amber-700 text-2xl mb-4">✦</p>
            <h3 className="font-bold text-gray-900 mb-2">지역 전문</h3>
            <p className="text-gray-500 text-sm">제주 부동산을 깊이 이해하는 전문 중개사가 함께합니다.</p>
          </div>
          <div>
            <p className="text-amber-700 text-2xl mb-4">✦</p>
            <h3 className="font-bold text-gray-900 mb-2">투명한 거래</h3>
            <p className="text-gray-500 text-sm">숨김 없는 정보 공개로 고객이 안심하고 결정할 수 있도록 합니다.</p>
          </div>
          <div>
            <p className="text-amber-700 text-2xl mb-4">✦</p>
            <h3 className="font-bold text-gray-900 mb-2">1:1 맞춤 서비스</h3>
            <p className="text-gray-500 text-sm">고객 한 분 한 분의 상황에 맞는 최적의 솔루션을 제시합니다.</p>
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