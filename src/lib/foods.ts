import data from '../data/vikings-foods.json';

export type Food={customId?:string;name:string;sub:string;price:number;rarity:number;image:number;src?:string;sourceUrl?:string;veg?:boolean;quip?:string};

// Vikings Gaming food & beverage menu, items priced above 30,000 VND.
// Prices are stored in thousands of VND. Images are served locally from public/vikings.
// Rarity tiers follow the menu's own price spread instead of the generic lunch thresholds.
const tiers=[35,40,45,50];

export const foods:Food[]=data.foods.map((item,image)=>{
  const price=Math.round(item.price/1000);
  const tier=tiers.findIndex(limit=>price<=limit);
  return {name:item.name,sub:item.category,price,rarity:tier===-1?4:tier,image,src:item.src,sourceUrl:item.sourceUrl};
});
