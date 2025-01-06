"use client";

import { useState } from "react";
import Image from "next/image";

export const FormSection = ({ blok: { title } }: any) => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
      } else {
        setSent(false);
      }
    } catch (error) {
      console.error("Error sending message.", error);
    }
  };
  return (
    <div className="py-10 lg:py-32" id="form">
      <div className="px-5 lg:px-0 lg:max-w-[80%] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20  mx-auto">
        <div className="h-[300px] lg:h-[700px] w-full relative">
          <Image
            src="https://a.storyblok.com/f/318037/3648x5472/cec9880050/contact.jpg"
            fill
            alt="contact"
            className="object-cover rounded-xl"
          />
        </div>
        {sent ? (
          <div>
            Tack för ditt meddelande, vi återkommer till dig så fort som
            möjligt!
          </div>
        ) : (
          <form className="form w-full" onSubmit={handleButtonClick}>
            <h4 className="text-md uppercase lg:max-w-[60%] font-bold tracking-wider pb-5 text-[#3d52a0]">
              {title}
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Namn
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="w-full"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                E-post
              </label>
              <input
                id="email"
                name="email"
                className="w-full"
                type="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Meddelande
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Vilka dagar och tider passar er bäst?"
                onChange={handleChange}
                value={formData.message}
                name="message"
              />
            </div>
            <div className="flex items-center gap-2">
              <input id="terms" type="checkbox" className="h-[30px] checkbox" />
              <label
                htmlFor="terms"
                className="terms flex flex-col text-gray-600"
              >
                Jag godkänner att ni hanterar mina personuppgifter enligt ovan.
              </label>
            </div>
            <div>
              <button className="button mt-5">Skicka</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
