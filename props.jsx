
import PropsUse from "./PropsUse"
function App() {
   
  let data={
      name: "Naseem Choduahry",
      phoneNo: 8449957860,
      village: "Dhakiya Peeru"
  }

  return (
    <div>
          <PropsUse info={data}   Email="naseemchoudhary18@gmail.com"></PropsUse>  
           {/* es parent se mail data pass kiya  child propsUse ko */}
           <p> how are you sir  </p>
           <h2> im pretty well and you </h2>
    </div>
   
  )
}

export default App
