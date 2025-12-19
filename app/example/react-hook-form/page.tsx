"use client";
import { useForm } from "react-hook-form";
export default function Page() {
    const {
        register, // bind inout fields
        handleSubmit, // handle form submission
        formState: { errors, isSubmitting },
    } = useForm(
        { values: { email: "", password: "" } } // input states and initial
    );
    return (
        <div></div>
    );
}