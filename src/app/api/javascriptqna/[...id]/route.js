import { NextResponse } from "next/server";

import { javascriptQuestionAnswers } from "@/qnas/JavaScriptQnAData";


export async function GET(request, { params }) {

  try {

    const { id } = await params;

    const idOfTheParticularQnA = Number(id[0]);

    const particularQnAWrtId = javascriptQuestionAnswers.find(
      (qna) => qna.id === idOfTheParticularQnA
    );

    return NextResponse.json(
      {
        success: true,
        message: "Connection to JavaScript QnA route successful.",
        qnadata: particularQnAWrtId,
      },
      { status: 200 }
    );

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );

  }

}


export async function PUT(request, { params }) {

  try {

    const { id } = await params;


    const idOfTheParticularQnA = Number(id[0]);


    const body = await request.json();


    const particularQnA = javascriptQuestionAnswers.find((qna) => qna.id === idOfTheParticularQnA);

    if (!particularQnA) {

      return NextResponse.json(
        {
          success: false,
          message: "JavaScript QnA not found.",
        },
        { status: 404 }
      );

    }


    const updatedQnA = {
      id: particularQnA?.id,
      question: body?.question,
      answer: body?.answer,
      difficulty: body?.difficulty,
    };


    return NextResponse.json(
      {
        success: true,
        message: "JavaScript QnA updated successfully.",
        qnadata: updatedQnA,
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


export async function PATCH(request, { params }) {

  try {


    const { id } = await params;


    const idOfTheParticularQnA = Number(id[0]);


    const body = await request.json();

    
    const particularQnA = javascriptQuestionAnswers.find((qna) => qna.id === idOfTheParticularQnA);


    if (!particularQnA) {

      return NextResponse.json(
        {
          success: false,
          message: "JavaScript QnA not found.",
        },
        { status: 404 }
      );

    }


    const updatedQnA = {
      ...particularQnA,
      ...body,
    };


    return NextResponse.json(
      {
        success: true,
        message: "JavaScript QnA updated successfully.",
        qnadata: updatedQnA,
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


export async function DELETE(request, { params }) {

  try {


    const { id } = await params;

    const idOfTheParticularQnA = Number(id[0]);


    const particularQnA = javascriptQuestionAnswers.find((qna) => qna.id === idOfTheParticularQnA);


    if (!particularQnA) {

      return NextResponse.json(
        {
          success: false,
          message: "JavaScript QnA not found.",
        },
        { status: 404 }
      );

    }


    return NextResponse.json(
    {
      success: true,
      message: "JavaScript QnA deleted successfully.",
      deletedQnA: particularQnA,
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

