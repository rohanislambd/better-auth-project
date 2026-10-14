import AllProducts from "@/components/AllProducts";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const getProducts = async () => {
  try {
    const res = await fetch(
      "https://better-auth-backend-kappa.vercel.app/api/products"
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);

    return [];
  }
};

export default async function Home() {

  const products = await getProducts();

  const downProducts = products?.filter(p => p.trend ==='down')
  // console.log(downProducts);
    return (
    <div className="container mx-auto mt-10">
       {/* down product */}
        <div>
          <p className="mb-5 text-xl font-bold">Down Products</p>
          <div>
            <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2  gap-8'>
              {
                downProducts.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
              } 
            </div>
          </div>
        </div>

         {/* All products product */}
        <div>
          <AllProducts products={products} />
        </div>

    </div>
  );
}
