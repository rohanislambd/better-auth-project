import ProductCard from "@/components/ProductCard";
import { getCategories } from "@/services/dataFetch";
import Link from "next/link";
import React from "react";
const getCategoryProduct = async (categorySlug) => {
  try {
    const res = await fetch(
      `https://better-auth-backend-kappa.vercel.app/api/products?category=${categorySlug}`,
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

const CategoryProducts = async ({ params }) => {
  const { categorySlug } = await params;

  const categoryProduct = await getCategoryProduct(categorySlug);

  const categories = await getCategories();
  // console.log(categories);

  const currentCategory = categories.find((c) => c.slug === categorySlug);

  console.log(currentCategory);

  return (
    <div className="container mx-auto mt-10">
      {/* BreadCrumb*/}
      <div className="flex gap-1">
        <Link className="text-blue-700" href={`/`}>
          Home
        </Link>
        <span> ⇒</span>
        <p>{currentCategory?.name}</p>
      </div>

      {/* Category Header */}
      <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Category Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
            {currentCategory?.icon}
          </div>

          {/* Category Info */}
          <div className="min-w-0 flex-1 pt-1">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {currentCategory?.name}
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
              {currentCategory?.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-100" />

        {/* Category Stats */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Products Count */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span>📦</span>
            <span>{categoryProduct?.length} products found</span>
          </div>

          {/* Price Update */}
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            <span>✓</span>
            <span>Price updated today</span>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 gap-5">
        {categoryProduct.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
