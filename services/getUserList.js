import axios from "axios";

class User {
  constructor() {
    this.baseURl = "https://629f52338b939d3dc29519e3.mockapi.io/api/challenge";
  }

  onError = error => {
    const {
      response: { data },
    } = error;

    return data.error.message;
  };

  async saveUser(user) {
    const form = new FormData();

    const userData = {
      user: JSON.stringify(user),
    };

    Object.keys(userData).forEach(val => form.append(val, userData[val]));

    try {
      const res = await axios.post(
        `${this.BASE_URL}/user`,
        form,
        this.axiosRequest()
      );
      const json = res.data;

      return json;
    } catch {
      return this.onError;
    }
  }
  async searchPersonList(id) {
    try {
      const res = await axios.get(
        `${this.BASE_URL}/user/${id}`,
        this.axiosRequest()
      );
      const json = res.data;

      return json;
    } catch {
      return this.onError;
    }
  }

  axiosRequest() {
    return {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
  }
}

export default User;
