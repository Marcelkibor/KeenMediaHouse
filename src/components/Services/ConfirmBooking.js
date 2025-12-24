export const confirmBooking = async (bookingId) => {
  try {
    const BaseUrl = import.meta.env.VITE_BASE_URL;
   const response = await fetch(`${BaseUrl}/api/update-booking/${bookingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Confirmed" }),
    });

    if (response.ok) {
    window.location.reload();
      return true;
    } else {
      alert("Failed to confirm booking.");
    }
  } catch (err) {
    console.error("Error confirming booking:", err);
    alert("Network error. Please try again.");
  }
};