import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, paginatedValue, setMakeCars } from '../../Redux/Slices/HomePageSlice/HomePageSlice';




export default function SelectMenu({ Make ,setAllCars }) {

    const dispatch = useDispatch()
    const {makeCars , cars} = useSelector((state) =>({
        makeCars :state.HomePageSlice.makeCars,
        cars :state.HomePageSlice.cars
    }))
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPersons, setSelectedPersons] = useState([]);
    const makeCar =Make&& Object.keys(Make)    



    
    function isSelected(value) {
        return makeCars.find((el) => el === value) ? true : false;
    }

    function handleSelect(value) {
        if (!isSelected(value)) {
            const selectedPersonsUpdated = [
                ...makeCars,
                makeCar.find((el) => el === value)
            ];
            setSelectedPersons(selectedPersonsUpdated);
            dispatch(setMakeCars(selectedPersonsUpdated))
            dispatch(paginatedValue(1))
            dispatch(fetchCars())
            setAllCars([])
            
        } else {
            handleDeselect(value);
        }
        setIsOpen(true);
    }

    function handleDeselect(value) {
        const selectedPersonsUpdated = makeCars.filter((el) => el !== value);
        setSelectedPersons(selectedPersonsUpdated);
        dispatch(setMakeCars(selectedPersonsUpdated))
        dispatch(paginatedValue(1))
        dispatch(fetchCars())
        setAllCars([])
        setIsOpen(true);
    }


    return (
        <div className="w-[280px] group">
            <Listbox value={makeCars} onChange={(value) => handleSelect(value)} >
                <div className="relative mt-1">
                    <Listbox.Button onClick={() => setIsOpen(!isOpen)}
                        open={isOpen} className="text-[#28293D] group-hover:border-[#FF8800] focus:border-[#E63535] flex justify-between text-[14px] font-[500] leading-[20px] w-full h-[48px] px-[16px] py-[14px] rounded-[10px] border-[2px] border-[#E4E4EB] bg-white outline-none">
                        <span className="block truncate">{makeCars.length < 1
                            ? "Select Make"
                            : `${makeCars}`}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <div className={`${isOpen ? "absolute top-[-163px] left-[-100px] px-[100px] py-[40px] w-[100vw] h-[100vh] z-[1000] bg-transparent " : ""}`} onClick={() => { setIsOpen(!isOpen) }}>

                        <Transition
                            unmount={false}
                            show={isOpen}
                            as={Fragment}
                        >
                            <Listbox.Options onClick={() => setIsOpen(false)} className="absolute w-[280px] h-[90vh] overflow-scroll  overflow-x-hidden rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {makeCar && makeCar.map((person) => {
                                    const selected = isSelected(person);
                                    return (
                                        <Listbox.Option
                                            key={person}
                                            className={({ active }) =>
                                                `relative cursor-default  hover:bg-[#FAFAFC] font-[400] text-[16px] leading-tight select-none  text-gray-900 ${active ? 'bg-[#FFF3EB]' : ''
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ active }) => (
                                                <>
                                                    <div
                                                        className={`${active
                                                            ? " bg-[#FAFAFC]"
                                                            : "text-gray-900"
                                                            } cursor-default select-none relative`}
                                                    >
                                                        <span
                                                            className={`block h-[45px] py-3 pl-4 pr-4 truncate ${selected ? 'font-medium bg-[#FFF3EB]' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person}
                                                        </span>
                                                        {selected && (
                                                            <span
                                                                className={`${active ? "text-white" : "text-blue-600"
                                                                    } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                                            >
                                                            </span>
                                                        )}
                                                    </div>

                                                </>
                                            )}
                                        </Listbox.Option>
                                    )
                                })}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </div>
            </Listbox>
        </div>
    )
}



