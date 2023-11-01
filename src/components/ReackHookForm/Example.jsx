// import { useForm } from "react-hook-form";
// import "./example.css";

// function LoginForm() {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="hook">
//       <label className="hook__text">name</label>
//       <input
//         type="name"
//         className="hook__input"
//         {...register("name", { required: true, pattern: /^\S+@\S+$/i })}
//       />
     

//       <label className="hook__text">description</label>
//       <input
//         type="description"
//         className="hook__input"
//         {...register("password", { required: true })}
//       />

//       <label className="hook__text">category</label>
//       <input
//         type="category"
//         className="hook__input"
//         {...register("category", { required: true })}
//        />

      
// <label className="hook__text">quantity</label>
//       <input
//         type="quantity"
//         className="hook__input"
//         {...register("quantity", { required: true })}
//        />

// <label className="hook__text">price</label>
//       <input
//         type="price"
//         className="hook__input"
//         {...register("price", { required: true })}
//        />
// <div className="button-group">
//       <button className="button" type="submit">

//         Submit
//       </button>
      
//       <button className="button" type="cancel">

//         cancel
//       </button>
//       </div>
//     </form>
//   );
// }

// export default LoginForm;
import React, { useState } from "react";
import "./multiple.css";

export default function  LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
     `name: ${formData.name}, description: ${formData.description}, category: ${formData.category}, quantity: ${formData.quantity}, price: ${formData.price}`);
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <label className="multiple__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="name">
        description:
      </label>
      <input
        type="text"
        id="description"
        className="multiple__input"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

<label className="multiple__text" htmlFor="name">
        category:
      </label>
      <input
        type="text"
        id="category"
        className="multiple__input"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
      <label className="multiple__text" htmlFor="name">
        quantity:
      </label>
      <input
        type="text"
        id="quantity"
        className="multiple__input"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />
      <label className="multiple__text" htmlFor="name">
        price:
      </label>
      <input
        type="text"
        id="price"
        className="multiple__input"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      

      {/* <button className="multiple__button" type="submit">
        Submit
      </button> */}
      <div className="button-group">
    <button className="button" type="submit">

     Submit
    </button>
      
    <button className="button" type="cancel">

    cancel
    </button>
    </div>
    </form>
  );
}
