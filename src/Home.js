import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <div className="home__carousel">
                    <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzExNTRjZmUt/YzExNTRjZmUt-ODQzMzBhMWMt-w3000._CB418546932_.jpg" alt="Home" />
                    <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/WFM/Monthly/October/AMZ/TallHero/f3vx-2602-WFM-October-prime-saves-more_gw_hero_browser_2x._CB403778564_.jpg" alt="Home" />
                    <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-NTVkNzQxZWYt-w3000._CB418095226_.jpg" alt="Home" />
                    <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NWIxMGIwNWIt/NWIxMGIwNWIt-NjE4MWNhNDQt-w3000._CB417433465_.jpg" alt="Home" />
                </div>
                {/* <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzExNTRjZmUt/YzExNTRjZmUt-ODQzMzBhMWMt-w3000._CB418546932_.jpg" alt="Home" /> */}
                <div className='home__row'>
                    <Product id={'0380972'} title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Gray (2nd Generation)" price={749.99} image='https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UY327_FMwebp_QL65_.jpg' rating={5}/>
                    <Product id={'132822'} title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal" price={99.99} image='https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY327_FMwebp_QL65_.jpg' rating={4}/>
                    <Product id={'2323274'} title="Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB" price={699.99} image='https://m.media-amazon.com/images/I/71ZcQSRCqBL._AC_UY327_FMwebp_QL65_.jpg' rating={4}/>
                </div>
                <div className='home__row'>
                    <Product id={'34324678'} title="Men's Adilette Shower Slides" price={24.95} image='https://m.media-amazon.com/images/I/71Q7F5v0uuL._AC_UL480_FMwebp_QL65_.jpg' rating={5}/>
                    <Product id={'4330284'} title="Official SAT Study Guide 2020 Edition" price={14.77} image='https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._SX377_BO1,204,203,200_.jpg' rating={4}/>
                    <Product id={'5378473'} title="Apple AirPods Pro" price={199.00} image='https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UY327_FMwebp_QL65_.jpg' rating={5}/>
                    <Product id={'6203848'} title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)" price={114.99} image='https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SL1500_.jpg' rating={5}/>
                </div>
                <div className='home__row'>
                    <Product id={'72293420'} title='LG OLED55CXPUA Alexa Built-In CX 55" 4K Smart OLED TV (2020)' price={1596.99} image='https://images-na.ssl-images-amazon.com/images/I/A1LDFBeKebL._AC_SL1500_.jpg' rating={5}/>
                    <Product id={'821893'} title="Anker 4-Port USB 3.0 Hub, Ultra-Slim Data USB Hub with 2 ft Extended Cable" price={11.99} image='https://images-na.ssl-images-amazon.com/images/I/51scO1VOfIL._AC_SL1500_.jpg' rating={4}/>
                    <Product id={'932189'} title="Introducing Amazon Halo – Measure body composition, activity, sleep, and tone of voice - Winter + Silver - Medium" price={64.99} image='https://images-na.ssl-images-amazon.com/images/I/61-LCUkfn8L._AC_SL1002_.jpg' rating={5}/>
                </div>
                <div className='home__row'>
                    <Product id={10} title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI" price={1129.99} image='https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg' rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home
