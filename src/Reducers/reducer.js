const initialStore = {
  cart : [],
  numberOfItemsInCart: 0,
  active:{},
  newCartItem:{
    id:'',
    size:'',
    qty:'',
    price:'',
    imageURL: ''
  }
}

export default (store = initialStore, action)=>{
  switch(action.type){

    case 'SET_SIZE': {
// debugger;
      const active = {...store.active};
      if(active[action.id]){
        active[action.id]['size'] = action.size
      } else{ 
        active[action.id] = {};
        active[action.id]['size'] = action.size;
      }
      return {...store, active}
    };
    case 'SET_QUANTITY':{
      // debugger;
      const active = {...store.active};
      if (active[action.id]){
        active[action.id]['quantity'] = action.quantity;
        active[action.id]['price'] = action.price;
        active[action.id]['imageURL'] = action.imageURL;
      } else{
        active[action.id] = {};
        active[action.id]['quantity'] = action.quantity;
        active[action.id]['price'] = action.price
        active[action.id]['imageURL'] = action.imageURL
      }
      return {...store,active}
    }

    case 'SET_CART': {

      const cart = Object.keys(action.activeItems).map(item => {
        const newItem = { id: item, ...action.activeItems[item]}
        return newItem;
      })
      return {...store,cart}
    }
    
    default: store
  }
}
