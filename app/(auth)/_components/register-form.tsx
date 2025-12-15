import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md border border-gray-200 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-1">
          Register
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Create your account
        </p>

        <form className="space-y-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-5 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
