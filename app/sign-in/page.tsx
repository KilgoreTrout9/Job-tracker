export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Sign In Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-black mb-6 text-4xl font-bold">Sign in to your account</h1>
            <p className="text-muted-foreground mb-10 text-lg">
              Welcome back! Please enter your details to continue.

            </p>
            {/* Sign In Form */}
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring focus:ring-primary/50"
              />
              <input
                type="password"
                placeholder="Password (8+ characters)"
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring focus:ring-primary/50"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Sign In
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
