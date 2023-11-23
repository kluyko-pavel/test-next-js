import { CALLBACK_URL } from "@/constants";

export const CallBackService = {
  async sendUserData(formData: URLSearchParams, push: any) {
    const resp: Response = await fetch(CALLBACK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });
    if (resp.ok) {
      push("/success-sending");
    } else {
      push("/error-sending");
    }
  },
};
