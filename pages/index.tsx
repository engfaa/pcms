import React from 'react';
import Image from 'next/image'
import { BaseLayout,Navbar } from '../components';


export default function Home() {

  
  return (
    <>
     <Navbar main={true} dashboard={false} />
       <BaseLayout>

      <div className='py-5 px-3 grid grid-cols-2 gap-6'>
    
       <Image
              className="rounded-lg object-cover"
              src="/work_time.svg"
              alt="kapacitor"
               width="800"
               height="1200"
              // layout="responsive"
              priority
            />
        <Image
              className="rounded-lg object-cover"
              src="/typing-cat.gif"
              alt="kapacitor"
               width="200"
               height="300"
              // layout="responsive"
              priority
            />
        </div>
        {/* <AddRow/>
        <TableManager/> */}
       </BaseLayout>
    </>
   

  );
}
