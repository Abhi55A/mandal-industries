"use client";

import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f6f2] text-[#172019]">

      {/* HEADER */}
      <header className="border-b border-[#dfe3dc] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#172019] font-bold text-[#c9ef45]">
              MI
            </div>

            <div>
              <h1 className="text-lg font-extrabold">
                Mandal Industries
              </h1>

              <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                Industrial Trading & Supply
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">

            <a
              href="#"
              className="text-[#65702f] transition hover:text-[#172019]"
            >
              Home
            </a>

            <a
              href="#products"
              className="transition hover:text-[#65702f]"
            >
              Products
            </a>

            <a
              href="#about"
              className="transition hover:text-[#65702f]"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#65702f]"
            >
              Contact
            </a>

            <a
              href="/admin-login"
              className="rounded-lg border border-[#172019] px-4 py-2.5 font-bold text-[#172019] transition hover:bg-[#172019] hover:text-white"
            >
              Admin Login
            </a>

            <a
              href="#contact"
              className="rounded-lg bg-[#172019] px-5 py-3 font-bold text-white transition hover:bg-[#28372c]"
            >
              Get a Quote
            </a>

          </nav>

        </div>
      </header>


      {/* HERO */}
      <section className="overflow-hidden">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">

          <div>

            <p className="mb-5 text-xs font-extrabold uppercase tracking-[3px] text-[#718044]">
              Industrial Trading & Supply
            </p>

            <h2 className="text-5xl font-extrabold leading-[1.05] tracking-[-3px] sm:text-6xl lg:text-7xl">

              Reliable Industrial Products.

              <span className="mt-3 block text-[#68752f]">
                Built Around Your Requirement.
              </span>

            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Mandal Industries supplies wood charcoal, coal, biomass,
              briquettes and selected industrial materials with dependable
              sourcing, competitive pricing and timely delivery.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#contact"
                className="rounded-lg bg-[#172019] px-7 py-4 text-center font-bold text-white transition hover:bg-[#28372c]"
              >
                Request a Quote →
              </a>

              <a
                href="#products"
                className="rounded-lg border border-[#172019] px-7 py-4 text-center font-bold transition hover:bg-[#172019] hover:text-white"
              >
                Explore Products
              </a>

            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-xs font-bold text-gray-500">
              <span>✓ Bulk Supply</span>
              <span>✓ B2B Trading</span>
              <span>✓ Requirement-Based Sourcing</span>
            </div>

          </div>


          {/* HERO IMAGE AREA */}
          <div className="relative min-h-[430px] overflow-hidden rounded-3xl bg-[#202a22] p-7 shadow-2xl">

            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[3px] text-gray-300">

              <span>Mandal Industries</span>

              <span className="h-2 w-2 rounded-full bg-[#c9ef45]" />

            </div>

            <div className="absolute inset-20 rounded-3xl bg-gradient-to-br from-[#56634b] via-[#29332a] to-[#111711]">

              <div className="absolute left-[15%] top-[45%] h-24 w-32 rotate-12 rounded-[50%] bg-[#0d110e] shadow-2xl" />

              <div className="absolute right-[8%] top-[25%] h-28 w-40 -rotate-12 rounded-[50%] bg-[#151b16] shadow-2xl" />

              <div className="absolute bottom-[12%] right-[28%] h-20 w-32 rotate-6 rounded-[50%] bg-[#101511] shadow-2xl" />

            </div>

            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between border-t border-gray-600 pt-5">

              <span className="text-[10px] uppercase tracking-[2px] text-gray-400">
                Industrial Supply
              </span>

              <span className="font-bold text-white">
                Fuel • Materials • Trading
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* BUSINESS HIGHLIGHTS */}
      <section className="border-y border-[#dfe3dc] bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

          <div className="border-b border-r border-[#dfe3dc] px-6 py-7">
            <div className="text-2xl font-extrabold">01</div>
            <div className="text-xs text-gray-500">
              Single-point sourcing
            </div>
          </div>

          <div className="border-b border-[#dfe3dc] px-6 py-7 lg:border-r">
            <div className="text-2xl font-extrabold">02</div>
            <div className="text-xs text-gray-500">
              Bulk & recurring orders
            </div>
          </div>

          <div className="border-r border-[#dfe3dc] px-6 py-7">
            <div className="text-2xl font-extrabold">03</div>
            <div className="text-xs text-gray-500">
              Flexible product sourcing
            </div>
          </div>

          <div className="px-6 py-7">
            <div className="text-2xl font-extrabold">04</div>
            <div className="text-xs text-gray-500">
              Business-focused service
            </div>
          </div>

        </div>

      </section>


      {/* PRODUCTS */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-28"
      >

        <div className="mb-12">

          <p className="text-xs font-extrabold uppercase tracking-[3px] text-[#718044]">
            Our Products
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-2px] sm:text-5xl">
            Industrial products,
            <br />
            sourced with purpose.
          </h2>

        </div>


        {/* WOOD CHARCOAL */}
        <div className="overflow-hidden rounded-3xl border border-[#dfe3dc] bg-white shadow-lg">

          <div className="grid lg:grid-cols-2">

            <div className="min-h-[450px] bg-[#202a22]">

              <img
                src="/images/charcoal.png"
                alt="Mandal Industries Wood Charcoal"
                className="h-full w-full object-cover"
              />

            </div>


            <div className="p-8 sm:p-12">

              <p className="text-xs font-extrabold uppercase tracking-[3px] text-[#718044]">
                Featured Product
              </p>

              <h3 className="mt-4 text-4xl font-extrabold">
                Wood Charcoal
              </h3>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Mandal Industries supplies wood charcoal for industrial and
                commercial applications. Bulk supply is available according
                to customer requirement, specification and delivery location.
              </p>


              {/* SPECIFICATIONS */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#dfe3dc]">

                <div className="bg-[#f5f6f2] px-5 py-4">

                  <h4 className="font-extrabold">
                    Product Specifications
                  </h4>

                </div>

                <div>

                  <div className="flex justify-between border-t border-[#dfe3dc] px-5 py-4">
                    <span className="text-sm font-semibold text-gray-500">
                      Fixed Carbon
                    </span>

                    <span className="text-sm font-bold">
                      70–85%
                    </span>
                  </div>

                  <div className="flex justify-between border-t border-[#dfe3dc] px-5 py-4">
                    <span className="text-sm font-semibold text-gray-500">
                      Moisture
                    </span>

                    <span className="text-sm font-bold">
                      5–8%
                    </span>
                  </div>

                  <div className="flex justify-between border-t border-[#dfe3dc] px-5 py-4">
                    <span className="text-sm font-semibold text-gray-500">
                      Ash Content
                    </span>

                    <span className="text-sm font-bold">
                      3–8%
                    </span>
                  </div>

                  <div className="flex justify-between border-t border-[#dfe3dc] px-5 py-4">
                    <span className="text-sm font-semibold text-gray-500">
                      Calorific Value
                    </span>

                    <span className="text-sm font-bold">
                      6,500–7,500 kcal/kg
                    </span>
                  </div>

                  <div className="flex justify-between border-t border-[#dfe3dc] px-5 py-4">
                    <span className="text-sm font-semibold text-gray-500">
                      Size
                    </span>

                    <span className="text-sm font-bold">
                      20–100 mm / Customized
                    </span>
                  </div>

                </div>

              </div>


              {/* APPLICATIONS */}
              <div className="mt-7">

                <h4 className="text-sm font-extrabold uppercase tracking-[2px]">
                  Applications
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">

                  <span className="rounded-full bg-[#f5f6f2] px-4 py-2 text-xs font-semibold">
                    Industrial Boiler
                  </span>

                  <span className="rounded-full bg-[#f5f6f2] px-4 py-2 text-xs font-semibold">
                    Food Processing
                  </span>

                  <span className="rounded-full bg-[#f5f6f2] px-4 py-2 text-xs font-semibold">
                    Metal Heating
                  </span>

                  <span className="rounded-full bg-[#f5f6f2] px-4 py-2 text-xs font-semibold">
                    Commercial Use
                  </span>

                </div>

              </div>


              {/* PRODUCT BUTTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#contact"
                  className="rounded-lg bg-[#172019] px-6 py-4 text-center font-bold text-white transition hover:bg-[#28372c]"
                >
                  Request Bulk Quote →
                </a>


                <a
                  href="https://wa.me/919547046299?text=Hello%20Mandal%20Industries,%20I%20would%20like%20to%20discuss%20a%20bulk%20Wood%20Charcoal%20requirement."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-extrabold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-lg"
                >

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#25D366]">

                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.54 0 .24 5.3.24 11.81c0 2.08.54 4.1 1.56 5.9L.15 24l6.43-1.69a11.8 11.8 0 0 0 5.47 1.35h.01c6.51 0 11.81-5.3 11.81-11.81 0-3.15-1.23-6.12-3.35-8.37ZM12.06 21.6h-.01a9.8 9.8 0 0 1-5-1.36l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.78 9.78 0 0 1-1.5-5.12C2.16 6.4 6.6 1.96 12.06 1.96c2.65 0 5.14 1.03 7.02 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.46-4.44 9.9-9.92 9.9Zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                    </svg>

                  </span>

                  Chat on WhatsApp →

                </a>

              </div>

              <p className="mt-2 text-xs text-gray-400">
                +91 95470 46299
              </p>

            </div>

          </div>

        </div>


        {/* OTHER PRODUCTS */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-[#dfe3dc] bg-white p-7">

            <span className="text-xs font-bold text-gray-400">
              02
            </span>

            <h3 className="mt-10 text-2xl font-extrabold">
              Coal & Solid Fuels
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Industrial fuel sourcing based on quality, quantity and
              delivery requirements.
            </p>

            <a
              href="#contact"
              className="mt-6 block text-xs font-extrabold"
            >
              Enquire →
            </a>

          </div>


          <div className="rounded-2xl border border-[#dfe3dc] bg-white p-7">

            <span className="text-xs font-bold text-gray-400">
              03
            </span>

            <h3 className="mt-10 text-2xl font-extrabold">
              Biomass & Briquettes
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Alternative solid-fuel products for industrial users.
            </p>

            <a
              href="#contact"
              className="mt-6 block text-xs font-extrabold"
            >
              Enquire →
            </a>

          </div>


          <div className="rounded-2xl border border-[#dfe3dc] bg-white p-7">

            <span className="text-xs font-bold text-gray-400">
              04
            </span>

            <h3 className="mt-10 text-2xl font-extrabold">
              Industrial Materials
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Selected industrial products sourced according to customer
              requirements.
            </p>

            <a
              href="#contact"
              className="mt-6 block text-xs font-extrabold"
            >
              Enquire →
            </a>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#172019] text-white"
      >

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2">

          <div>

            <p className="text-xs font-extrabold uppercase tracking-[3px] text-[#c9ef45]">
              Why Mandal Industries
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-[-2px] sm:text-5xl">
              A trading partner focused on your requirement.
            </h2>

          </div>


          <div className="space-y-7">

            <div className="border-b border-gray-700 pb-6">

              <span className="text-[#c9ef45]">
                01
              </span>

              <h3 className="mt-2 font-bold">
                Requirement-first sourcing
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                We work around quantity, specification, location and
                delivery requirements.
              </p>

            </div>


            <div className="border-b border-gray-700 pb-6">

              <span className="text-[#c9ef45]">
                02
              </span>

              <h3 className="mt-2 font-bold">
                Competitive procurement
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                We work with suppliers to develop practical commercial
                solutions.
              </p>

            </div>


            <div className="border-b border-gray-700 pb-6">

              <span className="text-[#c9ef45]">
                03
              </span>

              <h3 className="mt-2 font-bold">
                Direct B2B communication
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Clear communication from enquiry and quotation through
                delivery coordination.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="text-xs font-extrabold uppercase tracking-[3px] text-[#718044]">
              Bulk Supply Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-[-2px] sm:text-5xl">
              Tell us what you need.
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600">
              Share your product requirement, quantity and delivery location.
              Our team will review your enquiry and get back to you.
            </p>

          </div>


          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

            {/* FORM */}
            <div className="rounded-3xl border border-[#dfe3dc] bg-white p-7 shadow-sm sm:p-10">

              <h3 className="text-2xl font-extrabold">
                Request a Bulk Quote
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Please provide your requirement details.
              </p>


              <form
                id="enquiry-form"
                className="mt-8 grid gap-5 sm:grid-cols-2"
                onSubmit={async (e) => {

                  e.preventDefault();

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const { error } = await supabase
                    .from("enquiries")
                    .insert({
                      name: formData.get("name"),
                      company: formData.get("company"),
                      mobile: formData.get("mobile"),
                      email: formData.get("email"),
                      product: formData.get("product"),
                      quantity: Number(formData.get("quantity")),
                      delivery_location: formData.get("location"),
                      message: formData.get("message"),
                    });

                  if (error) {

                    console.error(
                      "ENQUIRY ERROR:",
                      error
                    );

                    alert(
                      "Enquiry could not be submitted. Please try again."
                    );

                    return;
                  }

                  alert(
                    "Thank you! Your enquiry has been submitted successfully."
                  );

                  form.reset();

                }}
              >


                {/* NAME */}
                <div>

                  <label className="text-sm font-bold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="mt-2 w-full rounded-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                  />

                </div>


                {/* COMPANY */}
                <div>

                  <label className="text-sm font-bold">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                  />

                </div>


                {/* MOBILE */}
                <div>

                  <label className="text-sm font-bold">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="mt-2 w-full rounded-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                  />

                </div>


                {/* EMAIL */}
                <div>

                  <label className="text-sm font-bold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="company@example.com"
                    className="mt-2 w-full rounded-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                  />

                </div>


                {/* PRODUCT */}
                <div>

                  <label className="text-sm font-bold">
                    Product / Material
                  </label>

                  <select
                    name="product"
                    required
                    className="mt-2 w-full rounded-lg border border-[#dfe3dc] bg-white px-4 py-3 outline-none focus:border-[#718044]"
                  >

                    <option value="">
                      Select Product
                    </option>

                    <option value="Wood Charcoal">
                      Wood Charcoal
                    </option>

                    <option value="Coal & Solid Fuels">
                      Coal & Solid Fuels
                    </option>

                    <option value="Biomass & Briquettes">
                      Biomass & Briquettes
                    </option>

                    <option value="Industrial Materials">
                      Industrial Materials
                    </option>

                  </select>

                </div>


                {/* QUANTITY */}
                <div>

                  <label className="text-sm font-bold">
                    Required Quantity
                  </label>

                  <div className="mt-2 flex">

                    <input
                      type="number"
                      name="quantity"
                      placeholder="50"
                      required
                      min="1"
                      className="w-full rounded-l-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                    />

                    <span className="flex items-center rounded-r-lg border border-l-0 border-[#dfe3dc] bg-[#f5f6f2] px-4 text-sm font-bold">
                      MT
                    </span>

                  </div>

                </div>


                {/* SPECIFICATION */}
                <div>

                  <label className="text-sm font-bold">
                    Quality / Specification
                  </label>

                  <input
                    type="text"
                    name="specification"
                    placeholder="GCV, size, moisture, ash, etc."
                    className="mt-2 w-full rounded-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                  />

                </div>


                {/* DELIVERY SCHEDULE */}
                <div>

                  <label className="text-sm font-bold">
                    Expected Delivery Schedule
                  </label>

                  <input
                    type="text"
                    name="delivery_schedule"
                    placeholder="Immediate / Within 7 days"
                    className="mt-2 w-full rounded-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                  />

                </div>


                {/* LOCATION */}
                <div>

                  <label className="text-sm font-bold">
                    Delivery Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    placeholder="City / District / State"
                    required
                    className="mt-2 w-full rounded-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                  />

                </div>


                {/* ADDRESS */}
                <div className="sm:col-span-2">

                  <label className="text-sm font-bold">
                    Full Address
                  </label>

                  <textarea
                    name="address"
                    rows={3}
                    placeholder="Full delivery / billing address"
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                  />

                </div>


                {/* MESSAGE */}
                <div className="sm:col-span-2">

                  <label className="text-sm font-bold">
                    Requirement / Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your quality, size, delivery schedule or other requirements..."
                    className="mt-2 w-full resize-none rounded-lg border border-[#dfe3dc] px-4 py-3 outline-none focus:border-[#718044]"
                  />

                </div>


                {/* ACTION BUTTONS */}
                <div className="sm:col-span-2 grid gap-3 sm:grid-cols-2">

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="rounded-lg bg-[#172019] px-6 py-4 font-bold text-white transition hover:bg-[#28372c]"
                  >
                    Submit Enquiry →
                  </button>


                  {/* WHATSAPP */}
                  <button
                    type="button"
                    onClick={() => {

                      const form = document.getElementById(
                        "enquiry-form"
                      ) as HTMLFormElement;

                      if (!form.checkValidity()) {
                        form.reportValidity();
                        return;
                      }

                      const formData = new FormData(form);

                      const name = String(
                        formData.get("name") || ""
                      );

                      const company = String(
                        formData.get("company") || ""
                      );

                      const mobile = String(
                        formData.get("mobile") || ""
                      );

                      const email = String(
                        formData.get("email") || ""
                      );

                      const product = String(
                        formData.get("product") || ""
                      );

                      const quantity = String(
                        formData.get("quantity") || ""
                      );

                      const specification = String(
                        formData.get("specification") || ""
                      );

                      const deliverySchedule = String(
                        formData.get("delivery_schedule") || ""
                      );

                      const location = String(
                        formData.get("location") || ""
                      );

                      const address = String(
                        formData.get("address") || ""
                      );

                      const message = String(
                        formData.get("message") || ""
                      );


                      const whatsappMessage = `
Hello Mandal Industries,

I would like to submit a bulk supply enquiry.

━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${name}

Company: ${company || "N/A"}

Mobile: ${mobile}

Email: ${email || "N/A"}


━━━━━━━━━━━━━━━━━━
REQUIREMENT DETAILS
━━━━━━━━━━━━━━━━━━

Product / Material:
${product}

Required Quantity:
${quantity} MT

Quality / Specification:
${specification || "Not specified"}

Expected Delivery:
${deliverySchedule || "Not specified"}


━━━━━━━━━━━━━━━━━━
DELIVERY DETAILS
━━━━━━━━━━━━━━━━━━

Delivery Location:
${location}

Full Address:
${address}


━━━━━━━━━━━━━━━━━━
ADDITIONAL REQUIREMENT
━━━━━━━━━━━━━━━━━━

${message || "No additional message"}


Please share your best quotation, availability and delivery terms.

Thank you.

Mandal Industries
                      `.trim();


                      const whatsappURL =
                        "https://wa.me/919547046299?text=" +
                        encodeURIComponent(
                          whatsappMessage
                        );


                      window.open(
                        whatsappURL,
                        "_blank",
                        "noopener,noreferrer"
                      );

                    }}
                    className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-lg"
                  >

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#25D366]">

                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-current"
                        aria-hidden="true"
                      >

                        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.54 0 .24 5.3.24 11.81c0 2.08.54 4.1 1.56 5.9L.15 24l6.43-1.69a11.8 11.8 0 0 0 5.47 1.35h.01c6.51 0 11.81-5.3 11.81-11.81 0-3.15-1.23-6.12-3.35-8.37ZM12.06 21.6h-.01a9.8 9.8 0 0 1-5-1.36l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.78 9.78 0 0 1-1.5-5.12C2.16 6.4 6.6 1.96 12.06 1.96c2.65 0 5.14 1.03 7.02 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.46-4.44 9.9-9.92 9.9Zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />

                      </svg>

                    </span>

                    Send WhatsApp Enquiry →

                  </button>

                </div>

              </form>

            </div>


            {/* CONTACT INFORMATION */}
            <div className="rounded-3xl bg-[#172019] p-8 text-white sm:p-10">

              <p className="text-xs font-extrabold uppercase tracking-[3px] text-[#c9ef45]">
                Mandal Industries
              </p>

              <h3 className="mt-5 text-3xl font-extrabold">
                Let's discuss your requirement.
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300">
                We supply industrial fuels and selected materials for
                bulk and recurring business requirements.
              </p>


              <div className="mt-10 space-y-6">

                {/* EMAIL */}
                <div>

                  <p className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
                    Email
                  </p>

                  <a
  href="mailto:mandalengineering27@gmail.com"
  className="mt-2 block font-semibold text-[#c9ef45]"
>
  mandalengineering27@gmail.com
</a>

                </div>


                {/* WHATSAPP */}
                <div>

                  <p className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/919547046299"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 font-semibold text-[#c9ef45]"
                  >
                    Chat on WhatsApp
                    <span>→</span>
                  </a>

                  <p className="mt-1 text-xs text-gray-400">
                    +91 95470 46299
                  </p>

                </div>


                {/* BULK ORDERS */}
                <div>

                  <p className="text-xs font-bold uppercase tracking-[2px] text-gray-400">
                    Bulk Orders
                  </p>

                  <p className="mt-2 text-sm text-gray-300">
                    Bulk and recurring supply enquiries are welcome.
                  </p>

                </div>

              </div>


              {/* INFORMATION BOX */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">

                <p className="text-sm font-bold">
                  Typical enquiry information
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-300">

                  <li>• Product / Material</li>
                  <li>• Required Quantity</li>
                  <li>• Quality / Specification</li>
                  <li>• Delivery Location</li>
                  <li>• Full Address</li>
                  <li>• Expected Delivery Schedule</li>
                  <li>• Customer & Company Details</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#111812] px-6 py-12 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c9ef45] font-bold text-[#172019]">
                MI
              </div>

              <div>

                <div className="font-extrabold">
                  Mandal Industries
                </div>

                <div className="text-xs text-gray-500">
                  Industrial Trading & Supply
                </div>

              </div>

            </div>

            <p className="mt-5 text-xs text-gray-500">
              © 2026 Mandal Industries. All rights reserved.
            </p>

          </div>


          <div className="flex gap-8 text-sm text-gray-400">

            <a href="#products">
              Products
            </a>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

            <a href="/admin-login">
              Admin
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
