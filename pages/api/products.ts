// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Product {
  name : string;
  img : string;
  weight: number;
  id: number;
  price: number;
  description : string;
}

export default function products(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json([
    {
      name: "Syringe",
      img: "https://ec.europa.eu/jrc/sites/default/files/styles/normal-responsive/public/canton_-_stock.adobe_.com_syringe_adobestock_210850039.jpeg?itok=52sGbdoO",
      weight: 500,
      id: 1,
      price: 23,
      description: "Syringe: A medical device that is used to inject fluid into, or withdraw fluid from, the body. A medical syringe consists of a needle attached to a hollow cylinder that is fitted with a sliding plunger. The downward movement of the plunger injects fluid;"
    },
    {
      name: "Thermometer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus5ykq95C3d1JIQyyn5xz3lTd_6m6WMZPWaoFppg_2TNi4cgupPOQsi-lgyfmGIO0lxs&usqp=CAU",
      weight: 70,
      id: 2,
      price: 13,
      description: "specifically : one consisting of a sensor housed in a metal probe that registers a change in electrical resistance as a change in temperature"
    },
    {
      name: "Inhaler",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/AsthmaInhaler.jpg",
      weight: 300,
      id: 3,
      price: 9,
      description: "An inhaler is a device that gets medicine directly into a person's lungs. The medicine is a mist or spray that the person breathes in. Unlike a pill or liquid that is swallowed, an inhaler gets medicine right to the lungs. This helps people with asthma because the medicine works quickly to open up narrowed airways. There are two kinds of inhalers: metered dose inhalers, also known as puffers, and dry powder inhalers"
    },
    {
      name: "Medical Gloves ",
      img: "https://cdn.shopify.com/s/files/1/0568/0598/2408/products/svn5b_1_300x300.jpg?v=1624456744",
      weight: 9,
      id: 4,
      price: 1,
      description: "Medical gloves are examples of personal protective equipment that are used to protect the wearer and/or the patient from the spread of infection or illness during medical procedures and examinations.  Medical gloves are one part of an infection-control strategy. "
    },
    {
      name: "Pulse oximetry",
      img: "https://images.othoba.com/images/thumbs/0303869_jumper-fingertip-pulse-oximeter-jpd-500b.jpeg",
      weight: 500,
      id: 5,
      price: 2,
      description: "Pulse oximetry is a test used to measure the oxygen level (oxygen saturation) of the blood. It is an easy, painless measure of how well oxygen is being sent to parts of your body furthest from your heart, such as the arms and legs. ... This information helps the healthcare provider decide if a person needs extra oxygen."
    },
    {
      name: "Musk",
      img: "https://5.imimg.com/data5/SELLER/Default/2020/9/PO/PC/PT/4106403/3-ply-disposable-face-mask-500x500.jpg",
      weight: 500,
      id: 6,
      price: 2,
      description: "Musk is a chemical from the musk gland of the male musk deer. It is dried and used to make medicine.People take musk for stroke, coma, nerve problems, seizures (convulsions), heart and circulation problems, tumors, and injuries"
    }
  ])
}
