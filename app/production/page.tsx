import Link from 'next/link';

export default function ProductionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">생산등록</h1>
            <p className="text-gray-600">제품 생산 및 작업 등록</p>
          </div>
          <Link 
            href="/"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            ← 메인으로
          </Link>
        </div>

        {/* 내용 영역 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center text-gray-500">
            <p>생산등록 기능이 여기에 구현됩니다.</p>
          </div>
        </div>
      </div>
    </main>
  );
}