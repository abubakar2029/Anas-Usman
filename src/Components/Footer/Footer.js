import React from 'react'

function Footer() {
    return (
        <footer className='flex sm:divide-x-2 max-sm:divide-y-2 w-full bg-neutral-100 max-sm:items-center max-sm:justify-center justify-around p-8 min-h-[20vh]   max-sm:flex-col max-sm:w-full'>{/*  */}
            {/* FIRST-COLOUMN : ADDRESS */}
            <div className="text-center w-1/3 max-sm:my-2">{/* flex flex-col items-start contact-icons */}
                <h6 className="font-bold my-4 text-xl max-sm:text-lg"> Contact us</h6>
                <div className='md:text-sm lg:text-base sm:text-xs max-sm:text-xs w-full mx-auto max-sm:pl-7  lg:pl-20'>
                    <div className='flex w-1/2 max-sm:w-full h-fit m-auto items-center my-1'><i className="fa-solid fa-house mr-2.5"></i><p>People Colony,FSD</p></div>
                    <div className='flex w-1/2  max-sm:w-full h-fit m-auto items-center my-1'><i className="fa-solid fa-envelope mr-2.5"></i><p> anas@gmail.com</p></div>
                    <div className='flex w-1/2 max-sm:w-full  h-fit m-auto items-center my-1'><i className="fa-sharp fa-solid fa-phone mr-2.5"></i><p>+92 326 5318724</p></div>
                </div>
            </div>
            {/* SECOND COLOUMN : NAV-LINKS*/}
            <div className='text-center w-1/3 max-sm:w-full max-sm:my-3'>{/* flex items-center lg:justify-start md:flex-col,flex-wrap md:justify-center pl-7 h-16 text-neutral-600 */}
                <h1 className='font-bold my-4 text-xl max-sm:text-lg'>Follow us</h1>
                <div className='flex justify-center items-center w-full my-8'>
                    <a><i className="fa-brands fa-github fa-lg mx-3 cursor-pointer"></i></a> {/* mr-7  */}
                    <a><i className="fa-brands fa-facebook fa-lg mx-3 cursor-pointer"></i></a>
                    <a><i className="fa-brands fa-twitter fa-lg mx-3 cursor-pointer"></i></a>
                    <a><i className="fa-brands fa-linkedin fa-lg mx-3 cursor-pointer"></i></a>
                </div>
            </div>
            {/* THIRD-COLOUMN : SUBCRIBE */}
            <div className='w-1/3 text-center max-sm:w-full '>
                <h1 className="font-bold my-4 text-xl max-sm:text-lg">Stay in Touch</h1>
                <input type="text"
                    placeholder="E-Mail"
                    className='rounded-full px-4 py-2 flex-1 text-gray-700' />
                <button className="bg-indigo-500 text-white rounded-full font-semibold px-6 py-2 hover:bg-indigo-400 focus:bg-indigo-600">
                    Subscribe
                </button>
            </div>
        </footer>
    )
}
export { Footer }