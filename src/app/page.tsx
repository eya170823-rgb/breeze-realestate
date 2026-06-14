"use client";
import { useState } from "react";
import { Home, Building, BedDouble, BedSingle, Clock, Store, Menu, X } from "lucide-react";

export default function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <span style={{fontFamily:"'Playfair Display', serif"}} className="text-lg font-bold text-gray-900 tracking-widest">BREEZE</span>
            <span className="text-gray-300 text-lg">|</span>
            <span className="text-sm font-bold text-amber-600" style={{letterSpacing:"1px"}}>공실마스터</span>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 hover:text-amber-700">
            {menuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
        {menuOpen && (
          <div className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
            <a href="/" className="text-sm text-gray-700 hover:text-amber-700" onClick={() => setMenuOpen(false)}>홈</a>
            <a href="/properties" className="text-sm text-gray-700 hover:text-amber-700" onClick={() => setMenuOpen(false)}>매물보기</a>
            <a href="/about" className="text-sm text-gray-700 hover:text-amber-700" onClick={() => setMenuOpen(false)}>소개</a>
            <a href="/contact" className="text-sm text-gray-700 hover:text-amber-700" onClick={() => setMenuOpen(false)}>문의</a>
          </div>
        )}
      </nav>

      {/* 히어로 */}
      <section className="pt-20 pb-8 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 style={{fontFamily:"'Playfair Display', serif"}} className="text-4xl font-bold text-gray-900 leading-tight mb-2">
            BREEZE
          </h1>
          <p className="text-gray-500 text-sm mb-6">제주의 공간을 연결합니다</p>
          <div className="flex gap-2">
            <a href="tel:010-2601-0110" className="bg-amber-700 text-white px-4 py-2 text-sm rounded hover:bg-amber-800 flex-1 text-center">
              전화하기
            </a>
            <a href="sms:010-2601-0110" className="bg-amber-700 text-white px-4 py-2 text-sm rounded hover:bg-amber-800 flex-1 text-center">
              문자상담
            </a>
            <a href="https://open.kakao.com/o/sJ7BcDzi" className="bg-amber-700 text-white px-4 py-2 text-sm rounded hover:bg-amber-800 flex-1 text-center">
              카카오상담
            </a>
          </div>
        </div>
      </section>

      {/* 매물 아이콘 */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { icon: <Building size={22}/>, label: "오피스텔", href: "/properties?type=오피스텔" },
              { icon: <BedSingle size={22}/>, label: "원룸", href: "/properties?type=원룸" },
              { icon: <BedSingle size={22}/>, label: "1.5룸", href: "/properties?type=1.5룸" },
              { icon: <BedDouble size={22}/>, label: "투룸", href: "/properties?type=투룸" },
              { icon: <Clock size={22}/>, label: "단기임대", href: "/properties?type=단기임대" },
              { icon: <Store size={22}/>, label: "상가임대", href: "/properties?type=상가임대" },
            ].map((item) => (
              <a key={item.label} href={item.href}
                className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-amber-700 hover:text-amber-700 transition-colors group">
                <span className="text-gray-400 group-hover:text-amber-700">{item.icon}</span>
                <span className="text-xs text-gray-600 group-hover:text-amber-700">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-amber-700 text-xl mb-2">✦</p>
              <h3 className="font-bold text-gray-900 text-xs">지역 전문</h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">제주 부동산 전문 중개</p>
            </div>
            <div className="text-center">
              <p className="text-amber-700 text-xl mb-2">✦</p>
              <h3 className="font-bold text-gray-900 text-xs">1:1 밀착 중개</h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">고객 맞춤형 솔루션</p>
            </div>
            <div className="text-center">
              <p className="text-amber-700 text-xl mb-2">✦</p>
              <h3 className="font-bold text-gray-900 text-xs">신뢰 중개</h3>
              <p className="text-gray-500 text-xs mt-1 hidden md:block">투명하고 정직한 거래</p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div style={{fontFamily:"'Playfair Display', serif"}} className="text-white text-lg font-bold mb-1">BREEZE</div>
          <p className="text-gray-500 text-xs mb-6">부동산중개 · 제주특별자치도 제주시 · 010-2601-0110</p>
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="sms:010-2601-0110" className="text-gray-400 hover:text-amber-600 text-xs">💬 문자 상담</a>
            <a href="https://open.kakao.com/o/sJ7BcDzi" className="text-gray-400 hover:text-amber-600 text-xs">🟡 카카오톡</a>
            <a href="https://blog.naver.com/eya81" target="_blank" className="text-gray-400 hover:text-amber-600 text-xs">📝 네이버 블로그</a>
            <a href="https://www.youtube.com/channel/UCdF1OeXfghX5dAg16EW0Vvw" target="_blank" className="text-gray-400 hover:text-amber-600 text-xs">▶ 유튜브</a>
          </div>
          <p className="text-gray-600 text-xs">© 2026 BREEZE 부동산중개. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}