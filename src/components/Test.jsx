import React from 'react'
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../context/nari.png";
const Test = () => {
    return (
        <>
            <div className="min-h-screen px-4 text-center">
                <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                >
                    &#8203;
                </span>

                <div className="inline-block w-full max-w-md  my-8 overflow-hidden text-left align-middle transition-all transform bg-br-900  rounded-2xl">

                    <div className=" w-full justify-items-center text-center ">
                        <div className="w-full justify-items-center">
                            <img src={logo} alt="logo" />
                        </div>
                        <h1 className="  w-full h-1/2">Nari</h1>

                    </div>
                    <div className=" flex flex-col gap-3 w-full ">
                        <button
                            // onClick={googleSignIn}
                            className="py-2 justify-center rounded-lg  font-white text-white bg-br-800 flex items-center gap-2 w-full border border-gray-400 bg-br-900 text-gray-700 hover:bg-br-900100"
                        >
                            Signin With Google <FcGoogle className="bg-br-800 text-white" />
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
                                    placeholder="kways@email.com"
                                    className="w-full border border-gray-400  bg-white px-3 py-2 rounded-lg focus:outline-none focus:border-zomato-400"
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
                                    className="w-full border border-gray-400 px-3 py-2 bg-white rounded-lg focus:outline-none focus:border-zomato-400"
                                />
                            </div>
                            <div
                                // onClick={submit}
                                className="w-full  text-center bg-br-800 text-bold text-white py-2 "
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
export default Test;