import { NextResponse } from "next/server";

import { golangQuestionAnswers } from "@/qnas/GolangQnAData";


export async function GET(request) {

  try {

    const { searchParams } = new URL(request?.url);

    const difficultyLevel = searchParams.get("difficultyLevel");


    let qnaData = golangQuestionAnswers;


    if (difficultyLevel) {

      qnaData = golangQuestionAnswers.filter((qna) => qna.difficulty.toLowerCase() === difficultyLevel.toLowerCase());

    }

    return NextResponse.json(
      {
        success: true,
        message: "Connection to Golang QnA route successful.",
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
      id: golangQuestionAnswers.length + 1,
      question: body.question,
      answer: body.answer,
      difficulty: body.difficulty,
    };

    return NextResponse.json(
      {
        success: true,
        message: "Golang QnA created successfully.",
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