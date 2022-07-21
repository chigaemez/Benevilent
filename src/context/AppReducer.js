export default (state, action) =>{
  switch(action.type){

    case 'DELETE_TRANSACTION':
      return{
        ...state,
        item:state.item.filter(item => item.id !== action.payload)
      }

      case 'ADD_TRANSACTION':
        return{
          ...state,
          item:[action.payload, ...state.item]
        }


    default:
      return state;
  }

  
}
