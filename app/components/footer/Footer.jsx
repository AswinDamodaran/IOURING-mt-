import Link from 'next/link'
import React from 'react'
import { MdMailOutline } from "react-icons/md";

function Footer() {
  return (
    <div className='flex px-10 justify-between p-1 pt-2 bg-background text-text border-border border-t-2'  >
        <Link href="" className='font-medium text-text text-xs flex items-center gap-1 '  ><MdMailOutline/>Contact Us</Link>
        <div><p className="text-xs italic font-medium text-text text-center">© 2025 Copyrights</p></div>
    </div>
  )
}

export default Footer