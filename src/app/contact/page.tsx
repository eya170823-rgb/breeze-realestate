export default function Contact() {
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
            <a href="/contact" className="text-yellow-600 font-medium">문의</a>
          </div>
          <a href="tel:010-2601-0110" className="bg-yellow-600 text-white px-4 py-2 text-sm rounded hover:bg-yellow-700">
            010-2601-0110
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-600 text-sm font-medium mb-4 tracking-widest uppercase">Contact</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">문의하기</h1>
          <p className="text-gray-500">편하게 연락주세요. 빠르게 답변드리겠습니다.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-8">연락처</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-400 mb-1 tracking-widest uppercase">Phone</p>
                <a href="tel:010-2601-0110" className="text-2xl font-bold text-gray-900 hover:text-yellow-600">
                  010-2601-0110
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1 tracking-widest uppercase">Location</p>
                <p className="text-gray-700">제주특별자치도 제주시</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1 tracking-widest uppercase">Hours</p>
                <p className="text-gray-700">평일 09:00 - 18:00</p>
                <p className="text-gray-500 text-sm">주말 및 공휴일 상담 가능 (전화 문의)</p>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="tel:010-2601-0110"
                className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-yellow-700 text-sm">
                전화 상담
              </a>
              <a href="https://open.kakao.com"
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded hover:bg-yellow-500 text-sm font-medium">
                카카오톡 상담
              </a>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">매물 문의</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 block mb-1">이름</label>
                <input type="text" placeholder="이름을 입력해주세요"
                  className="w-full border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-yellow-600" />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">연락처</label>
                <input type="tel" placeholder="010-0000-0000"
                  className="w-full border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-yellow-600" />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">문의 내용</label>
                <textarea placeholder="문의 내용을 입력해주세요" rows={4}
                  className="w-full border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-yellow-600 resize-none" />
              </div>
              <p className="text-xs text-gray-400">※ 문의 폼은 추후 구글 폼으로 연동됩니다.</p>
              <button className="w-full bg-gray-900 text-white py-3 rounded text-sm hover:bg-gray-700">
                문의 접수
              </button>
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