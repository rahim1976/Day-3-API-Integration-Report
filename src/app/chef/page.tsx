'use client'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity/lib/client'
import Image from 'next/image';

interface Chef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl?: string;
  description: string;
  available: boolean;
}

const ChefsPage = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "chef"]{
          _id,
          name,
          position,
          experience,
          specialty,
          "imageUrl": image.asset->url,
          description,
          available
        }`
      )
      .then((data) => setChefs(data))
      .catch(console.error);
  }, []);

  
  return (
    <div>
      <Head>
        <title>Our Chef</title>
      </Head>
      <div className='relative'>
     <Image
              src="/navbarbg.jpg"
              alt="Fresh vegetables with dark background"
              className="w-full  object-cover"
            width={1920}
            height={1080}
          
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>Our Chef</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-yellow-500'>› Menu</span>
          </p>
        </div>
      </div>
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {chefs.map((chef) => (
            <div
              key={chef._id}
              className='bg-white shadow-md rounded-lg overflow-hidden'
            >
              <Image
                src={chef.imageUrl || '/placeholder.jpg'}
                alt={chef.name}
                className='w-full h-96 object-cover' 
                width={640}
                height={480}
              />
              <div className='p-4 text-center'>
                <h2 className='text-lg font-semibold'>{chef.name}</h2>
                <p className='text-gray-600'>{chef.position}</p>
                <p className='text-gray-600'>{chef.specialty}</p>
                <p className='text-gray-600'>{chef.experience} years of experience</p>
                <p className='text-gray-600'>{chef.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChefsPage
