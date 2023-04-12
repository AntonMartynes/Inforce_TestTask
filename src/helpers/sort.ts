import { InterfaceProduct } from '../types/models/InterfaceProduct';
export function sortByName  (prodArr: InterfaceProduct []) {
    prodArr.sort((a, b) => {
        const nameA = a?.name?.toUpperCase();
        const nameB = b?.name?.toUpperCase();
        if(nameA && nameB) {
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        }
        return 0;
    })
 return prodArr
}
export function sortByCount  (prodArr: InterfaceProduct []) {
    prodArr.sort((a, b) => {
        if (a.count && b.count) {
            return b.count - a.count
        } else {
            return 0
        }
    })
 return prodArr
}