import { NextResponse } from "next/server";
import { pythonQuestionAnswers } from "@/qnas/PythonQnAData";


export async function GET(request) {

  try {

    const { searchParams } = new URL(request?.url);

    const difficultyLevel = searchParams.get("difficultyLevel");


    let qnaData = pythonQuestionAnswers;


    if (difficultyLevel) {

      qnaData = pythonQuestionAnswers.filter((qna) => qna.difficulty.toLowerCase() === difficultyLevel.toLowerCase());

    }

    return NextResponse.json(
      {
        success: true,
        message: "Connection to Python QnA route successful.",
        qnadata: qnaData,
      },
      { status: 200 }
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );

  }

}


export async function POST(request) {

  try {

    const body = await request.json();

    const newQnA = {
      id: pythonQuestionAnswers.length + 1,
      question: body.question,
      answer: body.answer,
      difficulty: body.difficulty,
    };

    return NextResponse.json(
      {
        success: true,
        message: "Python QnA created successfully.",
        qnadata: newQnA,
      },
      { status: 201 }
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );

  }

}