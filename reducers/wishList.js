import { withNavigationFocus } from "react-navigation"

export default function(wishList=[], action) {

    if(action.type == 'addResto') {
        var wishListCopy = [...wishList]
        if(!wishListCopy.includes(action.restoLiked)) {
            wishListCopy.push(action.restoLiked)
        }

       return wishListCopy

    } else if(action.type == 'deleteResto') {
        var wishListCopy = [...wishList]

        //Retirer un élément de la wishList par sa position dans le tableau

        wishListCopy.splice(action.unLike, 1)

        return wishListCopy
    
    } else {
      return wishList
   
  }}
