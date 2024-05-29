import "./App.css";

//Importing dependencies
import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";

//Importing the custom componenents
import SearchBox from "./components/searchboxComponent/SearchBox";
import PropertyList from "./components/propertylist/PropertyList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  const [properties, setProperty] = useState([
    {
      id: "prop1",
      type: "House",
      bedrooms: 3,
      price: 750000,
      tenure: "Freehold",
      description:
        "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
      location: "Petts Wood Road, Petts Wood, Orpington",
      picture:
        "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
      url: "properties/prop1.html",
      floorplan: "images/floorplan1.jpg",
      added: {
        month: "October",
        day: 12,
        year: 2022,
      },
      img1: "images/prop1pic1small.jpg",
      img2: "https://bitly.ws/395ws",
      img3: "https://bitly.ws/395wS",
      img4: "https://bitly.ws/395x3",
      img5: "https://bitly.ws/395xu",
      img6: "https://bitly.ws/395xG",
      img7: "https://bitly.ws/395hb",
      date: "2022-10-12",

      postcode: "NPW1",
      maps: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6744206553853!2d0.07951404145244247!3d51.39066161934168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab82cc8f3cb1%3A0xc746da03b0c6c716!2sPetts%20Wood%20Rd%2C%20Petts%20Wood%2C%20Orpington%2C%20UK!5e0!3m2!1sen!2slk!4v1704695450358!5m2!1sen!2slk"
          width="400"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: "prop2",
      type: "Flat",
      bedrooms: 2,
      price: 399995,
      tenure: "Freehold",
      description:
        "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
      location: "Crofton Road Orpington BR6",
      picture:
        "https://images.unsplash.com/photo-1591047138761-a0afe594bf30?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "properties/prop2.html",
      added: {
        month: "September",
        day: 14,
        year: 2022,
      },
      floorplan: "images/floorplan1.jpg",
      postcode: "BR6",
      maps: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6744206553853!2d0.07951404145244247!3d51.39066161934168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab82cc8f3cb1%3A0xc746da03b0c6c716!2sPetts%20Wood%20Rd%2C%20Petts%20Wood%2C%20Orpington%2C%20UK!5e0!3m2!1sen!2slk!4v1704695450358!5m2!1sen!2slk"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      img1: "https://media.istockphoto.com/id/1733878423/photo/a-view-towards-alfriston-in-the-south-downs-on-a-sunny-spring-day.webp?s=170667a&w=0&k=20&c=GOdJcTfslVB1zc4jL-i8prn9pb2zKsjPrGeGn-gTvxc=",
      img2: "https://media.istockphoto.com/id/174635318/photo/san-gimignano-skyline-tuscany.webp?s=170667a&w=0&k=20&c=3KM-qhs9GHnjgyUOGj8k0lP1gVrLkIbL7_mLk1sDgCc=",
      img3: "https://media.istockphoto.com/id/1220040424/photo/irvine-housing.webp?s=170667a&w=0&k=20&c=h2qlQKfWLfxpQn3LlwChJ_oCnRmIwpLur8hK5XYV0cU=",
      img4: "https://media.istockphoto.com/id/487140258/photo/apartments-in-spring.jpg?s=612x612&w=0&k=20&c=0KrmmQVy8Gs4avdJUVytcGWUoTGDR78oe3jmYwvrv7A=",
      img5: "https://media.istockphoto.com/id/533478487/photo/church-and-rapeseed-field.jpg?s=612x612&w=0&k=20&c=2Acph4B90fA99uT2iK1QJsyBIK9U61wDqPUDGsUUujA=",
      img6: "https://media.istockphoto.com/id/886507494/photo/view-of-soave-surrounded-by-vineyards.jpg?s=612x612&w=0&k=20&c=O-AqE2gu_USz-cZTnPBh-6hnS6KBbWF78AdGAKJQyaU=",
      img7: "https://media.istockphoto.com/id/1320609304/photo/fields-of-colza-in-front-of-an-italian-village.jpg?s=612x612&w=0&k=20&c=5v3XDI46KMad92k3mZ2SMZSYhWvRQNrt1kMS-6Y6kHA=",
      date: "2022-08-12",
    },
    {
      id: "prop3",
      type: "House",
      bedrooms: 5,
      price: 850000,
      tenure: "Freehold",
      description:
        "Secluded in a quiet cul-de-sac, this charming house emanates timeless beauty. A cozy living room, bathed in sunlight, transitions to hardwood floors leading to a well-appointed kitchen. Upstairs, bedrooms offer a peaceful retreat, while the backyard's inviting patio provides the perfect spot to unwind in this delightful home.",
      location: "Elmwood Lane, Maple Grove, Minneapolis",
      picture:
        "https://media.istockphoto.com/id/1222415706/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-night.jpg?s=612x612&w=0&k=20&c=nh0U1nSlxS07TIWvQT5gwvsZx2ITqAbBmiVMgiZmsIg=",
      url: "properties/prop1.html",
      floorplan: "images/floorplan1.jpg",
      added: {
        month: "December",
        day: 12,
        year: 2023,
      },
      img1: "images/prop1pic1small.jpg",
      img2: "https://media.istockphoto.com/id/1222415701/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-night.jpg?s=612x612&w=0&k=20&c=FfuApo1ozL7XY3eIoSwLxFvFmUTVTvtquN9GvLcPbc8=",
      img3: "https://media.istockphoto.com/id/1397488961/photo/3d-rendering-of-new-concrete-house-in-modern-style-in-night.jpg?s=612x612&w=0&k=20&c=mZCqosat97WVC18TOecc_TNmfbWjCb1Ek2hwkFM29Us=",
      img4: "https://media.istockphoto.com/id/1398089937/photo/3d-rendering-of-new-concrete-house-in-modern-style-in-night.jpg?s=612x612&w=0&k=20&c=NgbqZcDRmGxRW2pFdelCRYj9gSOoerbF8kB2uGweGkY=",
      img5: "https://media.istockphoto.com/id/1140335423/photo/3d-rendering-of-modern-house-on-the-hill-with-pool-in-night.jpg?s=612x612&w=0&k=20&c=9UwgTAwWqj-ORzOqYbfrKjGnJ-C5p2OxQBz_kooILmQ=",
      img6: "https://media.istockphoto.com/id/929192134/photo/3d-rendering-of-modern-cozy-house-by-the-river-at-night.jpg?s=612x612&w=0&k=20&c=ysYLBEW9pYHHfbUaWe2Qe0JX0wP4heu-iTrXdlOQTuo=",
      img7: "https://media.istockphoto.com/id/1251506426/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-evening.jpg?s=612x612&w=0&k=20&c=yW8y7UqYElNfJYb4naJ6fkXbYmgt0dybT9MEQRmUXzo=",
      date: "2023-10-15",

      postcode: "NPW1",
      maps: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6744206553853!2d0.07951404145244247!3d51.39066161934168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab82cc8f3cb1%3A0xc746da03b0c6c716!2sPetts%20Wood%20Rd%2C%20Petts%20Wood%2C%20Orpington%2C%20UK!5e0!3m2!1sen!2slk!4v1704695450358!5m2!1sen!2slk"
          width="400"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: "prop4",
      type: "House",
      bedrooms: 3,
      price: 450000,
      tenure: "Freehold",
      description:
        "A hidden gem on a quiet cul-de-sac, this charming house blends seamlessly with its surroundings. The cozy living room bathes in sunlight, and hardwood floors guide you to a well-appointed kitchen. Upstairs, the bedrooms provide a serene retreat, while the backyard's inviting patio adds the perfect touch to this delightful home",
      location: "Birchwood Avenue, Oak Park, Chicago",
      picture:
        "https://media.istockphoto.com/id/1441397898/photo/3d-rendering-of-white-and-black-modern-tudor-house-in-night.jpg?s=612x612&w=0&k=20&c=15aE5KPfC08i-4ZolxYlV9bgfyYQvZfJxOLqo8hDX0o=",
      url: "properties/prop1.html",
      floorplan: "images/floorplan1.jpg",
      added: {
        month: "May",
        day: 24,
        year: 2022,
      },
      img1: "images/prop1pic1small.jpg",
      img2: "https://media.istockphoto.com/id/1448491784/photo/3d-rendering-of-white-and-black-modern-tudor-house-in-night.jpg?s=612x612&w=0&k=20&c=wOdM1Za7vS5WONGYnJIDOUWuz8aEoL0n-nWqM4XHxzQ=",
      img3: "https://media.istockphoto.com/id/1320313403/photo/3d-rendering-of-modern-cozy-chalet-in-night.jpg?s=612x612&w=0&k=20&c=9ryEcTLieIoAKhsQ-kisc8qTPYPgS6zdmOHVJMmVPmk=",
      img4: "https://media.istockphoto.com/id/1217999491/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-night.jpg?s=612x612&w=0&k=20&c=oj6HUzMWA-DBGTWBnIpDxNbqX4JaNtOWe_BYz7rSeqg=",
      img5: "https://media.istockphoto.com/id/1400607806/photo/3d-rendering-of-new-concrete-house-in-modern-style-in-night.jpg?s=612x612&w=0&k=20&c=_jUP015dPAYLvJuHUyrzPu21P5iV9q2GnJilPN3khsg=",
      img6: "https://media.istockphoto.com/id/1145210601/photo/3d-rendering-of-modern-house-on-the-hill-with-pool-in-night.jpg?s=612x612&w=0&k=20&c=LDJqXLNkoa0Tj4mTvtXJt7yHWDcavrqAc60jsYkaQqs=",
      img7: "https://media.istockphoto.com/id/1320988121/photo/3d-rendering-of-modern-cozy-chalet-in-night.jpg?s=612x612&w=0&k=20&c=iqXua10_6TiPTevzb7iXHBG8gVNFTen2nsGGphUNXBU=",
      date: "2022-10-12",

      postcode: "NPW1",
      maps: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6744206553853!2d0.07951404145244247!3d51.39066161934168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab82cc8f3cb1%3A0xc746da03b0c6c716!2sPetts%20Wood%20Rd%2C%20Petts%20Wood%2C%20Orpington%2C%20UK!5e0!3m2!1sen!2slk!4v1704695450358!5m2!1sen!2slk"
          width="400"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: "prop5",
      type: "House",
      bedrooms: 3,
      price: 340000,
      tenure: "Freehold",
      description:
        "nestled in serenity at the end of a cul-de-sac, this charming house radiates timeless allure. A welcoming porch invites you inside, where the cozy living room is bathed in sunlight. Hardwood floors lead to a well-appointed kitchen, and upstairs, bedrooms offer a peaceful retreat. The backyard's inviting patio completes this delightful home.",
      location: "Meadowview Drive, Pleasant Valley, Austin",
      picture:
        "https://media.istockphoto.com/id/137086253/photo/modern-illuminated-office-building-at-night.jpg?s=612x612&w=0&k=20&c=zgwdmpKGqxp5dZjMM5O-1qz1xj97GuwYyuocKI9U9H0=",
      url: "properties/prop1.html",
      floorplan: "images/floorplan1.jpg",
      added: {
        month: "October",
        day: 12,
        year: 2022,
      },
      img1: "https://media.istockphoto.com/id/169503008/photo/office-building-exterior.jpg?s=612x612&w=0&k=20&c=B5oxk2RyV46vQaIXOvVuPbMSgjNZXzrNvXA_5xGJWaM=",
      img2: "https://media.istockphoto.com/id/137086253/photo/modern-illuminated-office-building-at-night.jpg?s=612x612&w=0&k=20&c=zgwdmpKGqxp5dZjMM5O-1qz1xj97GuwYyuocKI9U9H0=",
      img3: "https://media.istockphoto.com/id/1221621589/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-night.jpg?s=612x612&w=0&k=20&c=yJ3nlJOkkqyuJuWRUloZJ1Lz1cmytYrPrB2n-7xPLuU=",
      img4: "https://media.istockphoto.com/id/1143249374/photo/3d-rendering-of-modern-house-on-the-hill-with-pool-in-night.jpg?s=612x612&w=0&k=20&c=iqQmi-3Bf6QzINcV3IgFW274sb6vvCPZmZzGhPSRoqA=",
      img5: "https://media.istockphoto.com/id/1400062174/photo/3d-rendering-of-new-concrete-house-in-modern-style-in-night.jpg?s=612x612&w=0&k=20&c=PpTF-KSLvFjZ86uVyVRunSxgVfsgizsDZtCqqzk5m-M=",
      img6: "https://media.istockphoto.com/id/478168231/photo/modern-house-illuminated-at-dusk.jpg?s=612x612&w=0&k=20&c=oz_1rxHE1AEVox3nRweQZv_zTIQj7FXkfvZ_S9tt5sk=",
      img7: "https://media.istockphoto.com/id/508373188/photo/render-evening-house.jpg?s=612x612&w=0&k=20&c=C-PUUYOjmz0FOjasCeI6NjSNOU2pp9b5AkMAvW4h9nY=",
      date: "2021-11-12",

      postcode: "BR1",
      maps: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6744206553853!2d0.07951404145244247!3d51.39066161934168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab82cc8f3cb1%3A0xc746da03b0c6c716!2sPetts%20Wood%20Rd%2C%20Petts%20Wood%2C%20Orpington%2C%20UK!5e0!3m2!1sen!2slk!4v1704695450358!5m2!1sen!2slk"
          width="400"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: "prop6",
      type: "House",
      bedrooms: 3,
      price: 550000,
      tenure: "Freehold",
      description:
        "Tucked away in a peaceful cul-de-sac, this charming house exudes timeless elegance. A quaint porch welcomes you, and inside, sunlight fills the cozy living room. Hardwood floors lead to a well-appointed kitchen, while the bedrooms upstairs offer a tranquil retreat. The backyard's inviting patio completes this delightful home.",
      location: "Willowcrest Drive, Willowbrook, Houston",
      picture:
        "https://media.istockphoto.com/id/1467770701/photo/exterior-of-modular-luxury-house-3d-illustration.jpg?s=612x612&w=is&k=20&c=kdMe6yrhnBaW4JtXw5XkpLm9ydxOaH0N4tIK3ndQREc=",
      url: "properties/prop1.html",
      floorplan: "images/floorplan1.jpg",
      added: {
        month: "October",
        day: 12,
        year: 2022,
      },
      img1: "https://media.istockphoto.com/id/1467770709/photo/exterior-of-modular-luxury-house-3d-illustration.jpg?s=612x612&w=0&k=20&c=OJcd3yaoFwMctdCjS3CO_VDDZmyjNsKak_BcRA3CqSc=",
      img2: "https://media.istockphoto.com/id/1467770784/photo/exterior-of-modular-luxury-house-3d-illustration.jpg?s=612x612&w=0&k=20&c=t4iPD11S011C1JLEmkp5G8coTvRj_pTuiqAfrE2pPro=",
      img3: "https://media.istockphoto.com/id/1467770749/photo/exterior-of-modular-luxury-house-3d-illustration.jpg?s=612x612&w=0&k=20&c=Nz-9PcVWNwejylIE8Y9qG-2UoJPkdwBQcaRcztjd474=",
      img4: "https://media.istockphoto.com/id/1337487144/photo/luxury-modular-house-exterior-3d-illustration.jpg?s=612x612&w=0&k=20&c=K6otj6FUr7iHaBhR1PxOBddLWszgV_Hpo68vbMFbiok=",
      img5: "https://media.istockphoto.com/id/507090887/photo/house-exterior-backyard-with-walkout-deck.jpg?s=612x612&w=0&k=20&c=m9lzlK0RMoKmTTJF6gapBtlOShY1FM9Q41Ho0JCNJco=",
      img6: "https://media.istockphoto.com/id/1400443396/photo/holiday-villa.jpg?s=612x612&w=0&k=20&c=1gkbpEdCAw4iddTTfk6upBVReuRgJkEkOmQosz76V0Q=",
      img7: "https://media.istockphoto.com/id/1282342951/photo/family-walk.jpg?s=612x612&w=0&k=20&c=gH6mZ4tBeEQrelaChMTH_BfFnNpi_-1kjlPKIlK2Bjg=b",
      date: "2023-09-12",

      postcode: "NPW4",
      maps: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6744206553853!2d0.07951404145244247!3d51.39066161934168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab82cc8f3cb1%3A0xc746da03b0c6c716!2sPetts%20Wood%20Rd%2C%20Petts%20Wood%2C%20Orpington%2C%20UK!5e0!3m2!1sen!2slk!4v1704695450358!5m2!1sen!2slk"
          width="400"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
    {
      id: "prop7",
      type: "House",
      bedrooms: 3,
      price: 660000,
      tenure: "Freehold",
      description:
        "A hidden gem on a quiet cul-de-sac, this charming house blends seamlessly with its surroundings. The cozy living room bathes in sunlight, and hardwood floors guide you to a well-appointed kitchen. Upstairs, the bedrooms provide a serene retreat, while the backyard's inviting patio adds the perfect touch to this delightful home.",
      location: "Pinegrove Lane, Pineville, Charlotte",
      picture:
        "https://media.istockphoto.com/id/1128884911/photo/3d-rendering-of-modern-house-on-the-hill-with-pool.jpg?s=612x612&w=is&k=20&c=D0gKG7bSPjQTd4ZO_fkXG-mQf52nN4dsF75bTa_3C8Y=",
      url: "properties/prop1.html",
      floorplan: "images/floorplan1.jpg",
      added: {
        month: "October",
        day: 12,
        year: 2022,
      },
      img1: "https://media.istockphoto.com/id/1330895148/photo/3d-rendering-of-modern-house-in-luxurious-style-in-spring.jpg?s=612x612&w=0&k=20&c=PLhQlG-0hH-8mQzfPqfhvSgaBr4iImTQWFuW8px1AJU=",
      img2: "https://media.istockphoto.com/id/1330895129/photo/3d-rendering-of-modern-house-in-luxurious-style-in-spring.jpg?s=612x612&w=0&k=20&c=bMKSEqzpngN0gxa1opjRSGUzzXaLMXwcwBYbY85RtBE=",
      img3: "https://media.istockphoto.com/id/1330895126/photo/3d-rendering-of-modern-house-in-luxurious-style-in-spring.jpg?s=612x612&w=0&k=20&c=e2aQUpemdIVmMqRom_4NSQbLzAuL9Ad9rD4e5dxY_VQ=",
      img4: "https://media.istockphoto.com/id/1146219998/photo/3d-rendering-of-modern-house-on-the-hill-with-pool-in-evening.jpg?s=612x612&w=0&k=20&c=JZl_cBtCOOOKfYIC24E_7NmV_BqWczdmc4zdMW0FErc=",
      img5: "https://media.istockphoto.com/id/1148798517/photo/3d-rendering-of-modern-house-on-the-hill-with-pool-in-evening.jpg?s=612x612&w=0&k=20&c=sT3FaJnkm_wOrHmiRm0oewWM_SPhYkRn4j7yQnPb6CY=",
      img6: "https://media.istockphoto.com/id/1146481144/photo/3d-rendering-of-modern-house-on-the-hill-with-pool-in-evening.jpg?s=612x612&w=0&k=20&c=2YkqW7dGG1ds99rL8Mo62G9-EpeDBNrBuC8-XUli4Fk=",
      img7: "https://media.istockphoto.com/id/1225807625/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-evening.jpg?s=612x612&w=0&k=20&c=BYWuhVYNzfaeV1MXgvp7dFiwgfUu6UQYiak3uBnGsAY=",
      date: "2022-10-12",

      postcode: "NPW3",
      maps: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6744206553853!2d0.07951404145244247!3d51.39066161934168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab82cc8f3cb1%3A0xc746da03b0c6c716!2sPetts%20Wood%20Rd%2C%20Petts%20Wood%2C%20Orpington%2C%20UK!5e0!3m2!1sen!2slk!4v1704695450358!5m2!1sen!2slk"
          width="400"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  //Use state for Postcode
  const [searchpostCode, setPostCode] = useState("");

  //Use state for property  type
  const [selectPropType, setPropType] = useState("");

  // Use state for minimum and maximum price
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999999999);

  //Use state for min and max bedrooms
  const [minRooms, setMinRooms] = useState(0);
  const [maxRooms, setMaxRooms] = useState(99999999999);

  //useState for specified dates
  const [minDate, setMinDate] = useState("2022-01-01");
  const [maxDate, setMaxDate] = useState("2023-12-12");
  const [date, setDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // useEffect(() => {
  //   // Fetch data from books.json or your API
  //   fetch("/properties.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Properties Json", data.properties);
  //       setProperty(data.properties);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePostCodeSearch = (postcode) => {
    setPostCode(postcode);
  };

  const handleTypeSelect = (type) => {
    setPropType(type);
  };

  //Setting the maxprice
  const handleMaxPrice = (price) => {
    setMaxPrice(price);
  };
  //Setting the min price
  const handleMinPrice = (price2) => {
    setMinPrice(price2);
  };

  //Setting the maximum no of rooms
  const handleMaxRooms = (room) => {
    setMaxRooms(room);
  };

  //Setting the min No of rooms
  const handleMinRoom = (room1) => {
    setMinRooms(room1);
  };

  // Setting the date
  const handleMinDate = (date) => {
    setMinDate(date);
  };

  const handleMaxDate = (date) => {
    setMaxDate(date);
  };

  const handleDate = (date) => {
    setSelectedDate(date);
  };

  console.log("the date: " + date);
  //toggling search by favourite list
  const [showFavorites, setShowFavorites] = useState(false);

  //Toggle favlist implementation

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  // Favorite  List implementation

  const [favorites, setFavorites] = useState([]);

  //Setting favourite item

  const handleAddToFavorites = (property) => {
    console.log("fAVOURITE:" + property);
    setFavorites([...favorites, property]);
  };

  //Storing the favourite list in the browsers local storage
  useEffect(() => {
    // Save favorites to local storage whenever it changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //Retreiving from local sorage
  useEffect(() => {
    // Load favorites from local storage on component mount
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Filtering the property list

  const filteredProperties = properties.filter(
    (property) =>
      property.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
      // Filtering by postcode
      property.postcode.toLowerCase().includes(searchpostCode.toLowerCase()) &&
      //Filtering by property Type
      property.type.toLowerCase().includes(selectPropType.toLowerCase()) &&
      //Filtering by min and max property price
      property.price >= minPrice &&
      property.price <= maxPrice &&
      //Filtering based on number of rooms specified
      property.bedrooms >= minRooms &&
      property.bedrooms <= maxRooms
  );

  // Logic for filtering by date
  //   const filterdate = property.filter((property) => {
  //     const propertyDate = new Date(property.added.year, property.added.month - 1, property.added.day); // property.added contains day, month, year
  //     return selectedDate ? propertyDate.toDateString() === selectedDate.toDateString() : true;
  // });

  return (
    // When using a provider you have to pass the backend provider
    //everything isnide DndProvider will have access to its functionality thats why we make it parent

    <DndProvider backend={HTML5Backend}>
      <div>
        <div className="form-section-container">
          <SearchBox
            handleSearch={handleSearch}
            searchProperty={handlePostCodeSearch}
            selectType={handleTypeSelect}
            minPrice={handleMinPrice}
            maxPrice={handleMaxPrice}
            minRooms={handleMinRoom}
            maxRooms={handleMaxRooms}
            minDate={handleMinDate}
            maxDate={handleMaxDate}
            date={handleDate}
            toggleShowFavorites={toggleShowFavorites}
          />
        </div>

        <div>
          {/* {console.log("filterted properties:" + filteredProperties)} */}
          <PropertyList
            property={filteredProperties}
            // handleAddToFavorites={handleAddToFavorites}
            favorites={favorites}
            unfilteredProperties={properties}
            handleAddToFavorites={handleAddToFavorites}
          />
        </div>

        {/* <DragDrop/> */}
      </div>

      <Footer />
    </DndProvider>
  );
}

export default App;
