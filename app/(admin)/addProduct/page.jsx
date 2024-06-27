"use client"
import React, { useState, useRef } from "react";
import ColorSelect from "./ColorSelect";
import SizeSelect from "./SizeSelect";
import Product from "@/components/Product";
import Image from "next/image";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { app } from "@/firebase";
const storage = getStorage(app);

function page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        discount: '',
        category: '',
        description: '',
        fabric: '',
        brand: '',
        stockQuantity: '',
        visibility: '',
        colors: [],
        sizes: [],
        image: ''
    });

    const [cards, setCards] = useState([]);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        
        if (file) {
            setFormData((prevData) => ({
                ...prevData,
                image: file,  // Store the File object directly
            }));

            // Optional: Preview image
            const reader = new FileReader();
            reader.onloadend = () => {
                // You can use this URL for previewing the image
                const imageUrl = URL.createObjectURL(file);
                // Display the image preview in an img tag or somewhere in your UI
                document.getElementById('image-preview').src = imageUrl;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddColor = (color) => {
        setFormData((prevData) => ({
            ...prevData,
            colors: [...prevData.colors, color],
        }));
    };

    const handleRemoveColor = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            colors: prevData.colors.filter((_, i) => i !== index),
        }));
    };

    const handleAddSize = (size) => {
        setFormData((prevData) => ({
            ...prevData,
            sizes: [...prevData.sizes, size],
        }));
    };

    const handleCreate = async () => {
        try {
            const { image, ...data } = formData;
            const storageRef = ref(storage, `images/${formData.category}/${image.name+Date.now()}`);
            await uploadBytes(storageRef, image);
            const imageUrl = await getDownloadURL(storageRef);
            console.log('File uploaded to Firebase:', imageUrl);
            const imageObject = { url: imageUrl, name: storageRef._location.path_ };
            // console.log({ImageObject: imageObject})
    
            // Update formData with image URL from Firebase
            const updatedFormData = { ...data, image: imageObject };
            // console.log({updateFormData:updatedFormData})
    
            axios.post('http://localhost:3000/api/addProduct', updatedFormData)
                .then(response => {
                    console.log('Product added:', response.data);
                    // Reset form data after successful submission
                    setFormData({
                        productName: '',
                        price: '',
                        discount: '',
                        category: '',
                        description: '',
                        fabric: '',
                        brand: '',
                        stockQuantity: '',
                        visibility: '',
                        colors: [],
                        sizes: [],
                        image: null
                    });
                    // Reset image preview
                    document.getElementById('image-preview').src = '';
                })
                .catch(async error => {
                    console.error('There was an error adding the product!', error);
                    await deleteObject(storageRef);
                });
        } catch (error) {
            console.error('Error uploading image to Firebase:', error);
        }
    };
    

    return (

        <div>
            <div>
                <div className="flex items-center justify-between p-4 border-b-2 h-[74px] border-b-[#FF9CBA]">
                    <div className="flex items-center gap-2">
                        <Image src="/icon/AddProduct.svg" width={37} height={38} className="rounded-lg" />
                        <span className="text-sm sm:text-base">MANAGE PRODUCTS</span>
                    </div>
                    <div className="flex items-center gap-2 h-[42px]">
                        <div className="hidden md:flex items-center gap-2">
                            <select className="select select-info w-auto max-w-xs border text-[#8E54E9] h-[42px] px-4 hover:cursor-pointer rounded-md outline outline-1 outline-red-400">
                                <option disabled selected>Select Category</option>
                                <option>Lehengas</option>
                                <option>Sarees</option>
                                <option>Suits</option>
                                <option>Kurtis</option>
                                <option>Dupatta</option>
                                <option>Chunri</option>
                            </select>
                            <div
                                className="flex items-center gap-2 rounded-md px-3 py-2 bg-[#8E54E9] text-white font-medium hover:cursor-pointer"
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                            >
                                <button className="btn">Create Product</button>
                                <Image src="/image/CreateProductBtn.png" width={19} height={19} />
                            </div>
                        </div>
                        <div className="flex md:hidden">
                            <button onClick={toggleMenu} className="text-[#8E54E9]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
               <div>
                 {isMenuOpen && (
                    <div className="md:hidden flex flex-col mt-2 p-4 bg-white">
                        <select className="select select-info w-full max-w-xs border text-[#8E54E9] h-[42px] px-4 hover:cursor-pointer rounded-md outline outline-1 outline-red-400 mb-2">
                            <option disabled selected>Select Category</option>
                            <option>Lehengas</option>
                            <option>Sarees</option>
                            <option>Suits</option>
                            <option>Kurtis</option>
                            <option>Dupatta</option>
                            <option>Chunri</option>
                        </select>
                        <div
                            className="flex items-center gap-2 rounded-md w-[320px] px-3 py-2 bg-[#8E54E9] text-white font-medium hover:cursor-pointer"
                            onClick={() => document.getElementById('my_modal_3').showModal()}
                        >
                            <button className="btn">Create Product</button>
                            <Image src="/image/CreateProductBtn.png" width={19} height={19} />
                        </div>
                    </div>
                )}
               </div>
            </div>
            {/* modal  */}
            <dialog id="my_modal_3" className="modal h-[500px]">
                <div className="modal-box bg-green-300">
                   <div className="flex items-center justify-between p-4 border-b-2">
                    <div className="flex items-center gap-4">
                        <Image src="/icon/CreateProductIcon.svg" width={30} height={27}/>
                        <span>CREATE PRODUCTS</span>
                    </div>
                   <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost text-3xl text-[#5A5A5A]">✕</button>
                    </form>
                   </div>
                    <div className="flex flex-col gap-2 p-5">
                        <div className='flex flex-col gap-10 justify-center p-10 md:flex-row'>
                            <div className="">
                                <div className="flex flex-col gap-6 w-96">
                                    {/* Product Name */}
                                    <div className="relative w-full min-w-[200px] h-10">
                                        <input
                                            name="productName"
                                            value={formData.productName}
                                            onChange={handleInputChange}
                                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-1 outline-[#828282] focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                            placeholder=" " /><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Product name

                                        </label>
                                    </div>
                                    {/* Price  */}
                                    <div className="relative w-full min-w-[200px] h-10">
                                        <input
                                            name="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-1 outline-[#828282] focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                            placeholder=" " /><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Price

                                        </label>
                                    </div>
                                    {/* Discount  */}
                                    <div className="relative w-full min-w-[200px] h-10">
                                        <input
                                            name="discount"
                                            value={formData.discount}
                                            onChange={handleInputChange}
                                            className=" outline-1 peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-[#828282]  focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                            placeholder=" " />
                                        <label
                                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Discount

                                        </label>
                                    </div>
                                    {/* Category  */}
                                    <div className="relative h-10 w-96 min-w-[200px]">
                                        <select
                                         name="category"
                                         value={formData.category}
                                         onChange={handleInputChange}
                                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 outline-[#828282] transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                            <option value="category">Category</option>
                                            <option value="sarees">Sarees</option>
                                            <option value="lehengas">Lehengas</option>
                                            <option value="suits">Suits</option>
                                            <option value="kurtis">Kurtis</option>
                                            <option value="dupatta">Dupatta</option>
                                            <option value="chunri">Chunri</option>
                                        </select>
                                        <label
                                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Select a Category
                                        </label>
                                    </div>
                                    {/* Discription  */}
                                    <div className="w-96">
                                        <div className="relative w-full min-w-[200px]">
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-1 outline-[#828282] transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                                placeholder=" "></textarea>
                                            <label
                                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                Product Discription
                                            </label>
                                        </div>
                                    </div>
                                    {/* Fabric  */}
                                    <div className="relative w-full min-w-[200px] h-10">
                                        <input
                                            name="fabric"
                                            value={formData.fabric}
                                            onChange={handleInputChange}
                                            className=" outline-1 peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-[#828282]  focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                            placeholder=" " /><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Fabric

                                        </label>
                                    </div>
                                    {/* Brand  */}
                                    <div className="relative w-full min-w-[200px] h-10">
                                        <input
                                            name="brand"
                                            value={formData.brand}
                                            onChange={handleInputChange}
                                            className="outline-[#828282] outline-1 peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                            placeholder=" " /><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Brand

                                        </label>
                                    </div>
                                    {/* Stock Quantity  */}
                                    <div className="relative w-full min-w-[200px] h-10">
                                        <input
                                            name="stockQuantity"
                                            value={formData.stockQuantity}
                                            onChange={handleInputChange}
                                            className=" outline-1 peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-[#828282] focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                            placeholder=" " /><label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Stock quantity

                                        </label>
                                    </div>
                                    {/* Visibility  */}
                                    <div className="relative h-10 w-96 min-w-[200px]">
                                        <select
                                         name="visibility"
                                         value={formData.visibility}
                                         onChange={handleInputChange}
                                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                            <option value="visibility">Visibility</option>
                                            <option value="true">True</option>
                                            <option value="false">False</option>
                                        </select>
                                        <label
                                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Visibility
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">

                                {/* Color Name */}
                                <div className="flex flex-col  gap-6 w-auto bg-[#E7E7E7] min-h-32 rounded-lg">

                                    {/* Other input fields */}

                                    {/* Color Picker */}
                                    <ColorSelect onAddColor={handleAddColor} />

                                    {/* Display Selected Colors */}
                                    <div className=" flex gap-5 flex-wrap w-[500px]">
                                        {formData.colors.map((color, index) => (
                                            <div key={index} className="flex items-center gap-2 mb-2  px-3 rounded-lg"
                                                style={{ borderColor: color, borderWidth: '1px', borderStyle: 'solid', }}>
                                                <div
                                                    className="w-6 h-6 rounded"
                                                    style={{ backgroundColor: color }}
                                                ></div>
                                                <span>{color}</span>
                                                <button
                                                    className="ml-auto  text-2xl"
                                                    style={{ color: color }}
                                                    onClick={() => handleRemoveColor(index)}
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Size */}
                                <div className="flex flex-col  gap-6 w-auto bg-[#E7E7E7] min-h-32 py-1 rounded-lg">

                                    {/* input fields */}

                                    {/* Size Picker */}
                                    <SizeSelect onAddSize={handleAddSize} />
                                </div>
                                {/* image  */}
                                <div className="w-[500px] h-[320px] bg-[#E7E7E7] rounded-lg">
                                    <div className="flex   h-screen">
                                        <div
                                            className="w-[500px] h-[320px]  rounded-lg flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => fileInputRef.current.click()}
                                        >
                                            {formData.image ? (
                                                <img src={formData.image} id='image-preview' alt="Preview" className=" object-contain w-full h-full rounded-lg" />
                                            ) : (
                                                <>
                                                    <svg
                                                        className="w-16 h-16 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                                                        ></path>
                                                    </svg>
                                                    <span className="text-gray-400">320 * 500</span>
                                                    <span className="mt-1 text-[#00ADF7]">Upload Image</span>
                                                </>
                                            )}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                ref={fileInputRef}
                                                onChange={handleImageChange}
                                               
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Button  */}
                        <div className="w-full hover:cursor-pointer bg-[#8E54E9] h-[39px] rounded-lg p-[10px] text-white text-center leading-5" onClick={handleCreate}>
                            <button className=" font-normal " >Create</button>
                        </div>
                        <Product cards={cards} />
                    </div>
                </div>
            </dialog>


        </div>







    )
}

export default page