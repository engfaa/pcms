import React from 'react';
import { BaseLayout,Navbar, ChartShow } from '../components';
import { useRouter } from 'next/router'

export default function Dashboard() {

  const router = useRouter()
  
  return (
    <>
     <Navbar main={false} dashboard={true} />
       <BaseLayout>
      <ChartShow />
       </BaseLayout>
    </>
   

  );
}
