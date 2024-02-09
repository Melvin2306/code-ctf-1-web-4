import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;
    const moduleId = params.get('moduleId');

    if (moduleId) {
      if (moduleId === '105') {
        return new NextResponse(
          JSON.stringify({ message: 'STS_07 Ethics in Hacking' }),
          {
            status: 200,
          }
        );
      } else if (moduleId === '205') {
        return new NextResponse(
          JSON.stringify({ message: 'PM_29 Managing Pentesting Teams' }),
          {
            status: 200,
          }
        );
      } else if (moduleId === '305') {
        return new NextResponse(
          JSON.stringify({ message: 'ID_31 Darknet Design' }),
          {
            status: 200,
          }
        );
      } else if (moduleId === '405') {
        return new NextResponse(
          JSON.stringify({ message: 'IS_07 Social Engineering' }),
          { status: 200 }
        );
      } else if (moduleId === '505') {
        return new NextResponse(
          JSON.stringify({
            message: 'SE_57 Ethical Hacking and Penetration Testing',
          }),
          {
            status: 200,
          }
        );
      } else if (moduleId === '605') {
        return new NextResponse(
          JSON.stringify({ message: 'CODE_CTF{paTTeRN_REcOGniTioN}' }),
          { status: 200 }
        );
      } else {
        return new NextResponse(JSON.stringify({ message: 'wrong moduleId' }), {
          status: 404,
        });
      }
    } else {
      return new NextResponse(
        JSON.stringify({ message: 'no moduleId found' }),
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    console.error('Error processing request', error);
    return new NextResponse(
      JSON.stringify({ message: 'Error processing request' }),
      { status: 500 }
    );
  }
}
