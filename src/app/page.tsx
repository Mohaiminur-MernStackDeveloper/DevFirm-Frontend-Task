import { AiOutlinePlusCircle } from "react-icons/ai";
import Table from "./Reuseablecomponents/Table";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Invoices</h1>
          <p className="text-xs text-gray-500">Invoices</p>
        </div>
        <button className="flex justify-center items-center gap-2 text-white bg-primary px-5 py-2 rounded-full text-sm"><AiOutlinePlusCircle/> Add Invoice</button>
      </div>
      <div className="mt-5 bg-white p-5 rounded-md">
        <Table/>
      </div>
    </div>
  );
}
