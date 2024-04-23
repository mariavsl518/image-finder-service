import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
      <ThreeDots
      visible={true}
      height="60"
      width="60"
      color="#818181"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        justifyContent:'center'
      }}
      />
  )
}
