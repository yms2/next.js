import { NextRequest, NextResponse } from 'next/server';

// 출하등록 API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 출하등록 데이터 검증
    const { productCode, productName, quantity, customer, shippingDate, trackingNumber, destination } = body;
    
    if (!productCode || !productName || !quantity || !customer || !shippingDate || !destination) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 실제 데이터베이스 저장 로직 (예시)
    const shippingData = {
      id: Date.now().toString(),
      productCode,
      productName,
      quantity: parseInt(quantity),
      customer,
      shippingDate,
      trackingNumber: trackingNumber || null,
      destination,
      createdAt: new Date().toISOString(),
      status: 'shipped'
    };

    // 여기에 실제 데이터베이스 저장 로직 추가
    // 예: await db.shipping.create(shippingData);
    
    console.log('출하등록 데이터:', shippingData);

    return NextResponse.json({
      success: true,
      message: '출하등록이 완료되었습니다.',
      data: shippingData
    });

  } catch (error) {
    console.error('출하등록 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 출하등록 목록 조회 API
export async function GET() {
  try {
    // 실제 데이터베이스에서 조회 로직
    const shippingList = [
      {
        id: '1',
        productCode: 'PROD-001',
        productName: '스테인리스 볼트',
        quantity: 1000,
        customer: 'ABC 기업',
        shippingDate: '2024-12-19',
        destination: '서울시 강남구',
        status: 'shipped'
      }
    ];

    return NextResponse.json({
      success: true,
      data: shippingList
    });

  } catch (error) {
    console.error('출하등록 목록 조회 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
