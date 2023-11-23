import React from 'react'
import billingsystem from '../assets/portfolio/BillingSystem.png'
import approvalhub from '../assets/portfolio/Approval_Hub.png'
import amazonReview from '../assets/portfolio/Amazon_Product_Reviews_Chatbot.png'
import CryptoProfit from '../assets/portfolio/CryptoProfit.png'
import eCommerce from '../assets/portfolio/eCommerce.png'
const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: eCommerce,
          href:'https://github.com/MrCuber/Product-Rating-and-Review-Platform',
          demo:'https://product-helpers-4avp.onrender.com/'
        },
        {
          id: 2,
          src: CryptoProfit,
          href:'https://github.com/MrCuber/CryptoProfit',
          demo:'https://cryptoprofit.streamlit.app/'
        },
        {
          id: 3,
          src: amazonReview,
          href:'https://github.com/MrCuber/AmzReview-Sentiment-Analysis-Chatbot',
          demo:'https://review-bots.streamlit.app/'
        },
        {
          id: 4,
          src: billingsystem,
          href:'#'
        },
        {
          id: 5,
          src: approvalhub,
          href:'https://github.com/MrCuber/Approval-Hub',
          demo: '#'
        },
      ];
  return (
    <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src,href,demo }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={demo} target="_blank" rel="noreferrer">
                Demo
              </a>
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={href} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Portfolio
