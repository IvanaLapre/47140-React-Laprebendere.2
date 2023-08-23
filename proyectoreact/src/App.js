import {BrowserRouter} from "react-router-dom"
import contents from "./Components/content"
import Main from "./Components/Main";
import Footer from "./Components/Footer"
import Items from "./Components/Items"
import Header from "./Components/Header";

function App() {

  return (
<BrowserRouter>
<Header/>
<Main/>
  <div className="Main">
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
  <Footer />
</BrowserRouter>
  );
}

export default App;
