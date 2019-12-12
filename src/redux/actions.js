export const REMOVE = 'REMOVE'
export const ADD = 'ADD'

export const removeItem = item => {
  console.log(item)
  return { type: REMOVE, payload: item }
}

export const addItem = item => {
  console.log(item)
  return { type: ADD, payload: item }
}