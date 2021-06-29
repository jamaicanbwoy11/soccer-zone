import {dataProduct} from "../../listProducts";
import {dataPlayer} from "../../listProducts";
import { ADD_TO_CART, ITEM_DETAIL, LIST_SEARCH, REMOVE_ITEM, UP_AND_DOWN_CART } from "../Constants";
let initailState = {
    shoe:dataProduct,
    player:dataPlayer,
    shoeDetail:{},
    search:'',
    cart:[],
    listSearch :[],
    totalCart:0
}
export const ShoesReducer = (state = initailState,action) =>{
    switch(action.type){
        case ITEM_DETAIL:
            state.shoeDetail = action.data;
            return {...state};
        case 'SEARCH':
            state.search = action.data;
            return {...state};
        case LIST_SEARCH:
       
            return {...state,listSearch:[...state.listSearch,action.data]};
        case ADD_TO_CART:
            let cloneCart = [...state.cart];
            const index = cloneCart.findIndex(item=>item.id === action.data.id);
            //Amount in shoesDetail
            let amount = action.id;
            if(index >= 0){
               let newArr = cloneCart.map(item=>{
                // && item.sizeShoes[item.id].size === action.data.sizeShoes[action.data.id].size
                   if((item.id === action.data.id)){
                       if(item.amount === null ){
                        return {...item,amount:item.amount +1}
                       }else{
                        //ACTION ID IS AMOUNT IN SHOES DETAIL
                        return {...item,amount:item.amount + amount}
                       }
                   }
                   else{
                       return {...item};
                   }
               })
               state.cart = newArr;
               return{
                   ...state
               }
            }
     
            return{
                ...state,
                cart:[...state.cart,action.data]
            }
        case REMOVE_ITEM:
            let cloneCartDele = [...state.cart];
            let idItem = action.data;
            
            const inde = cloneCartDele.findIndex(item=>item.id === idItem);

            if(inde >= 0){
                cloneCartDele.splice(inde,1);
            }else{
                console.warn(`Cant remove product (id: ${idItem}) as its not working`)
            }
            state.cart = cloneCartDele;
            return{...state};
        case UP_AND_DOWN_CART:
            let arrCartUpDown = [...state.cart];

            let idItemUpDown = action.data;

            const upAndDown = arrCartUpDown.map(item=>{
                if(action.id === 'up' && item.id === idItemUpDown){
                    return {...item,amount:item.amount + 1}
                }
                if(action.id==='down' && item.id === idItemUpDown && item.amount > 1){
                    return {...item, amount:item.amount - 1}
                }else{
                    return {...item};
                }
            });
            // state.cart = upAndDown;
            return {...state,cart:[...upAndDown]};
 
        case 'CHOOSE_SIZE':
            let cloneShoesArr = [...state.shoe];
           
            // console.log(action.data,action.id);
            cloneShoesArr = cloneShoesArr.map(item=>{
                if(item.id === action.id){
                    return item?.sizeShoes.map(item2=>{
                        if(item2.id === action.data){
                            item2.check = true;
                            return {...state}
                        }else{
                            item2.check = false;
                            return {...state}
                        }
                       
                    })
                }
                return {...state};
            })
            return {
                ...state
            }
        default :return {...state};
    }
}