"use client"
import Image from 'next/image'
import React from 'react'
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white font-poppins font-thin pt-12'>
      <div className='flex flex-col items-center justify-center  bg-black text-white'>
        <div className='w-full max-w-4xl p-4'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <h2 className='lg:text-3xl text-2xl font-bold'>
              <span className='text-[#FF9F0D]'>St</span>ill You Need Our Support
              ?
            </h2>
            <div className='flex mt-4  md:mt-0'>
              <input
                type='email'
                placeholder='Enter Your Email'
                className='p-2 rounded-l-md text-white  bg-[#FF9F0D] placeholder-black'
              />
              <button className='text-[#FF9F0D] bg-white p-2 rounded-r-md'>
                Subscribe Now
              </button>
            </div>
          </div>
          <p className='mt-2 lg:mx-0 mx-6 text-gray-400'>
            Don’t wait make a smart & logical quote here. Its pretty easy.
          </p>
          <div className='border-t border-[#FF9F0D] mt-6'></div>
        </div>
      </div>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h2 className='text-xl font-bold mb-4'>About Us.</h2>
            <p className='mb-4'>
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across the world.
            </p>
            <div className='flex items-center '>
              <div className='bg-[#FF9F0D] p-4 text-4xl'>
                <FaClock className='text-white' />
              </div>
              <div className='ml-4'>
                <h3 className='font-bold'>Opening Hours</h3>
                <p>Mon - Sat (8.00 - 6.00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-xl font-bold mb-4 '>Useful Links</h2>
            <ul>
              <li className='mb-2'>
                <a className='hover:underline' href='#'>
                  About
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='#'>
                  News
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='#'>
                  Partners
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='#'>
                  Team
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='#'>
                  Menu
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='#'>
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-bold mb-4'>Help?</h2>
            <ul>
              <li className='mb-2'>
                <a className='hover:underline' href='/faq'>
                  FAQ
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='#'>
                  Terms &amp; Conditions
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='/signup'>
                  SignUp
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='/signin'>
                  SignIn
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='#'>
                  Support Policy
                </a>
              </li>
              <li className='mb-2'>
                <a className='hover:underline' href='#'>
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-bold mb-4'>Recent Post</h2>
            <div className='flex items-center mb-4'>
              <Image
                alt='Recent post image 1'
                className='w-12 h-12  mr-4'
                src='/footer1.jpg'
                width={50}
                height={50}
                
              />
              <div>
                <p className='text-sm text-gray-400'>20 Feb 2022</p>
                <p className='hover:underline'>Keep Your Business</p>
              </div>
            </div>
            <div className='flex items-center mb-4'>
              <Image
                alt='Recent post image 2'
                className='w-12 h-12  mr-4'
                height='50'
                src='/footer2.jpg'
                width='50'
              />
              <div>
                <p className='text-sm text-gray-400'>20 Feb 2022</p>
                <p className='hover:underline'>Keep Your Business</p>
              </div>
            </div>
            <div className='flex items-center mb-4'>
              <Image
                alt='Recent post image 3'
                className='w-12 h-12  mr-4'
                height='50'
                src='/footer3.jpg'
                width='50'
              />
              <div>
                <p className='text-sm text-gray-400'>20 Feb 2022</p>
                <p className='hover:underline'>Keep Your Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#FF9F0D] py-4 mt-10'>
        <div className='container mx-auto px-4 flex justify-between items-center'>
          <p className='text-white'>
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className='flex space-x-4'>
            <FaFacebookF className='bg-white text-gray-900 p-2 text-4xl' />
            <FaTwitter className='bg-white text-gray-900 p-2 text-4xl' />
            <FaInstagram className='bg-white text-gray-900 p-2 text-4xl' />
            <FaPinterest className='bg-white text-gray-900 p-2 text-4xl' />
            <FaYoutube className='bg-white text-gray-900 p-2 text-4xl' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
