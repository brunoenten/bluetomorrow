// Written from scratch, making heavy use of tailwindUI components
import { useState, useEffect } from 'react'
import ApplicationLayout from '../layouts/application'

export default function Home() {
  const [ email, setEmail ] = useState('')
  const [ emailValid, setEmailValid ] = useState(false)
  const [ formSubmitted, setFormSubmitted ] = useState(false)
  const handleEmailChange = (e) => setEmail(e.target.value);

  // From chromium source [https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&ss=chromium]
  // Verbatim from https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
  }

  // Validate email when it changes
  useEffect(() => {
    setEmailValid(validateEmail(email))
  }, [email])

  return (
    <ApplicationLayout>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
          <h1>
            <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
              Brand new!
            </span>
            <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">Your one stop portal</span>
              <span className="block text-blue-700">for green news</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Get the hottest curated news from the best environmentally minded blogs, all in one place.
          </p>
          { !formSubmitted && (
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <p className="text-base font-medium text-gray-900">Sign up to our monthly digest.</p>
              <form onSubmit={handleSubmit} className="mt-8 sm:flex">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    onChange={handleEmailChange}
                    value={email}
                    id="email"
                    autoComplete="email"
                    className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:max-w-xs"
                    placeholder="Enter your email"
                    aria-invalid={!emailValid}
                    aria-describedby="email-error"
                  />
                  { !emailValid && email.length > 0 && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    name="subscribe"
                    disabled={!emailValid}
                    className="rounded-md shadow flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our{' '}
                <a href="https://www.freeprivacypolicy.com/live/8aa6d81f-5211-4265-bb9d-234b5fec4bed" className="font-medium text-gray-900 underline" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          )}

          { formSubmitted && (
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <p className="text-base font-medium text-gray-900">Thank you for subscribing to our digest!</p>
              <p className="text-base font-small text-gray-900">We sent a confirmation email to {email}</p>
            </div>
          )}

        </div>
        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
          <svg
            className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
            <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
          </svg>
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="a small fern in cupped hands"
              />
          </div>
        </div>
      </div>
    </ApplicationLayout>
  )
}
