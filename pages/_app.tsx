import '../styles/globals.css'
/////
import { NextPage } from "next"
import { AppProps } from "next/app"

import React from "react"

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
}

export default function MyApp(props: AppProps) {

  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: any } = props

  return (
    <>
   
        {/* if requireAuth property is present - protect the page */}
      
          <Component {...pageProps} />
  
 
 
    </>

  )
}

