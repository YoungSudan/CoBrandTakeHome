import React from 'react'

function FlashMessage({error}) {
  return (
    <div className=" text-center lg:px-4">
    <div className="p-2 bg-red-800 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Error</span>
        <span className="font-semibold mr-2 text-left flex-auto">{error}</span>
    </div>
    </div>
  )
}

export default FlashMessage