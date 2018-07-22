export const setProductSize = (size, id) =>({
  type: 'SET_SIZE',
  size,
  id
})

export const setProductQuantity = (quantity, id, price, imageURL) => ({
  type: 'SET_QUANTITY',
  quantity,
  id,
  price,
  imageURL
})

export const setCart = (activeItems) => ({
  type: 'SET_CART',
  activeItems
})
