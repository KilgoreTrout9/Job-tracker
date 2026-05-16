export default function SignUp() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Sign Up Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-black mb-6 text-4xl font-bold">Create your account</h1>
            <p className="text-muted-foreground mb-10 text-lg">
              Join us and take control of your job search today.
            </p>
            {/* Sign Up Form */}
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
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
