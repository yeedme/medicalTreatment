import React, { useEffect,useRef } from 'react'
import JsBarcode from 'jsbarcode';
export default function BarCode() {

    function formatDate(date) {
        const year = String(date.getFullYear()).slice(-2); // 获取年份后两位
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月份，不足两位数在前面补0
        const day = String(date.getDate()).padStart(2, '0'); // 获取日期，不足两位数在前面补0
      
        return year + month + day;
    }

    function generateRandomNumber() {
        let randomNumber = '';
        for (let i = 0; i < 6; i++) {
          randomNumber += Math.floor(Math.random() * 10);
        }
        return randomNumber;
    }
      
    const barcodeRef = useRef(null);
    useEffect(()=>{
        const today = new Date();
       
        if (barcodeRef.current) {
           const code=formatDate(today)+generateRandomNumber()
            JsBarcode(barcodeRef.current,code); // 使用你想要生成的数据替换 '1234567890'
          }
    },[])
  return (
   <>
    <div className='w-64 h-24 m-2 '>
        <svg ref={barcodeRef}>

        </svg>
    </div>
    </>
  )
}
