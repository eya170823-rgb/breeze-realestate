"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { getProperties, safeProperty } from "../lib/sheets";

const filters = ["전체", "오피스텔", "원투룸", "상가"];

export default function Properties() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("전체");
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const sheets = ["오피스텔", "원투룸", "상가"];
        const all = await Promise.all(sheets.map(s => getProperties(s)));
        const merged = all.flat().map(p => safeProperty(p));
        setProperties(merged);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }
    load();
  }, []);

  const filtered = filter === "전체" ? properties : properties.filter(p => p.type.includes(filter));

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <span style={{fontFamily:"'Playfair Display', serif"}} className="text-lg font-bold text-gray-900 tracking-widest">BREEZE</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm font-bold text-amber-600">공실마스터</span>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
        {menuOpen && (
          <div className="bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
            <a href="/" className="text-sm text-gray-700" onClick={() => setMenuOpen(false)}>홈</a>
            <a href="/properties" className="text-sm text-gray-700" onClick={() => setMenuOpen(false)}>매물보기</a>
            <a href="/about" className="text-sm text-gray-700" onClick={() => setMenuOpen(false)}>소개</a>
            <a href="/contact" className="text-sm text-gray-700" onClick={() => setMenuOpen(false)}>문의</a>
          </div>
        )}
      </nav>
      <section className="pt-16 px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto py-3 mb-4">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-3 py-1 text-xs rounded-full whitespace-nowrap border ${filter === f ? "bg-amber-700 text-white border-amber-700" : "border-gray-200 text-gray-600"}`}>
                {f}
              </button>
            ))}
          </div>
          {loading ? (
            <div className="text-center py-20 text-gray-400 text-sm">매물 불러오는 중...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">매물이 없습니다</div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filtered.map((p, i) => (
                <div key={i} className="flex gap-3 border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="w-28 h-28 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                    <span className="text-gray-300 text-xs">사진</span>
                  </div>
                  <div className="flex-1 py-3 pr-3">
                    <div className="flex items-center gap-2 mb-1">
                      {p.type && <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded">{p.type}</span>}
                      {p.status && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{p.status}</span>}
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{p.address}</p>
                    <p className="text-sm font-bold text-gray-900">
                      {p.deposit ? `보증금 ${p.deposit}만` : ""}
                      {p.monthly ? ` / 월 ${p.monthly}만` : ""}
                      {p.price ? `매매 ${p.price}만` : ""}
                      {p.jeonse ? `전세 ${p.jeonse}만` : ""}
                    </p>
                    {p.floor && <p className="text-xs text-gray-400 mt-1">{p.floor}층 · {p.size}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <footer className="bg-gray-900 py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto">
          <div style={{fontFamily:"'Playfair Display', serif"}} className="text-white text-lg font-bold mb-1">BREEZE</div>
          <p className="text-gray-500 text-xs mb-4">부동산중개 · 제주특별자치도 제주시 · 010-2601-0110</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href="sms:010-2601-0110" className="text-gray-400 text-xs">문자</a>
            <a href="https://open.kakao.com/o/sJ7BcDzi" className="text-gray-400 text-xs">카카오</a>
            <a href="https://blog.naver.com/eya81" target="_blank" className="text-gray-400 text-xs">블로그</a>
            <a href="https://www.youtube.com/channel/UCdF1OeXfghX5dAg16EW0Vvw" target="_blank" className="text-gray-400 text-xs">유튜브</a>
          </div>
          <p className="text-gray-600 text-xs">© 2026 BREEZE 부동산중개. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}