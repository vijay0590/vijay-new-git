function Header({name , age}){
  return(
    <h1>helllo {name } you are {age}</h1>
  )

}
function App(){
  let name= "vijay"
  let age =35
  return(
<Header name={name}  age={age}></Header>
  )
}
export default App;