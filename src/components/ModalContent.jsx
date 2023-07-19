// import { Dialog, Transition  } from '@headlessui/react'
// import { Fragment, useState } from 'react'

// export default function ModalContent({country }) {
//     // console.log(Object.entries(country.languages));
//     console.log(country);
//     //return (
//     //   <div 
//     //   onClick={closeModal}
//     //   className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center">
//     //     <div 
//     //     onClick={e => e.stopPropagation()}
//     //     className="min-w-[500px] relative rounded p-7 bg-gray-50">
//     //       <button 
//     //       onClick={closeModal}
//     //       className="absolute top-2 right-1 w-8 h-8 flex items-center justify-center text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
//     //         X
//     //       </button>
//     //       <h2 className="text-2xl mb-4">Here is {country.name.common} s information</h2>
//     //       <p className="text-lg mb-2">
//     //         <span className="font-semibold">Languages(s)</span>
//     //         : {Object.entries(country.languages).map(lang => lang[1] + " ")}
//     //       </p>
//     //       <p className="text-lg mb-2">
//     //         <span className="font-semibold">Capital</span> : {country.capital[0]} 
//     //       </p>
//     //       <p className="text-lg mb-2">
//     //         <span className="font-semibold">Population</span> : {country.population} 
//     //       </p>
//     //     </div>
//     //   </div>
//     // )
//   )
//   }

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal(country) {
  let [isOpen, setIsOpen] = useState(true)

    console.log(country.country);
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className=" inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   <p className="text-2xl mb-4">Here is {country.country.name.common}'s information</p>
                    <p className="text-lg mb-2">
                    <span className="font-semibold">Languages(s)</span>
                    : {Object.entries(country.country.languages).map(lang => lang[1] + " ")}
                    </p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-lg mb-2">
                        <span className="font-semibold">Capital</span> : {country.country.capital} 
                    </p>
                    <p className="text-lg mb-2">
                        <span className="font-semibold">Population</span> : {country.country.population} 
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      className="absolute top-2 right-1 w-8 h-8 flex items-center justify-center text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded "
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}