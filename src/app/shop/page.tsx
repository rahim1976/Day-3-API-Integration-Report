"use client";
import React from "react";

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";

interface FoodItem {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  imageUrl?: string;
  description: string;
  available: boolean;
}
export default function ShopPage() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "food"]{
          _id,
          name,
          category,
          price,
          originalPrice,
          tags,
          "imageUrl": image.asset->url,
          description,
          available
        }`
      )
      .then((data) => setFoodItems(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Head>
        <title>Our Shop</title>
      </Head>
      
      <div className="relative">
        <Image
          src="/navbarbg.jpg"
          alt="Fresh vegetables with dark background"
          className="w-full  object-cover"
        width={1920}
        height={1080}
          
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold">Shop Page</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-yellow-500">› Shop</span>
          </p>
        </div>
      </div>
      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <label className="mr-2">Sort By:</label>
              <select className="border border-gray-300 rounded p-2">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="mr-2">Show:</label>
              <select className="border border-gray-300 rounded p-2">
                <option>Default</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foodItems.map((product) => (
              <Link
                key={product._id}
                href={`/shopdetail/${product._id}`}
                passHref
              >
                <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                  <div className="relative">
                    {product.tags &&
                      product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="absolute top-2 left-2 bg-[#FF9F0D] tracking-wide text-gray-800 font-bold text-md px-2 py-1  rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    <Image
                      alt={product.name || "Product Image"}
                      className="w-full h-96 object-center rounded-t-lg"
                      src={product.imageUrl || "https://placehold.co/300x300"}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      {product.name || "Unnamed Product"}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[#FF9F0D] text-xl font-bold">
                        {product.price ? `$${product.price}` : "$0.00"}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through ml-2">
                          {`$${product.originalPrice}`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button className="border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition">
              «
            </button>
            <button className="border border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 bg-[#FF9F0D] text-white flex items-center justify-center hover:bg-orange-600 transition">
              1
            </button>
            <button className="border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition">
              2
            </button>
            <button className="border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition">
              3
            </button>
            <button className="border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition">
              »
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/4 lg:pl-4 mt-4 lg:mt-0">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <input
              className="w-full border border-gray-300 rounded p-2 mb-4"
              placeholder="Search Product"
              type="text"
            />
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Category</h3>
              <div className="flex flex-col">
                <label className="mb-1">
                  <input className="mr-2" type="checkbox" />
                  Sandwiches
                </label>
                <label className="mb-1">
                  <input className="mr-2" type="checkbox" />
                  Burger
                </label>
                <label className="mb-1">
                  <input className="mr-2" type="checkbox" />
                  Chicken Chup
                </label>
                <label className="mb-1">
                  <input className="mr-2" type="checkbox" />
                  Drink
                </label>
                <label className="mb-1">
                  <input className="mr-2" type="checkbox" />
                  Pizza
                </label>
                <label className="mb-1">
                  <input className="mr-2" type="checkbox" />
                  Thi
                </label>
                <label className="mb-1">
                  <input className="mr-2" type="checkbox" />
                  Non Veg
                </label>
                <label className="mb-1">
                  <input className="mr-2" type="checkbox" />
                  Uncategorized
                </label>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Filter by Price</h3>
              <input className="w-full mb-2" max="8000" min="0" type="range" />
              <div className="flex justify-between text-sm">
                <span>From $0</span>
                <span>to $8000</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Latest Products</h3>
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <Image
                    alt="Pizza"
                    className="w-12 h-12 object-cover rounded mr-2"
                    src="/latest.jpg"
                    height="50"
                    width="50"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">Pizza</h4>
                    <span className="text-sm text-gray-500">$35.00</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <Image
                    alt="Cupcake"
                    className="w-12 h-12 object-cover rounded mr-2"
                    height="50"
                    src="/latest.jpg"
                    width="50"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">Cupcake</h4>
                    <span className="text-sm text-gray-500">$35.00</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <Image
                    alt="Cookies"
                    className="w-12 h-12 object-cover rounded mr-2"
                    height="50"
                    src="/latest.jpg"
                    width="50"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">Cookies</h4>
                    <span className="text-sm text-gray-500">$35.00</span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <Image
                    alt="Burger"
                    className="w-12 h-12 object-cover rounded mr-2"
                    height="50"
                    src="/latest.jpg"
                    width="50"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">Burger</h4>
                    <span className="text-sm text-gray-500">$35.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Product Tags</h3>
              <div className="flex flex-wrap">
                <span className=" text-gray-700  px-2 py-1 text-sm mr-2 mb-2">
                  Services
                </span>
                <span className=" text-gray-700  px-2 py-1 text-sm mr-2 mb-2">
                  Our Menu
                </span>
                <span className=" text-gray-700  px-2 py-1 text-sm mr-2 mb-2">
                  Pizza
                </span>
                <span className=" text-gray-700  px-2 py-1 text-sm mr-2 mb-2">
                  Cupcake
                </span>
                <span className="border-b border-[#FF9F0D] text-[#FF9F0D]  px-2 py-1 text-sm mr-2 mb-2">
                  Burger
                </span>
                <span className=" text-gray-700  px-2 py-1 text-sm mr-2 mb-2">
                  Cookies
                </span>
                <span className=" text-gray-700  px-2 py-1 text-sm mr-2 mb-2">
                  Our Shop
                </span>
                <span className=" text-gray-700  px-2 py-1 text-sm mr-2 mb-2">
                  Tandoori Chicken
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
