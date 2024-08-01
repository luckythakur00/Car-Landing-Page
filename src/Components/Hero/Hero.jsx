import React from 'react'
import arrow_btn from '../../assests/arrow_btn.png'
import play_icon from '../../assests/play_icon.png'
import pause_icon from '../../assests/pause_icon.png'

function Hero({ playStatus, setPlayStatus, heroCount, setHeroCount, herodata }) {

  const nxtimg = () => {
    if (heroCount < 2) {
      setHeroCount(heroCount + 1)
    }
    else {
      setHeroCount(0)
    }
    console.log(herodata)
  }
  return (
    <>
      <div className='mt-56 ml-20'>
        <div className="herotext">
          <p className='text-white text-7xl' >{herodata.text1}</p>
          <p className='text-white text-7xl' >{herodata.text2}</p>
        </div>
        <div className="mt-10 bg-white rounded-3xl flex justify-center h-12 w-64 pt-2 ">
          <p className='text-lg' >Explore the features</p>
          <img src={arrow_btn} className='h-9 cursor-pointer pl-10 pb-1 ' onClick={nxtimg} />
        </div>
        <div className="flex text-white ">
          <li className= { heroCount===0 ? ' text-red-500 list-none text-8xl px-1 cursor-pointer': 'list-none text-8xl px-1 cursor-pointer' } onClick={()=> setHeroCount(0)} >.</li>
          <li className= { heroCount===1 ? ' text-red-500 list-none text-8xl px-1 cursor-pointer': 'list-none text-8xl px-1 cursor-pointer' } onClick={()=> setHeroCount(1)} >.</li>
          <li className= { heroCount===2 ? ' text-red-500 list-none text-8xl px-1 cursor-pointer': 'list-none text-8xl px-1 cursor-pointer' } onClick={()=> setHeroCount(2)} >.</li>
        </div>
      </div>
      <div className='text-white flex justify-end pr-28 h-14' >
        <img src={playStatus ? pause_icon : play_icon} className='h-12 cursor-pointer pr-4 ' onClick={() => setPlayStatus(!playStatus)} />
        <h1 className='text-2xl pt-2'>{playStatus ? "Stop the video" : "See the video"}</h1>
      </div>
    </>
  )
}

export default Hero