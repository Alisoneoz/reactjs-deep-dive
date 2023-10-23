import randomFunction from "./components/jsComponents/jscomponent"

function App() {

  return (
    <div className="flex flex-col m-5 justify-center">
      <h1 className="font-bold text-3xl">hola</h1>
      <button onClick={randomFunction} className="bg-green-500 p-5 w-fit mt-5 font-semibold rounded-lg hover:bg-green-400">Fire the JS function</button>
    </div>
  )
}

export default App
