
function Item(props) {
  return(
    <div className="ItemList">
      <div key={props.id} className="productCard"></div>
        <img src={props.img} alt="product-img" className="productImage"></img>

        <div className="productCard_content">
            <h3 className="productName">{props.name}</h3>
            <div className="displayStack_1">
              <div className="productPrice">${props.price}</div>
            </div>
            <div className="displayStack_2"></div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" >Agregar</button>
      </div>
    </div>
  )


}

export default Item