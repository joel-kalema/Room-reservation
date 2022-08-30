import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import requestRegisterUser from '../../../redux/actions/registerUser';
import FormError from '../formError';
import SnipperLoginBtn from '../../loaders/snipper';

import './signup.css'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [onFormSubmitMessage, setOnFormSubmitMessage] = useState('');

    const onSubmit = async (data) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, '4000');
        const body = JSON.stringify(data);
        if (data.password !== data.passwordConfirm) {
            setOnFormSubmitMessage('The entered passwords do not match');
            return;
        }
        const user = await requestRegisterUser(body);
        console.log('HERE IS MY DATA', user);
        if (!user) {
            setOnFormSubmitMessage('User already registered!');
        } else {
            navigate('/login');
        }
    };
    return (
        <>
            {onFormSubmitMessage && (
                <div
                    className="fixed py-3 pl-4 pr-10 text-orange-700 translate-x-1/2 bg-orange-100 border border-orange-400 rounded top-4 right-1/2"
                    role="alert"
                >
                    <span className="block sm:inline">{onFormSubmitMessage}</span>
                    <span
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                            setOnFormSubmitMessage('');
                        }}
                        onKeyDown={() => {
                            setOnFormSubmitMessage('');
                        }}
                        className="absolute top-0 bottom-0 right-0 px-4 py-3"
                    >
                        <svg
                            className="w-6 h-6 text-orange-500 fill-current"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <title>Close</title>
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                    </span>
                </div>
            )}

            <div
                className="fixed py-3 pl-4 pr-10 text-orange-700 translate-x-1/2 bg-orange-100 border border-orange-400 rounded top-4 right-1/2"
                role="alert"
            >
                <span
                    role="button"
                    tabIndex={0}
                    className="absolute top-0 bottom-0 right-0 px-4 py-3"
                >
                    <svg
                        className="w-6 h-6 text-orange-500 fill-current"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </span>
            </div>

            <div className="flex">
                <div className="absolute flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8 ">
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                                Registration form
                            </h2>
                            <p className="mt-2 text-sm text-center text-gray-600">
                                Please!
                                <a
                                    href="https://www.microverse.org/info/terms#:~:text=Microverse%20does%20not%20knowingly%20collect,individual%20and%20is%20non%2Dtransferrable."
                                    className="font-medium text-lime-600 hover:text-lime-700"
                                >
                                    read room reservation conditions.
                                </a>
                            </p>
                        </div>
                        <form
                            className="mt-8 space-y-6 login-form"
                            action="#"
                            method="POST"
                            onSubmit={handleSubmit(onSubmit)}

                        >
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Input the name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        {...register('name', { required: true, maxLength: 50 })}
                                        type="text"
                                        autoComplete="name"
                                        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-green-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                                        placeholder="Input name"
                                    />
                                    {errors.name?.type === 'required' && (
                                        <FormError>Please input a valid name</FormError>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        {...register('email', { required: true, maxLength: 50 })}
                                        type="email"
                                        autoComplete="email"
                                        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-green-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                    {errors.email?.type === 'required' && (
                                        <FormError>Please input a valid email</FormError>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        {...register('password', { required: true, minLength: 8 })}
                                        autoComplete="current-password"
                                        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                    {errors.password?.type === 'minLength' && (
                                        <FormError>
                                            Password must be at least 8 characters long.
                                        </FormError>
                                    )}
                                    {errors.password?.type === 'required' && (
                                        <FormError>Please input the required password</FormError>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirm-password"
                                        name="confirm-password"
                                        type="password"
                                        {...register('passwordConfirm', {
                                            required: true,
                                            maxLength: 50,
                                        })}
                                        autoComplete="current-password"
                                        className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                                        placeholder="Confirm Password"
                                    />
                                    {errors.passwordConfirm?.type === 'required' && (
                                        <FormError>Please input the password to confirm</FormError>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="w-4 h-4 text-gray-700 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="block ml-2 text-sm text-gray-900"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a
                                        href="g.com"
                                        className="font-medium text-blue-700 hover:text-gray-300"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <SnipperLoginBtn
                                    loading={isLoading}
                                    title="Signup"
                                    type="submit"
                                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md group hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Register
                                </SnipperLoginBtn>

                                <div className="text-sm">
                                    <Link className="" to="/login">
                                        <p
                                            href="#"
                                            className="font-medium text-blue-700 hover:text-blue-500 link-to-signup"
                                        >
                                            Already have an account? Login
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;