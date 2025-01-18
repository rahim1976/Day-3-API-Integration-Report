"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaCheck,
  FaComment,
  FaCookie,
  FaFacebook,
  FaHamburger,
  FaPinterestP,
  FaPizzaSlice,
  FaPlay,
  FaShare,
  FaStar,
  FaThumbsUp,
  FaTwitter,
  FaUtensils,
} from "react-icons/fa";
import Head from "next/head";
import { FaUserCheck, FaWineGlass } from "react-icons/fa6";
import { client } from "@/sanity/lib/client";
const menuItems = [
  {
    name: "Lettuce Leaf",
    price: "$12.50",
    img: "/menu2.jpg",
    desc: "Fresh lettuce leaves, perfect for salads.",
  },
  {
    name: "Fresh Breakfast",
    price: "$14.50",
    img: "/menu3.jpg",
    desc: "Hearty breakfast with eggs, bacon, and toast.",
  },
  {
    name: "Mild Butter",
    price: "$12.50",
    img: "/menu4.jpg",
    desc: "Creamy butter, ideal for spreading or cooking.",
  },
  {
    name: "Fresh Bread",
    price: "$12.50",
    img: "/menu5.jpg",
    desc: "Soft bread, baked fresh daily.",
  },
  {
    name: "Glow Cheese",
    price: "$12.50",
    img: "/menu6.jpg",
    desc: "Flavorful cheese, perfect for snacks.",
  },
  {
    name: "Italian Pizza",
    price: "$14.50",
    img: "/menu6.jpg",
    desc: "Pizza with tomatoes, mozzarella, and basil.",
  },
  {
    name: "Sliced Beef",
    price: "$12.50",
    img: "/menu7.jpg",
    desc: "Juicy beef slices, seasoned to perfection.",
  },
  {
    name: "Mushroom Pizza",
    price: "$12.50",
    img: "/menu8.jpg",
    desc: "Pizza topped with mushrooms and cheese.",
  },
];
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

export default function Home() {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "chef"] | order(_createdAt desc) [0...4]{
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
    <main>
      {/* HERO SECTION START */}
      <section>
        <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center ">
          <div className="text-center md:text-left md:w-/2 flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start px-4 border-l-4 border-[#FF9F0D] md:py-4 md:ml-6">
              <p className="text-[#FF9F0D] text-lg italic">
                Its Quick &amp; Amusing!
              </p>
              <h1 className="text-4xl font-bold text-white">
                <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br />
                Food Quality
              </h1>
            </div>

            <div className="flex  items-center py-4  md:items-start md:flex md:mr-6">
              <div className="flex  mx-2">
                <FaFacebook className="text-white text-xl mx-2 hover:text-[#FF9F0D]" />
                <FaTwitter className="text-white text-xl mx-2 hover:text-[#FF9F0D]" />
                <FaPinterestP className="text-white text-xl mx-2 hover:text-[#FF9F0D]" />
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start py-4 px-4 border-l-4 border-[#FF9F0D] md:py-4 md:ml-6">
              <p className="text-gray-400 mb-4">
                Welcome to our restaurant! We offer a variety of delicious
                dishes made with fresh ingredients. <br />
                Experience the best culinary delights and enjoy a memorable
                dining experience.
              </p>
              <a
                href="/menu"
                className="bg-[#FF9F0D] text-black py-2 px-6 rounded-full inline-block text-center"
              >
                See Menu
              </a>
            </div>
          </div>

          <div className="relative md:w-1/2 p-4 flex justify-center md:ml-4">
            <Image
              alt="A delicious dish"
              className=" rounded-full w-2/3 h-auto object-cover"
              src="/hero.jpg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* ABOUT SECTION END */}
      <section>
        <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Left Section */}
            <div className="flex flex-col items-center lg:items-start lg:justify-center lg:ml-56 lg:pl-32">
              <h2
                className="text-[#FF9F0D] text-lg mb-4"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                About us
              </h2>
              <h1 className="text-white text-4xl font-bold mb-4">
                <span className="text-[#FF9F0D]">We</span> Create the best{" "}
                <br />
                foody product
              </h1>
              <p className="text-gray-400 mb-4">
                Welcome to our restaurant! We are dedicated to providing the
                best culinary experience with a variety of delicious dishes made
                from fresh ingredients. <br />
                Our team of skilled chefs ensures that every meal is prepared
                with the utmost care and attention to detail. <br />
                Join us for an unforgettable dining experience where quality and
                taste come together.
              </p>
              <ul className="text-gray-400 my-4 space-y-2">
                <li className="flex items-center my-2">
                  <FaCheck className="text-[#FF9F0D] mr-2" />
                  Fresh and high-quality ingredients in every dish.
                </li>

                <li className="flex items-center my-2">
                  <FaCheck className="text-[#FF9F0D] mr-2" />A diverse menu that
                  caters to all taste preferences.
                </li>

                <li className="flex items-center my-2">
                  <FaCheck className="text-[#FF9F0D] mr-2" />
                  Exceptional service and a welcoming atmosphere.
                </li>
              </ul>
              <a
                href="/about"
                className="bg-[#FF9F0D] text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300 inline-block text-center"
              >
                Read More
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mr-36 lg:pr-36">
              <Image
                src="/about1.jpg"
                alt="Delicious food with eggs and greens"
                className="rounded-lg w-full h-auto object-cover lg:col-span-2"
                width={500}
                height={500}
              />
              <Image
                src="/about2.jpg"
                alt="Tasty dish with various ingredients"
                className="rounded-lg w-full h-auto object-cover"
                width={500}
                height={500}
              />
              <Image
                src="/about3.jpg"
                alt="Sandwich with fresh vegetables"
                className="rounded-lg w-full h-auto object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION END */}

      {/* FOOD ITEM SECTION START */}
      <section>
        <div className="bg-black text-white min-h-screen">
          <title>Food Category</title>

          <div className="flex flex-col items-center py-10">
            <h1
              className="text-4xl font-bold text-[#FF9F0D]"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Food Category
            </h1>
            <h2 className="lg:text-5xl font-bold text-white mt-2 text-4xl">
              <span className="text-[#FF9F0D]">Ch</span>oose Food Item
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="relative">
                <Image
                  alt="A plate of food with a variety of vegetables and a wooden spoon"
                  className="rounded-lg"
                  height="300"
                  src="/food1.jpg"
                  width="300"
                />
                <div className="absolute top-28 left-24 bg-gray-100 text-[#FF9F0D] font-semibold text-xl px-2 py-1 rounded">
                  Save 30%
                </div>
                <div className="absolute bottom-28 left-0 bg-[#FF9F0D] text-white font-semibold px-4 py-2 rounded">
                  Fast Food Dish
                </div>
              </div>

              <div>
                <Image
                  alt="A burger with lettuce and tomato on a sesame seed bun"
                  className="rounded-lg"
                  height="300"
                  width="300"
                  src="/food2.jpg"
                />
              </div>
              <div>
                <Image
                  alt="A plate of salad with chicken and pomegranate seeds"
                  className="rounded-lg"
                  height="300"
                  src="/food3.jpg"
                  width="300"
                />
              </div>
              <div>
                <Image
                  alt="A stack of donuts with chocolate and sprinkles"
                  className="rounded-lg"
                  height="300"
                  src="/food4.jpg"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOD ITEM SECTION END */}

      {/* WHY FOODTUCK START */}
      <section>
        <div className="bg-black text-white min-h-screen p-6 lg:px-36">
          <Head>
            <title>Food Experience</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
          </Head>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 row-span-2 rounded-lg overflow-hidden">
                <Image
                  src="/food5.jpg"
                  alt="Description 1"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/food6.jpg"
                  alt="Description 2"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/food7.jpg"
                  alt="Description 3"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/food8.jpg"
                  alt="Description 4"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/food9.jpg"
                  alt="Description 5"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/food10.jpg"
                  alt="Description 6"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 items-center justify-center">
              <h2
                className="text-[#FF9F0D] text-lg font-semibold"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                Why Choose us
              </h2>
              <h1 className="text-5xl font-bold mt-2">
                <span className="text-[#FF9F0D]">Ex</span>traordinary Taste{" "}
                <br />
                And Experience
              </h1>
              <p className="text-gray-400 mt-4">
                Welcome to our restaurant! We pride ourselves on offering an
                extraordinary dining experience with a focus on quality and
                taste. <br />
                Our chefs use only the freshest ingredients to create dishes
                that are both delicious and visually appealing. <br />
                Whether youre here for a quick bite or a full-course meal, we
                guarantee a memorable culinary journey.
              </p>
              <div className="flex justify-start mt-8">
                <div className="text-center">
                  <div className="bg-[#FF9F0D] m-4 p-4 rounded-md">
                    <FaHamburger className="p-2 text-5xl" />
                  </div>
                  <p className="mt-2">Fast Food</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#FF9F0D] m-4 p-4 rounded-md">
                    <FaCookie className="p-2 text-5xl" />
                  </div>
                  <p className="mt-2">Lunch</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#FF9F0D] m-4 p-4 rounded-md">
                    <FaWineGlass className="p-2 text-5xl" />
                  </div>
                  <p className="mt-2">Dinner</p>
                </div>
              </div>
              <div className="bg-white w-80 justify-center bg-cover text-black p-4 rounded-lg mt-8 flex items-center border-l-8 border-[#FF9F0D]">
                <div className="text-4xl font-bold text-[#FF9F0D] pr-4">
                  30+
                </div>
                <div className="ml-4 pl-4">
                  <p className="text-lg">Years of</p>
                  <p className="text-lg font-bold">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY FOODTUCK END */}

      {/* ICON SECTION START */}
      <section>
        <div
          className="relative h-[40vh] bg-cover bg-center sm:h-[60vh] md:h-[80vh]"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="flex flex-wrap justify-center items-center  p-4 rounded-lg w-full max-w-4xl mx-auto sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div className="text-center text-white flex flex-col items-center">
                  <FaUserCheck className="text-6xl text-[#FF9F0D] mb-4" />
                  <h3 className="text-lg">Professional Chefs</h3>
                  <p className="text-3xl font-bold">420</p>
                </div>

                <div className="text-center text-white flex flex-col items-center">
                  <FaHamburger className="text-6xl text-[#FF9F0D] mb-4" />
                  <h3 className="text-lg">Items Of Food</h3>
                  <p className="text-3xl font-bold">320</p>
                </div>

                <div className="text-center text-white flex flex-col items-center">
                  <FaUtensils className="text-6xl text-[#FF9F0D] mb-4" />
                  <h3 className="text-lg">Years Of Experienced</h3>
                  <p className="text-3xl font-bold">30+</p>
                </div>

                <div className="text-center text-white flex flex-col items-center">
                  <FaPizzaSlice className="text-6xl text-[#FF9F0D] mb-4" />
                  <h3 className="text-lg">Happy Customers</h3>
                  <p className="text-3xl font-bold">220</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ICON SECTION END */}

      {/* MENU SECTION START */}
      <section>
        <div className="flex justify-center items-center min-h-screen bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2
                className="text-[#FF9F0D] italic"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                Choose &amp; pick
              </h2>
              <h1 className="text-4xl font-bold">
                <span className="text-[#FF9F0D]">Fr</span>
                om Our Menu
              </h1>
            </div>
            <div className="flex justify-center mb-8">
              <ul className="flex flex-wrap space-x-4  text-lg md:gap-24 ">
                <li className="text-[#FF9F0D]">Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Dessert</li>
                <li>Drink</li>
                <li>Snack</li>
                <li>Soups</li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                <Image
                  alt="Salad on a plate with herbs"
                  className=" mx-auto mb-4"
                  height="300"
                  src="/menu1.jpg"
                  width="300"
                />
              </div>
              <div className="space-y-4 md:space-y-8 m-2">
                {menuItems.slice(0, 4).map((item, index) => (
                  <div className="flex items-center space-x-4" key={index}>
                    <Image
                      alt={item.name}
                      className="w-16 h-16 rounded-sm"
                      src={item.img}
                      width={500}
                      height={500}
                    />
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                      <p className="text-[#FF9F0D] font-bold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 md:space-y-8 m-2">
                {menuItems.slice(4).map((item, index) => (
                  <div className="flex items-center space-x-4" key={index + 4}>
                    <Image
                      alt={item.name}
                      className="w-16 h-16 rounded-sm"
                      src={item.img}
                      width={500}
                      height={500}
                    />
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                      <p className="text-[#FF9F0D] font-bold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MENU SECTION END */}

      {/* CHEFS START */}
      <section className="">
        <div className="flex flex-col items-center py-10 bg-black">
          <h2
            className="text-[#FF9F0D] text-2xl mb-2"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Chefs
          </h2>
          <h1 className="text-4xl font-bold mb-10 text-white">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg overflow-hidden shadow-lg relative"
              >
                <Image
                  src={chef.imageUrl || "/placeholder.jpg"}
                  alt={`Chef ${chef.name}`}
                  className="w-full h-80 object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 right-28 bg-white p-2 text-center">
                  <h3 className="font-bold text-black">
                    {chef.name}
                  </h3>
                  <p className="text-black">{chef.position}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/chef"
            className="bg-transparent border-2 border-[#FF9F0D] text-[#FF9F0D] py-2 px-6 rounded-full hover:bg-[#FF9F0D] hover:text-black transition duration-300"
          >
            See More
          </Link>
        </div>
      </section>
      {/* CHEFS END */}

      {/* TESTIMONIALS START */}
      <section>
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
          <Head>
            <title style={{ fontFamily: "Great Vibes, cursive" }}>
              Testimonials
            </title>
          </Head>
          <h2 className="text-[#FF9F0D] text-2xl mb-2 ">
            Testimonials
          </h2>
          <h1 className="text-4xl font-bold mb-12 text-center ">
            What our clients are saying
          </h1>
          <div className="bg-white text-black shadow-lg p-8 relative max-w-2xl mx-auto">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <Image
                src="/client1.jpg" // Make sure to place the image in the public directory
                alt="Clients face"
                width={100}
                height={100}
                className="rounded-full border-4 border-white"
              />
            </div>
            <div className="text-center mt-12 pt-4">
              <i className="fas fa-quote-left text-[#FF9F0D] text-3xl mb-4"></i>
              <p className="text-gray-700 mb-4">
                The food here is absolutely amazing! Every dish is prepared
                with such care and attention to detail. I highly recommend this
                restaurant to anyone looking for a great dining experience.
              </p>
              <div className="flex justify-center items-center mb-4">
                <FaStar className="text-[#FF9F0D] text-2xl" />
                <FaStar className="text-[#FF9F0D] text-2xl" />
                <FaStar className="text-[#FF9F0D] text-2xl" />
                <FaStar className="text-[#FF9F0D] text-2xl" />
                <FaStar className="text-gray-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Alamin Hasan</h3>
              <p className="text-gray-500">Food Specialist</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <span className="w-3 h-3 bg-[#FF9F0D] rounded-full mx-1"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full mx-1"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full mx-1"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full mx-1"></span>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS END */}

      {/* VIDEO SECTION START */}
      <section>
        <div className="bg-black min-h-screen relative">
          <Head>
            <title>Food Documentation</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Roboto:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Image
            src="/blog1.jpg"
            alt="Delicious food with vegetables and meat"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-end p-8 md:p-16 text-center">
            <h2
              className="text-[#FF9F0D] text-lg md:text-xl "
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              Restaurant Active Process
            </h2>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-2">
              <span className="text-[#FF9F0D]">We</span> Document Every Food{" "}
              <br />
              Bean Process until it is saved
            </h1>
            <p className="text-gray-300 text-sm md:text-base mt-4 max-w-lg">
              Welcome to our restaurant! We meticulously document every step of
              our food preparation process to ensure the highest quality and
              safety standards. <br />
              From sourcing fresh ingredients to the final presentation, we take
              pride in our attention to detail and commitment to excellence.
              Join us on a culinary journey where transparency and quality are
              at the forefront.
            </p>
            <div className="mt-6 flex space-x-4 justify-center">
              <button className="bg-transparent border border-[#FF9F0D] text-white px-6 py-4 rounded-full hover:bg-[#FF9F0D] hover:text-black transition duration-300">
                Read More
              </button>
              <button className="text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:text-black hover:bg-[#FF9F0D] transition duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-[#FF9F0D] rounded-full">
                  <FaPlay className="text-white" />
                </div>
                <span>Play Video</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* VIDEO SECTION END */}

      {/* BLOG SECTION START  */}
      <section>
        <div className="bg-black text-white min-h-screen">
          <Head>
            <title>Latest News & Blog</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
          </Head>
          <div className="container mx-auto p-4">
            <div className="text-center mb-8">
              <h2
                className="text-[#FF9F0D] text-2xl"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                Blog Post
              </h2>
              <h1 className="text-4xl font-bold text-white">
                <span className="text-[#FF9F0D]">La</span>test News & Blog
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black border border-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/blog2.jpg"
                  alt="A delicious burger with fries and salad"
                  className="w-full h-96 object-cover"
                  width={500}
                  height={500}
                />
                <div className="p-6">
                  <p className="text-[#FF9F0D] mb-2">10 February 2022</p>
                  <h3 className="text-xl font-bold mb-4">
                    The Art of Crafting the Perfect Burger
                  </h3>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-white">
                      Learn More
                    </a>
                    <div className="flex space-x-2 text-[#FF9F0D]">
                      <FaThumbsUp className="text-white" />
                      <FaComment className="text-[#FF9F0D]" />
                      <FaShare className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black border border-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/blog3.jpg"
                  alt="A delicious pizza with various toppings"
                  className="w-full h-96 object-cover"
                  width={500}
                  height={500}
                />
                <div className="p-6">
                  <p className="text-[#FF9F0D] mb-2">10 February 2022</p>
                  <h3 className="text-xl font-bold mb-4">
                    Exploring the Flavors of Gourmet Pizza
                  </h3>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-white">
                      Learn More
                    </a>
                    <div className="flex space-x-2 text-[#FF9F0D]">
                      <FaThumbsUp className="text-white" />
                      <FaComment className="text-[#FF9F0D]" />
                      <FaShare className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black border border-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/blog4.jpg"
                  alt="A hand squeezing lime over tacos"
                  className="w-full h-96 object-cover"
                  width={500}
                  height={500}
                />
                <div className="p-6">
                  <p className="text-[#FF9F0D] mb-2">10 February 2022</p>
                  <h3 className="text-xl font-bold mb-4">
                    The Secret to Perfectly Seasoned Tacos
                  </h3>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-white">
                      Learn More
                    </a>
                    <div className="flex space-x-2 text-[#FF9F0D]">
                      <FaThumbsUp className="text-white" />
                      <FaComment className="text-[#FF9F0D]" />
                      <FaShare className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG SECTION END */}
    </main>
  );
}
