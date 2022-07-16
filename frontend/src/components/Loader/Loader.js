import React from 'react'

import './loader.scss'

import { AiOutlineLoading } from 'react-icons/ai'

export default function Loader({ min }) {
  return (
    <div className={`loader-container ${min ? `min-container` : null}`}>
        <AiOutlineLoading />
        <h1>Loading</h1>
    </div>
  )
}
