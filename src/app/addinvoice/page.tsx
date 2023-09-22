"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsDownload } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillDelete } from "react-icons/ai";

const AddInvoice = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const [productItems, setProductItem] = useState([]);

  const deleteproductitem = ()=>{
    productItems.slice(productItems.length-1, productItems.length);
    setProductItem(productItems);
  }

  const NewProduct:any = (
    <>
      <tr>
        <td>
          <div className="w-full flex flex-col gap-2">
            <select
              className="w-full border rounded-md px-5 outline-none text-sm py-3"
              name="Client"
              id="client"
            >
              <option value="">Plan</option>
              <option value="">Plan two</option>
              <option value="">Plan three</option>
              <option value="">Plan four</option>
              <option value="">Plan five</option>
              <option value="">Plan six</option>
              <option value="">Plan Seven</option>
            </select>
          </div>
        </td>
        <td>
          <div className="w-full flex flex-col gap-2">
            <select
              className="w-full border rounded-md px-5 outline-none text-sm py-3"
              name="Client"
              id="clients"
            >
              <option value="">Falcon8X TBA/LTI</option>
              <option value="">Falcon8X TBA/LTI</option>
              <option value="">Falcon8X TBA/LTI</option>
              <option value="">Falcon8X TBA/LTI</option>
              <option value="">Falcon8X TBA/LTI</option>
              <option value="">Falcon8X TBA/LTI</option>
              <option value="">Falcon8X TBA/LTI</option>
            </select>
          </div>
        </td>
        <td>
          <input
            className="w-full border rounded-md px-5 outline-none text-sm py-3"
            type="text"
            placeholder="Product for Trip t85256"
          />
        </td>
        <td className="text-right flex justify-end items-center gap-2">
          <input
            className="w-3/5 border rounded-md px-5 outline-none text-sm py-3"
            type="text"
            placeholder="11.50.000"
          />
          <button onClick={deleteproductitem} className="bg-red-200 p-2 rounded-md">
            <AiFillDelete className="text-2xl text-red-500" />
          </button>
        </td>
      </tr>
    </>
  );

  const { getRootProps, getInputProps, isDragActive }: any = useDropzone({
    onDrop,
  });


  // newproduct add function is here
  const newproductadd = ()=>{
    if(!productItems){
      setProductItem([ NewProduct ]);
    }else{
      setProductItem([...productItems, NewProduct]);
    }
  };

  

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Invoices</h1>
        <p className="text-xs text-gray-500">Invoices/ New Invoice</p>
      </div>
      <div className="p-5 bg-white my-5 rounded-md flex justify-between items-start">
        <div className=" w-full grid grid-cols-2 gap-5 justify-between items-center">
          <div className="w-full flex flex-col gap-2">
            <label className="font-bold" htmlFor="Client">
              Select
            </label>
            <select
              className="w-full border rounded-full px-5 outline-none text-sm py-2"
              name="Client"
              id="client"
            >
              <option value="">Select Client</option>
              <option value="">client two</option>
              <option value="">client three</option>
              <option value="">client four</option>
              <option value="">client five</option>
              <option value="">client six</option>
              <option value="">client Seven</option>
            </select>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="data" className="font-bold">
              Invoice Date
            </label>
            <DatePicker
              className="border px-5 py-2 text-sm rounded-full"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="font-bold" htmlFor="Client">
              Trip
            </label>
            <select
              className="w-full border rounded-full px-5 outline-none text-sm py-2"
              name="Client"
              id="client"
            >
              <option value="">12390</option>
              <option value="">13224</option>
              <option value="">24424</option>
              <option value="">89467</option>
              <option value="">29847</option>
              <option value="">92847</option>
              <option value="">98927</option>
            </select>
          </div>
        </div>
        <div className="space-y-3">
          <label className="font-bold" htmlFor="">
            plane image
          </label>
          <div
            className="w-fit border border-dashed border-blue-500 p-5 rounded-md"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-xs font-bold">
                Drop the <br /> files here ...
              </p>
            ) : (
              <div className="flex justify-center items-center text-blue-500 gap-3">
                <BsDownload className="text-2xl" />
                <p className="text-xs">
                  Upload <br /> plane image
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* seceound section from here */}
      <div className="bg-white p-5 rounded-md">
        <div>
          <div>
            <table className="table-fixed w-full">
              <thead className="font-bold text-start">
                <tr>
                  <th className="text-start">Product Ttype:</th>
                  <th className="text-start">Product</th>
                  <th className="text-start">Description</th>
                  <th className="text-start">Total</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="py-5 my-5 border-y">
            <table className="table-fixed w-full">
              <tbody>
                <tr>
                  <td>
                    <div className="w-full flex flex-col gap-2">
                      <select
                        className="w-full border rounded-md px-5 outline-none text-sm py-3"
                        name="Client"
                        id="client"
                      >
                        <option value="">Plan</option>
                        <option value="">Plan two</option>
                        <option value="">Plan three</option>
                        <option value="">Plan four</option>
                        <option value="">Plan five</option>
                        <option value="">Plan six</option>
                        <option value="">Plan Seven</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div className="w-full flex flex-col gap-2">
                      <select
                        className="w-full border rounded-md px-5 outline-none text-sm py-3"
                        name="Client"
                        id="clients"
                      >
                        <option value="">Falcon8X TBA/LTI</option>
                        <option value="">Falcon8X TBA/LTI</option>
                        <option value="">Falcon8X TBA/LTI</option>
                        <option value="">Falcon8X TBA/LTI</option>
                        <option value="">Falcon8X TBA/LTI</option>
                        <option value="">Falcon8X TBA/LTI</option>
                        <option value="">Falcon8X TBA/LTI</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input
                      className="w-full border rounded-md px-5 outline-none text-sm py-3"
                      type="text"
                      placeholder="Product for Trip t85256"
                    />
                  </td>
                  <td className="text-right flex justify-end items-center gap-2">
                    <input
                      className="w-3/5 border rounded-md px-5 outline-none text-sm py-3"
                      type="text"
                      placeholder="11.50.000"
                    />
                    <button className="bg-red-200 p-2 rounded-md">
                      <AiFillDelete className="text-2xl text-red-500" />
                    </button>
                  </td>
                </tr>
                {
                  productItems && productItems.map((item) => item)
                }
              </tbody>
            </table>
            <button onClick={newproductadd} className="mt-3 text-blue-500 font-bold">
              + Add Product
            </button>
          </div>
        </div>
        <div>
          <table className="table-auto w-2/5 ms-auto text-end">
            <tbody>
              <tr>
                <td className="font-bold">Subtotal:</td>
                <td className="text-gray-400">16.550.000</td>
              </tr>
              <tr>
                <td className="font-bold">TVA:</td>
                <td className="text-gray-400">2.800.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-t mt-5 flex justify-between items-center py-5">
          <div>
            <button className="px-5 mx-3 bg-[#383FE1] py-2 rounded-full font-bold text-white">
              Save
            </button>
            <button className="px-5 mx-3 border border-[#84878B] py-2 rounded-full font-bold text-[#84878B]">
              cancel
            </button>
            <button className="px-5 mx-3 bg-[#383FE1] py-2 rounded-full font-bold text-white">
              Download Invoice
            </button>
          </div>
          <table className="w-2/5 text-end">
            <tbody>
              <tr>
                <td className="font-bold">Subtotal:</td>
                <td className="text-gray-400">16.550.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddInvoice;
