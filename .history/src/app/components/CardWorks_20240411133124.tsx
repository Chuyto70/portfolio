import React from 'react'
import dataJson from '../../data.json'

interface Props<T> {
  data: T
}

const CardWorks = <T extends { title: string, stack: Array<string>, description: string, url: string, image: string }>({ data }: Props<T>) => {

  return (
    <div className='bg-white rounded-xl p-6 shadow-md mt-6 text-[#4F4F4F] flex gap-4 flex-col md:flex-row'>
        <div className='md:max-w-[300px] md:min-w-[200px] w-full'>
            <img className='rounded-md h-full object-cover' src={data.image} alt={data.title} />
        </div>
        <div>
            <div className='flex flex-wrap'>

                {
                    data.stack.map(el => <p key={el} className='text-sm mr-1 font-medium text-[#4F4F4F]'>{el}</p>)
                }
            </div>
            <p className='text-lg text-[#333333] font-semibold mt-2 mb-1'>{data.title}</p>
            <p className='text-sm text-[#828282] font-medium mb-1'>
                {data.description}
            </p>

            <div className='mt-4'>
                <a href={data.url} target='_blank' className='transition duration-150 bg-[#2F80ED] border-2 border-transparent text-white rounded-lg px-6 py-2 cursor-pointer hover:bg-transparent hover:text-[#2F80ED] hover:border-2 hover:border-[#2F80ED] '>Visitar</a>
            </div>
        </div>
    </div>
  )
}

export default CardWorks
