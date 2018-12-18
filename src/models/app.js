import { getweatherByCode } from "../services/weather";
export default {
  namespace: "app",

  state: {
    text: "hello umi+dva",
    login: false,
    weather: {}
  },
  reducers: {
    setText(state) {
      return {
        ...state,
        text: "setted"
      };
    },
    initweather(state, action) {
      return {
        ...state,
        weather: action.value
      };
    }
  },

  effects: {
    *throwError() {
      throw new Error("error");
    },
    *getweather({ value }, { put }) {
      const wea = yield getweatherByCode(value);
      yield put({
        type: "initweather",
        value: wea
      });
    }
  }
};
