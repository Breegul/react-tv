import { Routes, Route } from "react-router-dom"
import Home from "./pages/HomePage"
import Search from "./pages/SearchPage"
import "./App.css";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shows">
          <Route index element={<ShowList />} />
          <Route path=":id" element={<ShowItem />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
