"use client";
import { useState, ChangeEvent } from "react";
import { useLoginForm } from "./hooks/use-login";

export default function Page() {
    const {
        email, 
        password,
        handleEmail,
        handlePassword,
        handleSubmit
    } = useLoginForm(); // destructive returned object from hook

    const form = useLoginForm();

    return (
        <div>
            <div>
                <label>Email: </label>
                <input type="email" value={ form.email } onChange={ form.handleEmail } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={ password } onChange={ handlePassword } />
            </div>
            <button
                onClick={ form.handleSubmit }>
            Test
            </button>
        </div>
    );
}