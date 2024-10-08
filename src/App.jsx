import React , {Component} from "react";
import { Header } from "./Layout/Header";
import { Main } from "./Layout/Main";
import { Pagination } from "./Components/Pagination";
import { ModalNav } from "./Components/ModalNav";


const AUTH_KEY = process.env.REACT_APP_AUTH_KEY


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      items : [],
      isLoaded : false,
      page: 0,
      itemsForRender: [],
      cartItems : [],
      totalPrice : 0,
      soonMode : false,
    }

    this.url = "https://fortniteapi.io/v2/items/list?lang=en"
    this.fetchInfo = {
      method:"GET",
      headers : {
         'Authorization' : AUTH_KEY
      }
    }
  }

  getData = (page) => {
      console.log("request")
      fetch(this.url , this.fetchInfo).then(response => response.json())
      .then(data => this.setState({items: data["items"], isLoaded:true, itemsForRender: data["items"].slice(this.state.page * 15 , this.state.page * 15 + 15)}))
      .catch((e) => console.log(e))
  }
  
  addCart = (id) => {
    // if (this.state.cartItems.some(item => item[0].id === id)) {
    //     this.setState({totalPrice: this.state.totalPrice + this.state.items.filter(item => item.id === id)[0].price})
    //     return
    // }
    this.setState({cartItems : [...this.state.cartItems, this.state.items.filter(item => item.id === id)],
      totalPrice: this.state.totalPrice + this.state.items.filter(item => item.id === id)[0].price})
  }

  remFromCart = (name) => {
    let amount = this.state.cartItems.filter(item => item[0].name === name).length
    console.log(amount)
    this.setState({cartItems : this.state.cartItems.filter(item => item[0].name !== name),
      totalPrice: this.state.totalPrice - this.state.items.filter(item => item.name === name)[0].price * amount})
  } 
    
  updateData = (page) => {
    let [start , end] = [page * 15 , (page * 15) + 15]
    let content = this.state.items.slice(start,end)
    this.setState({itemsForRender: content})
  }
  nextPage = () => {
    this.setState({page : this.state.page + 1})
    this.getData(this.state.page)
  }

  prevPage = () => {
    if (this.state.page === 0) return
    this.setState({page : this.state.page - 1})
    this.getData(this.state.page)
  }

  componentDidMount(){
    this.getData(this.state.page)
  }

  componentDidUpdate(){
    console.log(this.state)
  }

 
  

  render() {
    return (  
      <>
        <div className="app">
          <Header price={this.state.totalPrice} remCart={this.remFromCart} cartItems={this.state.cartItems}/>
          <Main
            isLoaded={this.state.isLoaded}
            items={this.state.itemsForRender}
            addCart={this.addCart}
            />
          {this.state.isLoaded ? <Pagination next={this.nextPage} prev={this.prevPage} /> : "" }
        </div>
        <ModalNav/>
      </>
      
    )
  }


}

export default App;
