import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl">
      <div className="container mx-auto px-4 py-3 flex justify-center items-center">
        <div className="flex flex-row space-x-6 gap-52">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-gray-200 transition-colors duration-300"
          >
            CRUD APP
          </Link>
          <Link
            href="/addTopic"
            className="font-medium hover:text-gray-200 transition-colors duration-300"
          >
            Add topics
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
