"use client";
import { redirect } from "next/navigation";
import { useTransition, useState } from "react";
import { applyAction } from "./actions/apply";

export default function Page() {
    const [ status, setStatus ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ isPending, startTransitionApply ] = useTransition();
    const [ isPendingg, startTransitionNext ] = useTransition();

    const handleSubmitApply = () => {
        startTransitionApply ( async () => {
            try {
                await new Promise ( resolve => setTimeout (resolve, 2000) ); 
                await applyAction(price);
            } catch (err: Error | any) {
                alert(err.message ?? "Form error")
            }
        } );
    }

    const handleSubmitNext = () => {
        startTransitionNext ( async () => {
            try {
                if( status == "active" ) {
                    redirect("/example/orders/success")
                }
                else if( status == "inactive" ) {
                    redirect("/example/orders/failure")
                }
            } catch (err: Error | any) {
                alert(err.message ?? "Form error")
            }
        } );
    }

    return (
        <div className="mx-auto max-w-md border p-4">
            <label>Status: </label> <br /> <br />
            <input
                onChange={ (e) => setStatus(e.target.value) } /> <br /> <br />

            <label>Price: </label> <br /> <br />
            <input
                onChange={ (e) => setPrice(e.target.value) } /> <br /> <br /> <br />
            <div>
                <button className="border p-2 bg-blue-500 text-white rounded"
                onClick={ handleSubmitApply }
                >
                    { isPending ? "Loading..." : "Apply" }
                </button> <br /> <br />
                <button className="border p-2 bg-pink-500 text-white rounded"
                 onClick={ handleSubmitNext }>
                    { isPendingg ? "Loading..." : "Next" }
                </button>
            </div>
        </div>
    );
}