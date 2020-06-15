import { withNavigationFocus } from "react-navigation"

export default function(wishList=[], action) {

    if(action.type == 'addResto') {
        
       var wishListCopy = [...wishList]
       wishListCopy.push(action.restoLiked)
       console.log(wishListCopy)

       return wishListCopy

    } else if(action.type == 'deleteResto') {
        var wishListCopy = [...wishList]
        var position = null

        for(let i = 0 ; i<wishListCopy.length; i++) {
            if(wishListCopy[i].restoLiked == action.restoLiked) {
                position = i
            }
        }
        if(position != null) {
            wishListCopy.splice(position, 1)
        }

        return wishListCopy
    
    } else {
      return wishList
   
  }}
