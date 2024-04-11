import Image from 'next/image'
import Profile from './components/profile'
import Experience from './components/Experience'
import Hobbies from './components/Hobbies'
import FrontendSkills from './components/FrontendSkills'
import BackendSkills from './components/BackendSkills'
import dataJson from '../data.json'
import CardWorks from './components/CardWorks'


export default function Home() {
  const projects = dataJson.data
  return (
    <main className="flex min-h-screen flex-col md:p-24 p-8 bg-[#F2F2F2] dark:bg-[#1f2937]">
     <div className='lg:flex lg:flex-row gap-6 flex-col '>
      <div className='lg:max-w-xs'>
        <div className='mb-4'>
          <Profile />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Hobbies />
        </div>
      </div>
      <div className='lg:mt-0 mt-4'>
        <div className='flex gap-6 md:flex-row flex-col'>
          <div className='h-[180px] flex-1'>
            <FrontendSkills />
          </div>
          <div className='h-[180px] flex-1'>
            <BackendSkills />
          </div>

        </div>
        <div className='bg-white dark:bg-[#374151;] rounded-xl p-4 shadow-md mt-6 text-[#4F4F4F] dark:text-white'>
          Projects ({projects.length})
        </div>

        {/* Lista de proyectos */}
        <div className=''>
          {
            projects.map(project => {
              return (<CardWorks key={project.url} data={project}/>)
            })
          }
        </div>
        
      </div>
     </div>
    </main>
  )
}
