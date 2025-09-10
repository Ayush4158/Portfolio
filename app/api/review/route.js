import { NextResponse } from "next/server";
import Review from "@/model/review";
import { connectionToDB } from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import { Readable } from "stream";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const message = formData.get("message");
    const file = formData.get("file");

    if (!formData) {
      return NextResponse.json({ error: "Form is not filled properly" }, { status: 400 });
    }

    if (!file) {
      return NextResponse.json({ error: "No image is uploaded" }, { status: 400 });
    }

    if ([name, message, file].some((field) => field.toString().trim() === "")) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "nextjs_reviews" },
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );
      Readable.from(buffer).pipe(stream);
    });

    // Connect to DB
    await connectionToDB();

    // Create review
    const review = await Review.create({
      name,
      message,
      image: uploadResult.secure_url,
    });

    return NextResponse.json(review, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectionToDB();

    // Fetch all reviews, latest first
    const reviews = await Review.find().sort({ createdAt: -1 });

    if (reviews.length === 0) {
      return NextResponse.json({ message: "No reviews found" }, { status: 200 });
    }

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
