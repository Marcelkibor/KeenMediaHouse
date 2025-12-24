export const PostBookingData = async (data) => {
    try {
        const requestBody =data;
        const BaseUrl = import.meta.env.VITE_BASE_URL;
           const response = await fetch(`${BaseUrl}/api/create-booking`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
        
    }
    catch (error) {
        console.error("Error posting booking data:", error);
    }
}