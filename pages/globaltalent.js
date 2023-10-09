import GlobalTalent from "@/sections/GlobalTalent"
import Head from "next/head"
import React from "react"

const globaltalent = () => {
    let ab = 'vikram'
    console.log(typeof ab)
  return (
    <>
      <Head>
        <title>Team - 3b Staffing</title>
      </Head>
      <GlobalTalent/>
    </>
  )
}

export default globaltalent
