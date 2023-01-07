import React from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
    return (
        <>
            <div>

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
                                Sign up With Google <FcGoogle />
                            </button><form className="flex flex-col gap-3">
                                <div className=" w-full flex flex-col gap-2">
                                    <label htmlFor="fullname">Fullname</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        // value={userData.fullname}
                                        // onChange={handleChange}
                                        placeholder="kiran kuyate "
                                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                    />
                                </div>
                                <div className=" w-full flex flex-col gap-2">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        // value={userData.email}
                                        // onChange={handleChange}
                                        placeholder="kways@email.com"
                                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                    />
                                </div>
                                <div className=" w-full flex flex-col gap-2">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        // value={userData.password}
                                        // onChange={handleChange}
                                        placeholder="*********"
                                        className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
                                    />
                                </div>
                                <div
                                    // onClick={submit}
                                    className="w-full  text-center bg-br-200 hover:bg-br-500 text-white py-2 rounded-lg"
                                >
                                    Sign up
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;