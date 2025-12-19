"use server"; // optional
import { redirect } from "next/navigation";

export async function applyAction(price: string) {
    if (!price){
        throw new Error("Price is required");
    }
    if(parseInt(price) < 0){
        redirect("/example/orders/unauthorized");
    } else {
        redirect("/example/orders");
    }
}