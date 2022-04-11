import React, {useState} from 'react';
import './All.css'
import item1 from "./images/pba.jpg";
import item2 from "./images/bal.jpg";
import item3 from "./images/mias1.jpg";
import item4 from "./images/poba.jpg";
import item5 from "./images/fal1.jpg";
import item6 from "./images/mias2.jpg";
import item7 from "./images/ponba.jpg";
import item8 from "./images/tal2.jpg";
import item9 from "./images/mias3.jpg";


function All() {
  const [menus]= useState([
        {
          id: 1,
          title: 'Parotta Salna',
          category: 'breakfast',
          price: 15.99,
          img: item1,
          desc: "Parotta is filled with different kind of salanas (Sidedish) to be tasted here",
        },
        {
          id: 2,
          title: 'Egg Biryani',
          category: 'lunch',
          price: 13.99,
          img: item2,
          desc:"Colorful biryaaniiii containing juicy and spicy flavours along with roasted egg, Raitha and Brinjal gravy " ,
        },
        {
          id: 3,
          title: 'Dairymilk milkshake',
          category: 'shakes',
          price: 6.99,
          img: item3,
          desc: "Chocolaty Dairymilky mixed with icecreams and shakes along with cashew and chocolate toppings around it ",
        },
        {
          id: 4,
          title: 'Poori Masala',
          category: 'breakfast',
          price: 20.99,
          img:item4,
          desc: "Air filled Poori, softy and rounded in shape along with tasty & spicy Potato Masalaaaaaa " ,
        },
        {
          id: 5,
          title: 'Schezwan Fried Rice',
          category: 'lunch',
          price: 22.99,
          img: item5,
          desc: "Different tastes are included in one fried rice containing Schezwan as its style." ,
        },
        {
          id: 6,
          title: 'Godzilla Milkshakes',
          category: 'shakes',
          price: 18.99,
          img: item6,
          desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        },
        {
          id: 7,
          title: 'Pongal Sambhar',
          category: 'breakfast',
          price: 8.99,
          img: item7,
          desc: "Overflowing Ghee roasted spices with smashy rice along with Tamilnadu Sambhar and Chutney" ,
        },
        {
          id: 8,
          title: 'American Curd Rice',
          category: 'lunch',
          price: 12.99,
          img: item8,
          desc: "Rices are filled with juicy and tasty curdy along with some hot and spicy chillies with sweety grapes ",
        },
        {
          id: 9,
          title: 'Oreo Milkshake',
          category: 'shakes',
          price: 16.99,
          img: item9,
          desc: "Shake it with lots of oreo biscuits, along a bowl of oreo icecream, and toppings overloaded",
        },
      ])
      const [dataRender, setRenderData]=useState(menus)
      const categories=menus.map(menu=>menu.category)
      const uniqCategories=[...new Set(categories)]
      uniqCategories.unshift('All')

      const handleTab=(data)=>{
        if(data==="All"){
          setRenderData(menus)
          return
        }
       const filterCategories=menus.filter(menu=>menu.category===data)
       setRenderData(filterCategories)
      }
      
  return (
    <div  className='backs'>
       <div className='row'>
      <div className='container text text-center py-5'> 
      Our Menu
      <div className='underline'></div>
       </div>
       <div className='col-12 text-center  mb-5 menusel '>
           {uniqCategories.map((data,i)=><span className=' p-2 m-3' key={i} onClick={()=>handleTab(data)}>{data}</span>)}
       </div>
       </div>
  
       
       <div>
       
       <div className='container'>
         <div className='row'>
         {dataRender.map((data,i)=>
           <div className='col-md-6 col-12 mb-5'  key={i}>
            <div>
             <div className='row'>
             <div className='col-sm-8 col-md-5 '><img src={data.img} width='100%' height='150' className='bordimg rounded-pill'/></div>

              <div  className='col-md-6'>
                  <div>
                    <div className='Content'>
                    <div className='d-flex justify-content-between'>
                      <div className='text-capitalize titles'>{data.title}</div>
                      <div className='colors'> ${data.price}</div>
                    
                     </div>
                      </div>
                      <div className='textyunder'></div>
                     
                     <div className='txt mt-4 justify-content-center text-capitalize desx' >{data.desc}</div>
                     </div>
                    </div>
                    </div>       
                   </div>
                </div>)}
                </div>
       </div>
       </div>
         
     

       
    </div>
  )
}

export default All