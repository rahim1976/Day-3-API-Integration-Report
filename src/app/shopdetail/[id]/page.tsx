"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaPinterest,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  imageUrl?: string;
  description: string;
  longDescription?: TypedObject[];
  available: boolean;
}

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  // const { id } = useParams();
  const params = useParams();
  const id = params?.id as string | undefined;


  useEffect(() => {
    if (id) {
      client
        .fetch(
          `*[_type == "food" && _id == $id]{
            _id,
            name,
            category,
            price,
            originalPrice,
            tags,
            "imageUrl": image.asset->url,
            description,
            longDescription,
            available
          }`,
          { id }
        )
        .then((data) => {
          setProduct(data[0]);
          if (data[0]?.category) {
            fetchSimilarProducts(data[0].category);
          }
        })
        .catch(console.error);
    }
  }, [id]);

  const fetchSimilarProducts = (category: string) => {
    client
      .fetch(
        `*[_type == "food" && category == $category && _id != $id][0...4]{
          _id,
          name,
          category,
          price,
          originalPrice,
          tags,
          "imageUrl": image.asset->url,
          description,
          available
        }`,
        { category, id }
      )
      .then((data) => setSimilarProducts(data))
      .catch(console.error);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Product Page</title>
      </Head>
      <div className="relative">
        <Image
          src="/navbarbg.jpg"
          alt="Fresh vegetables with dark background"
          className="w-full object-cover"
          width={1920}
          height={640}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold">Product Detail</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-yellow-500">› Product</span>
          </p>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex">
            <div className="flex  space-y-2 ">
              <Image
                src={product.imageUrl || "/placeholder.jpg"}
                alt={product.name}
                className="w-full object-cover rounded"
                width={300}
                height={300}
              />
            </div>
           
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                {product.available ? "In Stock" : "Out of Stock"}
              </span>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  Prev
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  Next
                </button>
              </div>
            </div>

            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>

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
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <span className="ml-2 text-gray-600">5.0 Rating | 22 Review</span>
            </div>

            <div className="flex items-center mt-4">
              <button className="px-4 py-2 border border-gray-300 h-10">
                -
              </button>
              <input
                type="text"
                className="w-12 text-center border-t border-b border-gray-300 h-10"
                value="1"
                readOnly
              />
              <button className="px-4 py-2 border border-gray-300 h-10">
                +
              </button>
              <a href="/cart">
                <button className="ml-4 px-4 py-2 bg-[#FF9F0D] text-white rounded h-10">
                  Add to cart
                </button>
              </a>
            </div>
            <div className="flex items-center mt-4 space-x-4">
              <FaHeart />
              <button className="text-gray-500 hover:text-gray-700">
                Add to Wishlist
              </button>
            </div>
            <div className="mt-4">
              <div className="text-gray-700">
                Category:{" "}
                <span className="text-gray-500">{product.category}</span>
              </div>
              <div className="text-gray-700">
                Tag:{" "}
                <span className="text-gray-500">
                  {product.tags?.join(", ")}
                </span>
              </div>
            </div>


            <div className="flex space-x-4 mt-4">
              <FaFacebook className="text-xl hover:text-[#FF9F0D]" />
              <FaTwitter className="text-xl hover:text-[#FF9F0D]" />
              <FaInstagram className="text-xl hover:text-[#FF9F0D]" />
              <FaPinterest className="text-xl hover:text-[#FF9F0D]" />
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <div className='flex space-x-4 border-b border-gray-300'>
            <button className='px-4 py-2 text-gray-700 border-b-2 border-gray-800'>
              Description
            </button>
          </div>
          <div className='mt-4 text-gray-600'>
            <PortableText
              value={product.longDescription || []}
              components={{
                block: {
                  h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-bold">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
                  normal: ({ children }) => <p className="mt-2">{children}</p>,
                },
                list: {
                  bullet: ({ children }) => <ul className="list-disc list-inside mt-2">{children}</ul>,
                  number: ({ children }) => <ol className="list-decimal list-inside mt-2">{children}</ol>,
                },
                marks: {
                  strong: ({ children }) => <strong>{children}</strong>,
                  em: ({ children }) => <em>{children}</em>,
                  link: ({ value, children }) => (
                    <a href={value.href} className="text-blue-500 hover:underline">
                      {children}
                    </a>
                  ),
                },
              }}
            />
          </div>
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold'>Similar Products</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>
           {similarProducts.map((item) => (
              <Link key={item._id} href={`/shopdetail/${item._id}`} passHref>
                <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                  <div className="relative">
                    {item.tags && item.tags.map((tag) => (
                      <span key={tag} className="absolute top-2 left-2 bg-[#FF9F0D] tracking-wide text-gray-800 font-bold text-md px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    <Image
                      alt={item.name}
                      className="object-cover object-center rounded-t-lg"
                      src={item.imageUrl || "https://placehold.co/300x300"}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      {item.name || "Unnamed Product"}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[#FF9F0D] text-xl font-bold">
                        {item.price ? `$${item.price}` : "$0.00"}
                      </span>
                      {item.originalPrice && (
                        <span className="text-gray-500 line-through ml-2">
                          {`$${item.originalPrice}`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
