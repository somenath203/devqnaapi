import { NextResponse } from "next/server";

import { javaQuestionAnswers } from "@/qnas/JavaQnAData";


export async function GET(request, { params }) {

  try {

    const { id } = await params;

    const idOfTheParticularQnA = Number(id[0]);

    const particularQnAWrtId = javaQuestionAnswers.find(
      (qna) => qna.id === idOfTheParticularQnA
    );

    return NextResponse.json(
      {
        success: true,
        message: "Connection to JAVA route successful.",
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


    const particularQnA = javaQuestionAnswers.find((qna) => qna.id === idOfTheParticularQnA);

    if (!particularQnA) {

      return NextResponse.json(
        {
          success: false,
          message: "JAVA QnA not found.",
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
        message: "JAVA QnA updated successfully.",
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

    
    const particularQnA = javaQuestionAnswers.find((qna) => qna.id === idOfTheParticularQnA);


    if (!particularQnA) {

      return NextResponse.json(
        {
          success: false,
          message: "JAVA QnA not found.",
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
        message: "JAVA QnA updated successfully.",
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


    const particularQnA = javaQuestionAnswers.find((qna) => qna.id === idOfTheParticularQnA);


    if (!particularQnA) {

      return NextResponse.json(
        {
          success: false,
          message: "JAVA QnA not found.",
        },
        { status: 404 }
      );

    }


    return NextResponse.json(
    {
      success: true,
      message: "JAVA QnA deleted successfully.",
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

