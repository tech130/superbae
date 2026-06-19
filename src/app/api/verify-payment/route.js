import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const { razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature } = body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        const isAuthentic =
            expectedSign === razorpay_signature;

        if (isAuthentic) {
            return NextResponse.json({
                success: true,
            });
        } else {
            return NextResponse.json(
                {
                    success: false,
                },
                { status: 400 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}