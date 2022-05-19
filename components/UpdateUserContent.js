import React, { useState, useEffect } from "react";
import CTAButton from "./CTAButton";
import RhService from "../services/RhService";
import Swal from "sweetalert2";
import route from "next/router";

function UpdateUserContent({ _id }) {
  const [data, setData] = useState({});
  const [image, setImage] = useState();
  const [rhs, setRhs] = useState([]);
  const getById = () => {
    RhService.getById()
      .then((res) => {
        console.log(res);
        setRhs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getById();
  }, []);

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("firstname", data.firstname);
    form.append("lastname", data.lastname);
    form.append("email", data.email);
    form.append("image", data.image);

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: "Don't save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        route.push("/Users/UserList");
        RhService.create(form)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const handleImageChange = (e, fn) => {
    fn(e.target.files[0]);
    // markInputAsTrue(e.target.id);
  };

  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div>ooo</div>
    </div>
  );
}

export default UpdateUserContent