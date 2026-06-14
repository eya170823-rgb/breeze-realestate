"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const properties = [
  { id: 1, type: "원룸", address: "제주시 노형동", deposit: "500", monthly: "45", size: "20㎡", floor: "3층", status: "available", image: "" },
  { id: 2, type: "투룸", address: "제주시 연동", deposit: "1000", monthly: "60", size: "33㎡", floor: "2층", status: "contract", image: "" },
  { id: 3, type: "오피스텔", address: "제주시 노형동", deposit: "500", monthly: "55", size: "25㎡", floor: "5층", status: "available", image: "" },
  { id: 4, type: "1.5룸", address: "제주시 이도동", deposit: "300", monthly: "40", size: "26㎡", floor: "2층", status: "reserved", image: "" },
  { id: 5, type: "단기임대", address: "제주시 연동", deposit: "100", monthly: "80", size: "20㎡", floor: "1층", status: "available", image: "" },
  { id: 6, type: "상가임대", address: "제주시 노형동", deposit: "2000", monthly: "120", size: "50㎡", floor: "1층", status: "available", image: "" },
];

const filters = ["전체", "오피스텔", "원룸", "1.5룸", "투룸", "단기임대", "상가임대"];

const statusLabel: Record<string, { text: string; color: string }> = {
  available: { text: "거래가능", color: "bg-green-100 text-green-700" },
  contract: { text: "계약중", color: "bg-yellow-100 text-yellow-700" },
  reserved: { text: "예약중", color: "bg-orange-100 text-orange-700" },
  done: { text: "거래완료", color: "bg-gray-100 text-gray-500" },
};

export default function Properties() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("전체");

  const filtered = filter === "전체" ? properties : properties.filter(p => p.type === filter);

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <span style={{fontFamily:"'Playfair Display', serif"}} className="text-lg font-bold text-gray-900 tracking-widest">BREEZE</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm font-bold text-amber-600">공실마스터</span>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 hover:text-amber-700">
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
        {menuOpen && (
          <div className="bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
            <a href="/" className="text-sm text-gray-700 hover:text-amber-700" onClick={() => setMenuOpen(false)}>홈</a>
            <a href="/properties" className="text-sm text-gray-700 hover:text-amber-700" onClick={() => setMenuOpen(false)}>매물보기</a>
            <a href="/about" className="text-sm text-gray-700 hover:text-amber-700" onClick={() => setMenuOpen(false)}>소개</a>
            <a href="/contact" className="text-sm text-gray-700 hover:text-amber-700" onClick={() => setMenuOpen(false)}>문의</a>
          </div>
        )}
      </nav>

      <section className="pt-16 px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          {/* 필터 */}
          <div className="flex gap-2 overflow-x-auto py-3 mb-4 scrollbar-hide">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-3 py-1 text-xs rounded-full whitespace-nowrap border transition-colors ${
                  filter === f ? "bg-amber-700 text-white border-amber-700" : "border-gray-200 text-gray-600 hover:border-amber-700 hover:text-amber-700"
                }`}>
                {f}
              </button>
            ))}
          </div>

          {/* 매물 목록 */}
          <div className="grid grid-cols-1 gap-4">
            {filtered.map(p => (
              <a key={p.id} href={`/properties/${p.id}`}
                className="flex gap-3 border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                {/* 사진 */}
                <div className="w-28 h-28 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                  <span className="text-gray-300 text-xs">사진</span>
                </div>
                {/* 정보 */}
                <div className="flex-1 py-3 pr-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded">{p.type}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${statusLabel[p.status].color}`}>
                      {statusLabel[p.status].text}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{p.address}</p>
                  <p className="text-sm font-bold text-gray-900">
                    보증금 {p.deposit}만 / 월 {p.monthly}만
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{p.floor} · {p.size}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto">
          <div style={{fontFamily:"'Playfair Display', serif"}} className="text-white text-lg font-bold mb-1">BREEZE</div>
          <p className="text-gray-500 text-xs mb-4">부동산중개 · 제주특별자치도 제주시 · 010-2601-0110</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href="sms:010-2601-0110" className="text-gray-400 hover:text-amber-600 text-xs">💬 문자</a>
            <a href="https://open.kakao.com/o/sJ7BcDzi" className="text-gray-400 hover:text-amber-600 text-xs">🟡 카카오</a>
            <a href="https://blog.naver.com/eya81" target="_blank" className="text-gray-400 hover:text-amber-600 text-xs">📝 블로그</a>
            <a href="https://www.youtube.com/channel/UCdF1OeXfghX5dAg16EW0Vvw" target="_blank" className="text-gray-400 hover:text-amber-600 text-xs">▶ 유튜브</a>
          </div>
          <p className="text-gray-600 text-xs">© 2026 BREEZE 부동산중개. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}