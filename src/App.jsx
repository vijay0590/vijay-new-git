import Header from "./components/Header";

function App(){
  let name= "vijay"
  let age =35
  let profession ="developer"
  return(
<Header name={name}  age={age}  profession={profession}></Header>
  )
}
export default App;