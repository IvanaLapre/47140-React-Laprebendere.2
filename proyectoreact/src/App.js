import {BrowserRouter} from "react-router-dom"
import contents from "./Components/content"
import Main from "./Components/Main";
import Footer from "./Components/Footer"
import Items from "./Components/Items"

function App() {

  return (
<BrowserRouter>
<Main/>
  <div className="App">
    {contents.map(contents => (
      <Items
        key={contents.id}
        image={contents.img}
        name={contents.name}
        price={contents.price}
        totalSales={contents.totalSales}
       />
    ))}
  </div>
  <h2>Contactanos</h2>
  <Footer />
</BrowserRouter>
  );
}

export default App;
