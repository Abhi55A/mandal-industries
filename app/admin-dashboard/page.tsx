"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type Enquiry = {
  id: number;
  name: string;
  company: string | null;
  mobile: string;
  email: string | null;
  product: string;
  quantity: number;
  delivery_location: string;
  message: string | null;
  created_at: string;
};

export default function AdminDashboard() {
  const router = useRouter();

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  const [selectedEnquiry, setSelectedEnquiry] =
    useState<Enquiry | null>(null);

  const [deletingId, setDeletingId] = useState<number | null>(null);

  // ==============================
  // CHECK ADMIN LOGIN
  // ==============================

  useEffect(() => {
    checkAdmin();
  }, []);

  async function checkAdmin() {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log("ADMIN SESSION:", session);

      if (!session) {
        router.replace("/admin-login");
        return;
      }

      setCheckingAuth(false);

      await fetchEnquiries();
    } catch (error) {
      console.error("AUTH CHECK ERROR:", error);

      router.replace("/admin-login");
    }
  }

  // ==============================
  // FETCH ENQUIRIES
  // ==============================

  async function fetchEnquiries() {
    setLoading(true);

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("ENQUIRY ERROR:", error);

      alert("Could not load enquiries.");

      setLoading(false);

      return;
    }

    console.log("ENQUIRIES:", data);

    setEnquiries(data || []);

    setLoading(false);
  }

  // ==============================
  // CHANGE ADMIN PASSWORD
  // ==============================

  async function changePassword() {
    if (!newPassword || !confirmPassword) {
      alert("Please enter the new password.");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setChangingPassword(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        console.error("PASSWORD CHANGE ERROR:", error);

        alert(
          "Password could not be changed: " + error.message
        );

        return;
      }

      setNewPassword("");
      setConfirmPassword("");

      alert("Admin password changed successfully.");
    } catch (error) {
      console.error(
        "PASSWORD CHANGE EXCEPTION:",
        error
      );

      alert(
        "Something went wrong while changing the password."
      );
    } finally {
      setChangingPassword(false);
    }
  }

  // ==============================
  // DELETE ENQUIRY
  // ==============================

  async function deleteEnquiry(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(id);

    try {
      const { error } = await supabase
        .from("enquiries")
        .delete()
        .eq("id", id);

      if (error) {
        console.error(
          "DELETE ENQUIRY ERROR:",
          error
        );

        alert(
          "Enquiry could not be deleted: " +
            error.message
        );

        return;
      }

      setEnquiries((current) =>
        current.filter(
          (enquiry) => enquiry.id !== id
        )
      );

      if (
        selectedEnquiry &&
        selectedEnquiry.id === id
      ) {
        setSelectedEnquiry(null);
      }

      alert("Enquiry deleted successfully.");
    } catch (error) {
      console.error(
        "DELETE EXCEPTION:",
        error
      );

      alert(
        "Something went wrong while deleting the enquiry."
      );
    } finally {
      setDeletingId(null);
    }
  }

  // ==============================
  // LOGOUT
  // ==============================

  async function logout() {
    await supabase.auth.signOut();

    router.replace("/admin-login");
  }

  // ==============================
  // WHATSAPP
  // ==============================

  function openWhatsApp(mobile: string) {
    const cleanNumber = mobile.replace(/\D/g, "");

    let whatsappNumber = cleanNumber;

    if (
      whatsappNumber.length === 10 &&
      whatsappNumber.startsWith("6") ||
      whatsappNumber.length === 10 &&
      whatsappNumber.startsWith("7") ||
      whatsappNumber.length === 10 &&
      whatsappNumber.startsWith("8") ||
      whatsappNumber.length === 10 &&
      whatsappNumber.startsWith("9")
    ) {
      whatsappNumber = "91" + whatsappNumber;
    }

    window.open(
      `https://wa.me/${whatsappNumber}`,
      "_blank"
    );
  }

  // ==============================
  // CALL CUSTOMER
  // ==============================

  function callCustomer(mobile: string) {
    window.location.href = `tel:${mobile}`;
  }

  // ==============================
  // CHECKING AUTH SCREEN
  // ==============================

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f6f2] text-[#172019]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#dfe3dc] border-t-[#172019]" />

          <p className="mt-4 text-sm font-bold text-gray-500">
            Checking admin access...
          </p>
        </div>
      </main>
    );
  }

  // ==============================
  // MAIN DASHBOARD
  // ==============================

  return (
    <main className="min-h-screen bg-[#f5f6f2] text-[#172019]">

      {/* ==========================================
          HEADER
      ========================================== */}

      <header className="border-b border-[#dfe3dc] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[3px] text-[#718044]">
              Mandal Industries
            </p>

            <h1 className="mt-1 text-2xl font-extrabold">
              Enquiry Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">

            {/* REFRESH */}

            <button
              onClick={fetchEnquiries}
              disabled={loading}
              className="rounded-lg bg-[#172019] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#28372c] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Loading..." : "Refresh"}
            </button>

            {/* LOGOUT */}

            <button
              onClick={logout}
              className="rounded-lg border border-[#172019] px-5 py-3 text-sm font-bold text-[#172019] transition hover:bg-[#172019] hover:text-white"
            >
              Logout
            </button>

          </div>

        </div>
      </header>


      {/* ==========================================
          CONTENT
      ========================================== */}

      <section className="mx-auto max-w-7xl px-6 py-10">


        {/* ==========================================
            DASHBOARD SUMMARY
        ========================================== */}

        <div className="mb-8 grid gap-5 sm:grid-cols-3">

          {/* TOTAL */}

          <div className="rounded-2xl border border-[#dfe3dc] bg-white p-6 shadow-sm">

            <p className="text-sm font-bold text-gray-500">
              Total Enquiries
            </p>

            <p className="mt-2 text-4xl font-extrabold">
              {enquiries.length}
            </p>

          </div>


          {/* SHOWING */}

          <div className="rounded-2xl border border-[#dfe3dc] bg-white p-6 shadow-sm">

            <p className="text-sm font-bold text-gray-500">
              Showing
            </p>

            <p className="mt-2 text-4xl font-extrabold">
              {enquiries.length}
            </p>

          </div>


          {/* STATUS */}

          <div className="rounded-2xl border border-[#dfe3dc] bg-white p-6 shadow-sm">

            <p className="text-sm font-bold text-gray-500">
              Dashboard Status
            </p>

            <p className="mt-3 flex items-center gap-2 text-lg font-extrabold">

              <span className="h-3 w-3 rounded-full bg-green-500" />

              Active

            </p>

          </div>

        </div>


        {/* ==========================================
            ADMIN SETTINGS
        ========================================== */}

        <div className="mb-8 rounded-2xl border border-[#dfe3dc] bg-white p-6 shadow-sm">

          <h2 className="text-xl font-extrabold">
            Admin Settings
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Change your Supabase admin login password.
          </p>


          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            {/* NEW PASSWORD */}

            <div>

              <label className="text-sm font-bold">
                New Password
              </label>

              <input
                type="password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(e.target.value)
                }
                placeholder="Enter new password"
                className="mt-2 w-full rounded-lg border border-[#dfe3dc] bg-white px-4 py-3 text-[#172019] outline-none placeholder:text-gray-400 focus:border-[#718044]"
              />

            </div>


            {/* CONFIRM PASSWORD */}

            <div>

              <label className="text-sm font-bold">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Confirm new password"
                className="mt-2 w-full rounded-lg border border-[#dfe3dc] bg-white px-4 py-3 text-[#172019] outline-none placeholder:text-gray-400 focus:border-[#718044]"
              />

            </div>

          </div>


          {/* CHANGE PASSWORD */}

          <button
            onClick={changePassword}
            disabled={changingPassword}
            className="mt-5 rounded-lg bg-[#172019] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#28372c] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {changingPassword
              ? "Changing Password..."
              : "Change Password"}
          </button>

        </div>


        {/* ==========================================
            CUSTOMER ENQUIRIES
        ========================================== */}

        <div className="overflow-hidden rounded-2xl border border-[#dfe3dc] bg-white shadow-sm">

          {/* TITLE */}

          <div className="border-b border-[#dfe3dc] px-6 py-5">

            <h2 className="text-xl font-extrabold">
              Customer Enquiries
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              All bulk supply enquiries received from the website.
            </p>

          </div>


          {/* TABLE */}

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1450px] text-left">

              {/* HEADER */}

              <thead className="bg-[#172019] text-white">

                <tr>

                  <th className="px-5 py-4 text-sm font-bold">
                    Date
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Customer
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Company
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Mobile
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Email
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Product
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Quantity
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Location
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Message
                  </th>

                  <th className="px-5 py-4 text-sm font-bold">
                    Actions
                  </th>

                </tr>

              </thead>


              {/* BODY */}

              <tbody>

                {/* LOADING */}

                {loading ? (

                  <tr>

                    <td
                      colSpan={10}
                      className="px-5 py-12 text-center text-gray-500"
                    >

                      <div className="flex flex-col items-center">

                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#dfe3dc] border-t-[#172019]" />

                        <p className="mt-3">
                          Loading enquiries...
                        </p>

                      </div>

                    </td>

                  </tr>

                ) : enquiries.length === 0 ? (

                  /* EMPTY */

                  <tr>

                    <td
                      colSpan={10}
                      className="px-5 py-12 text-center text-gray-500"
                    >

                      <div className="text-4xl">
                        📭
                      </div>

                      <p className="mt-3 font-bold">
                        No enquiries found.
                      </p>

                      <p className="mt-1 text-sm">
                        New customer enquiries will appear here.
                      </p>

                    </td>

                  </tr>

                ) : (

                  enquiries.map((enquiry) => (

                    <tr
                      key={enquiry.id}
                      className="border-t border-[#dfe3dc] transition hover:bg-[#f5f6f2]"
                    >

                      {/* DATE */}

                      <td className="whitespace-nowrap px-5 py-4 text-sm text-gray-600">
                        {new Date(
                          enquiry.created_at
                        ).toLocaleString("en-IN")}
                      </td>


                      {/* CUSTOMER */}

                      <td className="px-5 py-4 font-bold">
                        {enquiry.name}
                      </td>


                      {/* COMPANY */}

                      <td className="px-5 py-4 text-sm">
                        {enquiry.company || "-"}
                      </td>


                      {/* MOBILE */}

                      <td className="px-5 py-4 text-sm font-semibold">
                        {enquiry.mobile}
                      </td>


                      {/* EMAIL */}

                      <td className="px-5 py-4 text-sm">
                        {enquiry.email || "-"}
                      </td>


                      {/* PRODUCT */}

                      <td className="px-5 py-4 text-sm font-semibold">
                        {enquiry.product}
                      </td>


                      {/* QUANTITY */}

                      <td className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        {enquiry.quantity} MT
                      </td>


                      {/* LOCATION */}

                      <td className="px-5 py-4 text-sm">
                        {enquiry.delivery_location}
                      </td>


                      {/* MESSAGE */}

                      <td className="max-w-xs px-5 py-4 text-sm text-gray-600">

                        <div className="max-w-[220px] truncate">
                          {enquiry.message || "-"}
                        </div>

                      </td>


                      {/* ACTIONS */}

                      <td className="px-5 py-4">

                        <div className="flex flex-wrap gap-2">

                          {/* VIEW */}

                          <button
                            onClick={() =>
                              setSelectedEnquiry(
                                enquiry
                              )
                            }
                            className="rounded-lg border border-[#172019] px-3 py-2 text-xs font-bold text-[#172019] transition hover:bg-[#172019] hover:text-white"
                          >
                            View
                          </button>


                          {/* WHATSAPP */}

                          <button
                            onClick={() =>
                              openWhatsApp(
                                enquiry.mobile
                              )
                            }
                            className="rounded-lg bg-green-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-green-700"
                          >
                            WhatsApp
                          </button>


                          {/* CALL */}

                          <button
                            onClick={() =>
                              callCustomer(
                                enquiry.mobile
                              )
                            }
                            className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-700"
                          >
                            Call
                          </button>


                          {/* DELETE */}

                          <button
                            onClick={() =>
                              deleteEnquiry(
                                enquiry.id
                              )
                            }
                            disabled={
                              deletingId ===
                              enquiry.id
                            }
                            className="rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {deletingId ===
                            enquiry.id
                              ? "Deleting..."
                              : "Delete"}
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* ==========================================
          VIEW ENQUIRY MODAL
      ========================================== */}

      {selectedEnquiry && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={() =>
            setSelectedEnquiry(null)
          }
        >

          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-7 shadow-2xl sm:p-10"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* MODAL HEADER */}

            <div className="flex items-start justify-between border-b border-[#dfe3dc] pb-5">

              <div>

                <p className="text-xs font-extrabold uppercase tracking-[3px] text-[#718044]">
                  Customer Enquiry
                </p>

                <h2 className="mt-2 text-2xl font-extrabold">
                  {selectedEnquiry.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enquiry ID: #{selectedEnquiry.id}
                </p>

              </div>


              {/* CLOSE */}

              <button
                onClick={() =>
                  setSelectedEnquiry(null)
                }
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#dfe3dc] text-lg font-bold transition hover:bg-[#f5f6f2]"
              >
                ✕
              </button>

            </div>


            {/* CUSTOMER DETAILS */}

            <div className="mt-7 grid gap-5 sm:grid-cols-2">

              {/* NAME */}

              <div className="rounded-xl bg-[#f5f6f2] p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Customer
                </p>

                <p className="mt-1 font-bold">
                  {selectedEnquiry.name}
                </p>

              </div>


              {/* COMPANY */}

              <div className="rounded-xl bg-[#f5f6f2] p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Company
                </p>

                <p className="mt-1 font-bold">
                  {selectedEnquiry.company ||
                    "-"}
                </p>

              </div>


              {/* MOBILE */}

              <div className="rounded-xl bg-[#f5f6f2] p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Mobile
                </p>

                <p className="mt-1 font-bold">
                  {selectedEnquiry.mobile}
                </p>

              </div>


              {/* EMAIL */}

              <div className="rounded-xl bg-[#f5f6f2] p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Email
                </p>

                <p className="mt-1 break-all font-bold">
                  {selectedEnquiry.email ||
                    "-"}
                </p>

              </div>


              {/* PRODUCT */}

              <div className="rounded-xl bg-[#f5f6f2] p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Product
                </p>

                <p className="mt-1 font-bold">
                  {selectedEnquiry.product}
                </p>

              </div>


              {/* QUANTITY */}

              <div className="rounded-xl bg-[#f5f6f2] p-4">

                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Required Quantity
                </p>

                <p className="mt-1 font-bold">
                  {selectedEnquiry.quantity} MT
                </p>

              </div>


              {/* LOCATION */}

              <div className="rounded-xl bg-[#f5f6f2] p-4 sm:col-span-2">

                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Delivery Location
                </p>

                <p className="mt-1 font-bold">
                  {
                    selectedEnquiry.delivery_location
                  }
                </p>

              </div>

            </div>


            {/* MESSAGE */}

            <div className="mt-6">

              <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Requirement / Message
              </p>

              <div className="mt-2 rounded-xl border border-[#dfe3dc] bg-white p-5 text-sm leading-7 text-gray-700">
                {selectedEnquiry.message ||
                  "No message provided."}
              </div>

            </div>


            {/* DATE */}

            <div className="mt-6">

              <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Submitted
              </p>

              <p className="mt-1 text-sm text-gray-600">
                {new Date(
                  selectedEnquiry.created_at
                ).toLocaleString("en-IN")}
              </p>

            </div>


            {/* MODAL ACTIONS */}

            <div className="mt-7 flex flex-wrap gap-3">

              {/* WHATSAPP */}

              <button
                onClick={() =>
                  openWhatsApp(
                    selectedEnquiry.mobile
                  )
                }
                className="rounded-lg bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                WhatsApp Customer
              </button>


              {/* CALL */}

              <button
                onClick={() =>
                  callCustomer(
                    selectedEnquiry.mobile
                  )
                }
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Call Customer
              </button>


              {/* DELETE */}

              <button
                onClick={() =>
                  deleteEnquiry(
                    selectedEnquiry.id
                  )
                }
                disabled={
                  deletingId ===
                  selectedEnquiry.id
                }
                className="rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {deletingId ===
                selectedEnquiry.id
                  ? "Deleting..."
                  : "Delete Enquiry"}
              </button>


              {/* CLOSE */}

              <button
                onClick={() =>
                  setSelectedEnquiry(null)
                }
                className="ml-auto rounded-lg border border-[#172019] px-5 py-3 text-sm font-bold text-[#172019] transition hover:bg-[#172019] hover:text-white"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}