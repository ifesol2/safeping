'use client'

import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  }

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-indigo-600 select-none">SafePing</h1>
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#how-it-works" className="hover:text-indigo-600 transition">How It Works</a>
            <a href="#made-for" className="hover:text-indigo-600 transition">Made For</a>
            <a href="#why-smart" className="hover:text-indigo-600 transition">Why It’s Smart</a>
            <a href="#join" className="hover:text-indigo-600 transition">Join</a>
          </nav>
        </div>
      </header>

      <main className="bg-gradient-to-b from-indigo-50 to-white min-h-screen flex flex-col">
        {/* Above the Fold */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 leading-tight">
              1 Tap. Trusted People. Instant Help.
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-md mx-auto md:mx-0">
              SafePing sends real-time alerts to your emergency circle — when seconds matter most.
            </p>
            <form
              id="join"
              onSubmit={handleSubmit}
              className="mt-8 max-w-sm mx-auto md:mx-0 flex flex-col sm:flex-row gap-4"
              aria-label="Join the SafePing early access list"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-grow rounded-md border border-indigo-300 px-4 py-3 text-gray-900 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md px-6 py-3 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                aria-live="polite"
              >
                Reserve My SafePing
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-green-600 font-medium" role="alert">
                Thank you for joining the early access list!
              </p>
            )}
          </div>

          <div className="flex-1 max-w-md md:max-w-lg relative select-none" aria-hidden="true">
            {/* Device mockup */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
              <div className="flex justify-center mb-6">
                <div className="w-28 h-28 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white text-6xl font-extrabold select-none">
                  🔘
                </div>
              </div>

              {/* Screenshot alert box */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-5 text-indigo-900 font-semibold text-center text-sm select-text leading-snug shadow-inner">
                🚨 Jane triggered SafePing:<br />Possible break-in, Apartment 2B
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-indigo-100 w-full" />

        {/* Below the Fold */}
        <section
          id="how-it-works"
          className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-indigo-900"
        >
          <h3 className="text-3xl font-extrabold text-center mb-12">🚨 How It Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-700 rounded-full p-5 text-5xl select-none shadow-md">🖐️</div>
              <h4 className="font-semibold text-lg">Tap the Button</h4>
              <p className="text-gray-700 max-w-xs">
                Physical button or mobile app — just one tap to send help.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-700 rounded-full p-5 text-5xl select-none shadow-md">📲</div>
              <h4 className="font-semibold text-lg">Ping Sent Instantly</h4>
              <p className="text-gray-700 max-w-xs">
                SMS, app push, and email alerts to your trusted emergency circle.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-700 rounded-full p-5 text-5xl select-none shadow-md">📍</div>
              <h4 className="font-semibold text-lg">Share Info Automatically</h4>
              <p className="text-gray-700 max-w-xs">
                GPS location, optional photo/audio, and reason (fire, medical, intrusion, etc.).
              </p>
            </div>
          </div>
        </section>

        <section
          id="made-for"
          className="bg-indigo-50 py-16 px-6 md:py-24"
        >
          <h3 className="text-3xl font-extrabold text-indigo-700 text-center mb-12">👪 Made For</h3>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-indigo-900 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="text-5xl select-none">🧓</div>
              <p className="font-semibold">Elderly living alone</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="text-5xl select-none">🧍</div>
              <p className="font-semibold">Solo renters or students</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="text-5xl select-none">🏠</div>
              <p className="font-semibold">Families &amp; parents</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="text-5xl select-none">🏢</div>
              <p className="font-semibold">Small businesses</p>
            </div>
          </div>
        </section>

        <section
          id="why-smart"
          className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-indigo-900"
        >
          <h3 className="text-3xl font-extrabold text-center mb-12">🔐 Why It’s Smart</h3>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-indigo-100 text-indigo-700 rounded-full p-5 text-5xl select-none shadow-md">🧠</div>
              <h4 className="font-semibold text-lg">AI detects patterns</h4>
              <p className="text-gray-700">
                Frequent pings trigger auto-escalation for faster response.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-indigo-100 text-indigo-700 rounded-full p-5 text-5xl select-none shadow-md">🗣️</div>
              <h4 className="font-semibold text-lg">Voice-activated backup</h4>
              <p className="text-gray-700">
                Activate SafePing hands-free when you can’t press the button.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-indigo-100 text-indigo-700 rounded-full p-5 text-5xl select-none shadow-md">🌐</div>
              <h4 className="font-semibold text-lg">Offline &amp; secure</h4>
              <p className="text-gray-700">
                Works offline with Bluetooth fallback. All data is encrypted.
              </p>
            </div>
          </div>
        </section>

        <section
          id="join"
          className="bg-indigo-600 text-white py-16 px-6 md:py-24 flex flex-col items-center"
        >
          <h3 className="text-3xl font-extrabold mb-6 text-center max-w-xl">
            Join the SafePing Early Access List
          </h3>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-4"
            aria-label="Join the SafePing early access list"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-grow rounded-md px-4 py-3 text-indigo-900 font-semibold placeholder-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 font-extrabold rounded-md px-6 py-3 hover:bg-indigo-50 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-live="polite"
            >
              Join the Early Access List
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-indigo-300 font-semibold" role="alert">
              Thank you for joining the early access list!
            </p>
          )}
        </section>

        <footer className="bg-indigo-50 text-indigo-700 text-center py-8 select-none text-sm">
          SafePing &copy; {new Date().getFullYear()} — All data is encrypted &mdash; Made with care
        </footer>
      </main>
    </>
  );
}