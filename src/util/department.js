import InternalMedicine from  '../assets/imgs/department/InternalMedicine.svg' 
import Pediatrics from  '../assets/imgs/department/Pediatrics.svg' 
import Pentaphthaliaceae from  '../assets/imgs/department/Pentaphthaliaceae.svg' 
import Surgery from  '../assets/imgs/department/Surgery.svg' 

export function findImgs(name) {
    switch (name) {
        case '内科':
            return InternalMedicine;
        case '儿科':
            return Pediatrics;
        case '五官科':
            return Pentaphthaliaceae;
        case '外科':
            return Surgery;
        default:
            return null;
    }
}
  