import { Home, Building2, Building, BedDouble, BedSingle, Clock } from "lucide-react";

export default function Main() {
  return (
    <main className="min-h-screen bg-white">

      {/* 헤더 */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <div className="h-px bg-amber-700 w-5"></div>
              <div className="h-px bg-amber-700 w-3"></div>
            </div>
            <div>
              <span style={{fontFamily:"'Playfair Display', serif"}} className="text-xl font-bold text-gray-900 tracking-widest">BREEZE</span>
              <span className="text-xs text-gray-400 ml-2">부동산중개</span>
            </div>
          </a>
          <a href="tel:010-2601-0110" className="text-sm text-gray-600 hover:text-amber-700">
            010-2601-0110
          </a>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="pt-32 pb-20 px-6" style={{background:"linear-gradient(135deg, #f9f9f9 0%, #f0ece6 100%)"}}>
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-700 text-xs font-medium mb-4 tracking-widest uppercase">Jeju Island</p>
          <h1 style={{fontFamily:"'Playfair Display', serif"}} className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            BREEZE
          </h1>
          <p className="text-gray-500 text-sm tracking-widest mb-10">제주의 공간을 연결합니다</p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:010-2601-0110" className="bg-gray-900 text-white px-6 py-3 text-sm rounded hover:bg-gray-700">
              전화하기
            </a>
            <a href="sms:010-2601-0110" className="bg-amber-700 text-white px-6 py-3 text-sm rounded hover:bg-amber-800">
              문자 상담
            </a>
            <a href="https://open.kakao.com/o/sJ7BcDzi" className="border border-gray-300 text-gray-700 px-6 py-3 text-sm rounded hover:border-amber-700 hover:text-amber-700">
              카카오 상담
            </a>
          </div>
        </div>
      </section>

      {/* 매물 아이콘 메뉴 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-gray-400 tracking-widest mb-8 text-center uppercase">Properties</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { icon: <Building2 size={28}/>, label: "아파트", href: "/properties?type=아파트" },
              { icon: <Building size={28}/>, label: "오피스텔", href: "/properties?type=오피스텔" },
              { icon: <BedSingle size={28}/>, label: "원룸", href: "/properties?type=원룸" },
              { icon: <BedDouble size={28}/>, label: "투룸", href: "/properties?type=투룸" },
              { icon: <Home size={28}/>, label: "쓰리룸", href: "/properties?type=쓰리룸" },
            ].map((item) => (
              <a key={item.label} href={item.href}
                className="flex flex-col items-center gap-3 p-6 rounded-lg border border-gray-100 hover:border-amber-700 hover:text-amber-700 transition-colors group">
                <span className="text-gray-400 group-hover:text-amber-700">{item.icon}</span>
                <span className="text-xs text-gray-600 group-hover:text-amber-700">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-amber-700 text-2xl mb-3">✦</p>
            <h3 className="font-bold text-gray-900 mb-2 text-sm">지역 전문</h3>
            <p className="text-gray-500 text-xs">제주 부동산 전문 중개</p>
          </div>
          <div className="text-center">
            <p className="text-amber-700 text-2xl mb-3">✦</p>
            <h3 className="font-bold text-gray-900 mb-2 text-sm">1:1 밀착 중개</h3>
            <p className="text-gray-500 text-xs">고객 맞춤형 부동산 솔루션</p>
          </div>
          <div className="text-center">
            <p className="text-amber-700 text-2xl mb-3">✦</p>
            <h3 className="font-bold text-gray-900 mb-2 text-sm">신뢰 중개</h3>
            <p className="text-gray-500 text-xs">투명하고 정직한 거래</p>
          </div>
        </div>
      </section>

      {/* 푸터 SNS */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div style={{fontFamily:"'Playfair Display', serif"}} className="text-white text-xl font-bold mb-1">BREEZE</div>
          <p className="text-gray-500 text-xs mb-8">부동산중개 · 제주특별자치도 제주시 · 010-2601-0110</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="sms:010-2601-0110" className="flex items-center gap-2 text-gray-400 hover:text-amber-600 text-xs">
              💬 문자 상담
            </a>
            <a href="https://open.kakao.com/o/sJ7BcDzi" className="flex items-center gap-2 text-gray-400 hover:text-amber-600 text-xs">
              🟡 카카오톡
            </a>
            <a href="https://blog.naver.com/eya81" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-amber-600 text-xs">
              📝 네이버 블로그
            </a>
            <a href="https://www.youtube.com/channel/UCdF1OeXfghX5dAg16EW0Vvw" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-amber-600 text-xs">
              ▶ 유튜브
            </a>
          </div>
          <p className="text-gray-600 text-xs">© 2026 BREEZE 부동산중개. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}