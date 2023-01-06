import React from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";


const SignIn = () => {
    return (
        <>

            <div className="min-h-screen px-4 text-center">

                <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                >
                    &#8203;
                </span>

                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
                    <div className="mt-2 flex flex-col gap-3 w-full">
                        <button
                            // onClick={googleSignIn}
                            className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
                        >
                            Signin With Google <FcGoogle />
                        </button>

                        <form className="flex flex-col gap-3">
                            <div className=" w-full flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    // onChange={handleChange}
                                    // value={userData.email}
                                    placeholder="email@email.com"
                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                />
                            </div>
                            <div className=" w-full flex flex-col gap-2">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="*********"
                                    // value={userData.password}
                                    name="password"
                                    // onChange={handleChange}
                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                />
                            </div>
                            <div
                                // onClick={submit}
                                className="w-full  text-center bg-br-200 hover:bg-br-500 text-white py-2 rounded-lg"
                            >
                                Sign in
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
export default SignIn;