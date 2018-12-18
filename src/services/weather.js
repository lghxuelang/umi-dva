import request from '../utils/request';

export async function getweatherByCode (params) {
    return request({
      url: window.appcfg.weatherurl,
      method: 'get',
      mode: 'cros',
      data: params,
    })
  }