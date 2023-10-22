import { BlogCard, Brand } from "@/components/router"
import Head from "next/head"
import React from "react"

const showcase = () => {
  return (
    <>
      <Head>
        <title> Clients - 3b Staffing</title>
      </Head>
      <Brand  clients='Our Clients'/>
    </>
  )
}

export default showcase
