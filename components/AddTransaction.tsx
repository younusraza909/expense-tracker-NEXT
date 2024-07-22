"use client";

import addTransaction from "@/app/actions/addTransaction";

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    console.log("Hello Client");
    const { data, error } = await addTransaction(formData);

    if (error) {
      alert(error);
    } else {
      alert("Transaction added");
      console.log("data", data);
    }
  };

  return (
    <>
      <h3>Add Transaction</h3>
      {/* We are using client action here so it is basically a component that will be called by form */}
      {/* In new version of Next we can now use action on client and server both , in order to validate form we first hit the client action */}
      <form action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
