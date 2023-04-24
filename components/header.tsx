import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => (
  <header className="bg-white sm:h-20 py-5 border-b sm:sticky top-0">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0 " >
          <img src="/myface.jpg" className="w-12" alt="Ekansh Srivastava" />
          <div className="sm:ml-8 flex space-x-5 text-center">
            <Link href="/" className="text-gray-500 hover:text-pink-700">
              Home
            </Link>
            <Link href="https://codeblogx.000webhostapp.com/" className="text-gray-500 hover:text-pink-700">
              BlogX 
            </Link>
          </div>
        </div>
        <Link
          href="/contact"
          prefetch={false}
          className="py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200"
        >
          Contact Us 👤
        </Link>
      </div>
    </div>
  </header>
)

export default Header
