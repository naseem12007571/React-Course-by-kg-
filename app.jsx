import PropsUse from "./PropsUse";
function App() {
  let data = {
    name: "Naseem Choduahry",
    phoneNo: 8449957860,
    village: "Dhakiya Peeru",
  };

  return (
    <div>
      <PropsUse info={data} Email="naseemchoudhary18@gmail.com"></PropsUse>
      {/* es parent se mail data pass kiya  child propsUse ko */}
        
        <h1>  hello this is children </h1>     {/* using children props data pass kia  */}

    </div>
  );
}

export default App;
