import { NextRequest, NextResponse } from 'next/server';

// 품질검사 API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 품질검사 데이터 검증
    const { productCode, productName, batchNumber, inspector, inspectionDate, result, remarks } = body;
    
    if (!productCode || !productName || !batchNumber || !inspector || !inspectionDate || !result) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 검사결과 유효성 검증
    if (!['pass', 'fail', 'rework'].includes(result)) {
      return NextResponse.json(
        { error: '유효하지 않은 검사결과입니다.' },
        { status: 400 }
      );
    }

    // 실제 데이터베이스 저장 로직 (예시)
    const qualityData = {
      id: Date.now().toString(),
      productCode,
      productName,
      batchNumber,
      inspector,
      inspectionDate,
      result,
      remarks: remarks || null,
      createdAt: new Date().toISOString(),
      status: 'completed'
    };

    // 여기에 실제 데이터베이스 저장 로직 추가
    // 예: await db.quality.create(qualityData);
    
    console.log('품질검사 데이터:', qualityData);

    return NextResponse.json({
      success: true,
      message: '품질검사가 완료되었습니다.',
      data: qualityData
    });

  } catch (error) {
    console.error('품질검사 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 품질검사 목록 조회 API
export async function GET() {
  try {
    // 실제 데이터베이스에서 조회 로직
    const qualityList = [
      {
        id: '1',
        productCode: 'PROD-001',
        productName: '스테인리스 볼트',
        batchNumber: 'B20241201',
        inspector: '이품질',
        inspectionDate: '2024-12-19',
        result: 'pass',
        status: 'completed'
      }
    ];

    return NextResponse.json({
      success: true,
      data: qualityList
    });

  } catch (error) {
    console.error('품질검사 목록 조회 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
