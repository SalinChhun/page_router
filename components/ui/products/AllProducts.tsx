import ProductCard from '@/components/Card/ProductCard';
import useFetchProduct from '@/lib/hooks/use-fetch-products'
import React from 'react'

function AllProduct() {

  const { data, isError, isLoading } = useFetchProduct();
  console.log("Product data :", data);

  if (isLoading) {
    return (
      <>Loading...</>
    )
  }
  return (
    <div className='flex space-x-5 justify-center mt-5 mx-auto w-[70%]'>
      {
        data?.map((products: any) => (
          <ProductCard key={products?.product_id} data={products} />
        ))
      }

    </div>
  )
}

export default AllProduct