import React from 'react';
import { useForm } from 'react-hook-form';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { Form } from '../model/form';
import { useStore } from '../store/cartStore';

const Checkout = () => {
    
    const addOrderProduct = useStore((state) => state.addOrderProduct);
    const processComplete = useStore((state) => state.processComplete);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: Form) => {
        if (data) {
           alert('order placed successfully');
        } else {
            alert('please enter valid information');
        }
        addOrderProduct()
        reset()
        processComplete()
    }
    

    return (
        <div className="text-center">
            <p className="text-3xl my-4">Checkout</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-96 border p-2 my-4"
                    type="text"
                    placeholder="Name"
                    {...register('Name', {
                        required: true,
                        maxLength: 80,
                    })}
                />
                <br />
                <input
                    className="w-96 border p-2 my-4"
                    type="text"
                    placeholder="Email"
                    {...register('Email', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />
                <br />
                <input
                    className="w-96 border p-2 my-4"
                    type="number"
                    placeholder="Mobile number"
                    {...register('Mobile number', {
                        required: true,
                        minLength: 11,
                        maxLength: 14,
                    })}
                />
                <br />
                <input
                    className="w-96 border p-2 my-4"
                    type="text"
                    placeholder="Address"
                    {...register('Address', {
                        required: true,
                        maxLength: 80,
                    })}
                />
                <br />
                <div className="flex justify-center mt-2">
                    <button
                        type="submit"
                        className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none flex items-center"
                    >
                        <IoCheckmarkDoneOutline />
                        <p className="ml-2">Submit</p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
