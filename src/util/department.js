import internalMedicine from  '../assets/imgs/department/internalMedicine.svg' 
import pediatrics from  '../assets/imgs/department/pediatrics.svg' 
import pentaphthaliaceae from  '../assets/imgs/department/pentaphthaliaceae.svg' 
import surgery from  '../assets/imgs/department/surgery.svg' 

export function findImgs(name) {
    switch (name) {
        case '内科':
            return internalMedicine;
        case '儿科':
            return pediatrics;
        case '五官科':
            return pentaphthaliaceae;
        case '外科':
            return surgery;
        default:
            return null;
    }
}
  