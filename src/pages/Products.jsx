import { use, useEffect, useState } from "react"
import Loading from "../components/Loading"
import Navbar from "../components/Navbar"
import Card from '../components/Card'

// const data1=[
//   {title: "first1", description: "first paragraog sdnfksadnfksadf"},
//   {title: "secondt1", description: "first paragraog sdnfksadnfksadf"},
//   {title: "third", description: "first paragraog sdnfksadnfksadf"},
//   {title: "fourtg", description: "first paragraog sdnfksadnfksadf"},
//   {title: "fifth", description: "first paragraog sdnfksadnfksadf"},
//   { description: "first paragraog sdnfksadnfksadf"},
//   {title: "seventh", description: "first paragraog sdnfksadnfksadf"},
//   {title: "seven33th", },
// ]


export default function Products() {

  const [apiData,setApiData] =useState([])
  const [data,setData]=useState([])
  const [page,setPage] = useState(0)
  const [noi,setNoi]=useState(5)

  
  useEffect(()=>{
    const fetchData=async()=>{

      const response=await fetch('https://dummyjson.com/products')
      const json = await  response.json()
      setApiData( json.products);
      
    }
    fetchData()
    // console.log(data);
    
  },[])

  useEffect(()=>{
    setData(apiData.slice(page*noi,(page*noi)+noi))
  },[page, apiData,noi])

  // useEffect(() =>{
  //   async function pageData(){
  //      const resData= await apiData
  //    }
  //    pageData()
  //  },[])
  //logic 
  const name = "welcome to SDHUB"
  return (
    <>
    <Navbar/>
    {/* <Header /> */}


        <h1 className="text-4xl ">Hello  {name}</h1>
        <div className="grid grid-cols-3">
{/*  
    {data && data.length > 0? data.map((elem,index)=>{
    return <Card key={index} title={elem.title} description={elem.description} />} ) : 'Loading...'} */}
    {data.length>0?data.map((elem,index)=>{
    return <Card key={index} title={elem.title} id={elem.id} description={elem.description} img={elem.images[0]} />} )
  :<Loading/>} 
  <div>

        <h1>Page: {page}</h1>
        <h1>Items: {noi}</h1>
       
       
        {
          page>0 &&  <button 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          
          onClick={()=>setPage(page-1)}>prev</button> 
        }
       
        

        
        <button 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={()=>setPage(page+1)}>next</button>
        
        
        <button 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={()=>setNoi(10)}>show 10</button>
        <button 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={()=>setNoi(5)}>show 5</button>
        <button 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={()=>setNoi(15)}>show 15</button>
        </div>
        </div>
</>
    
  )
}
