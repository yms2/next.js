import { NextRequest, NextResponse } from 'next/server';

// 생산등록 API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 생산등록 데이터 검증
    const { productCode, productName, quantity, workOrder, operator, startTime, endTime } = body;
    
    if (!productCode || !productName || !quantity || !workOrder || !operator || !startTime) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 실제 데이터베이스 저장 로직 (예시)
    const productionData = {
      id: Date.now().toString(),
      productCode,
      productName,
      quantity: parseInt(quantity),
      workOrder,
      operator,
      startTime,
      endTime: endTime || null,
      createdAt: new Date().toISOString(),
      status: 'in_progress'
    };

    // 여기에 실제 데이터베이스 저장 로직 추가
    // 예: await db.production.create(productionData);
    
    console.log('생산등록 데이터:', productionData);

    return NextResponse.json({
      success: true,
      message: '생산등록이 완료되었습니다.',
      data: productionData
    });

  } catch (error) {
    console.error('생산등록 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 생산등록 목록 조회 API
export async function GET() {
  try {
    // 실제 데이터베이스에서 조회 로직
    const productionList = [
      {
        id: '1',
        productCode: 'PROD-001',
        productName: '스테인리스 볼트',
        quantity: 500,
        workOrder: 'WO-20241201',
        operator: '김현장',
        startTime: '2024-12-19T09:00:00',
        status: 'in_progress'
      }
    ];

    return NextResponse.json({
      success: true,
      data: productionList
    });

  } catch (error) {
    console.error('생산등록 목록 조회 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
