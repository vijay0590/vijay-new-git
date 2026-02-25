import Header from "./components/Header";

function App(){
  let name= "vijay"
  let age =35
  return(
<Header name={name}  age={age}></Header>
  )
}
export default App;