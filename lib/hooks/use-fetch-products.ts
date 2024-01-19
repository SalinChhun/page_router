import { productService } from '@/service/product.service';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router'
import { stringify } from 'querystring';
import React from 'react'

const useFetchProduct = () => {
  
    const { data, isLoading, error } = useQuery({
      queryKey: ['products'],
      queryFn: () => productService.getAllProduct()
    });

  return {
    data,
    isLoading,
    isError: !!error
  }
}

export default useFetchProduct