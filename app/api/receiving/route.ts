import { NextRequest, NextResponse } from 'next/server';

// 입고등록 API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 입고등록 데이터 검증
    const { itemCode, itemName, quantity, supplier, batchNumber, receivedDate } = body;
    
    if (!itemCode || !itemName || !quantity || !supplier || !receivedDate) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 실제 데이터베이스 저장 로직 (예시)
    const receivingData = {
      id: Date.now().toString(),
      itemCode,
      itemName,
      quantity: parseInt(quantity),
      supplier,
      batchNumber: batchNumber || null,
      receivedDate,
      createdAt: new Date().toISOString(),
      status: 'completed'
    };

    // 여기에 실제 데이터베이스 저장 로직 추가
    // 예: await db.receiving.create(receivingData);
    
    console.log('입고등록 데이터:', receivingData);

    return NextResponse.json({
      success: true,
      message: '입고등록이 완료되었습니다.',
      data: receivingData
    });

  } catch (error) {
    console.error('입고등록 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 입고등록 목록 조회 API
export async function GET() {
  try {
    // 실제 데이터베이스에서 조회 로직
    // 예: const receivingList = await db.receiving.findMany();
    
    const receivingList = [
      {
        id: '1',
        itemCode: 'MAT-001',
        itemName: '스테인리스 강판',
        quantity: 100,
        supplier: 'ABC 철강',
        receivedDate: '2024-12-19',
        status: 'completed'
      }
    ];

    return NextResponse.json({
      success: true,
      data: receivingList
    });

  } catch (error) {
    console.error('입고등록 목록 조회 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
