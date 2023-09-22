"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsDownload } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddInvoice = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive }: any = useDropzone({
    onDrop,
  });

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
            <label htmlFor="data" className="font-bold">Invoice Date</label>
            <DatePicker
            className="border px-5 py-2 text-sm rounded-full"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Date"
            />
          </div>
        </div>
        <div
          className="w-fit border border-dashed border-blue-500 p-5 rounded-md"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
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
  );
};

export default AddInvoice;
