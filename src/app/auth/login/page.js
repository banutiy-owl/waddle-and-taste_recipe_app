// src/pages/LoginPage.js
import React from "react";
import Header from "../../components/Header";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary min-h-screen flex items-center justify-center font-custom">
        <div className="bg-secondary border-2 border-yellow-600 shadow-lg shadow-yellow-600 rounded-lg p-8 mb-12 max-w-md w-full">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 bg-gray-700 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
                id="password"
                type="password"
                placeholder="*******"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-yellow-400 hover:bg-purple-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-white hover:text-purple-700"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="text-center mt-10">
            <p className="text-white">
              Don't have an account?{' '}
              <a href="/auth/signup" className="text-white font-bold hover:underline hover:text-purple-700">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
