import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            현장 관리 시스템
          </h1>
          <p className="text-lg text-gray-600">
            현장 프로그램
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 입고등록 */}
          <Link href="/receiving" className="block">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-4">📦</div>
                <h2 className="text-2xl font-bold mb-2">입고등록</h2>
                <p className="text-blue-100">원자재 및 부품 입고</p>
              </div>
            </button>
          </Link>

          {/* 생산등록 */}
          <Link href="/production" className="block">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white p-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-4">🏭</div>
                <h2 className="text-2xl font-bold mb-2">생산등록</h2>
                <p className="text-green-100">제품 생산 및 작업 등록</p>
              </div>
            </button>
          </Link>

          {/* 품질검사 */}
          <Link href="/quality" className="block">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold mb-2">품질검사</h2>
                <p className="text-yellow-100">제품 품질 검사 및 기록</p>
              </div>
            </button>
          </Link>

          {/* 출하등록 */}
          <Link href="/shipping" className="block">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white p-8 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-4">🚚</div>
                <h2 className="text-2xl font-bold mb-2">출하등록</h2>
                <p className="text-purple-100">완성품 출하 및 배송</p>
              </div>
            </button>
          </Link>
        </div>

        {/* 하단 정보 */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            각 버튼을 터치하여 해당 기능을 실행하세요
          </p>
        </div>
      </div>
    </main>
  );
}