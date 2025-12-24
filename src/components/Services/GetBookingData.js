export const GetBookingData = async () => {
    try {
        const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`${BaseUrl}/api/get-booking`, {
            headers: {
                "Content-Type": "application/json", 
            },
            method: "GET",
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error("Error fetching booking data:", error);
    }
}