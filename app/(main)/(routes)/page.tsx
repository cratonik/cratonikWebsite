import Image from 'next/image'


export default function Home(props) {
  return (
    <div className='bg-indigo-500 min-h-[100vh] p-10 rounded-t-xl'>{props.scroll}</div>
  )
}
