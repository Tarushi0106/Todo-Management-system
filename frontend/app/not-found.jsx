import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (

        <main className="text-center">
            <h2 className='text-3xl text-red-500' >there was a problem</h2>
            <p>we could not find the page you were looking for..</p>
            <p>Go back to the <Link href= '/'>HomePage</Link></p>
        </main>
    )
}
