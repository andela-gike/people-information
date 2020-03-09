import axios from 'axios';

export interface Params {
  /** The axios method value */
  method: 'GET' | 'POST' | 'PATCH';
  /** The api url to connect to the endpoint */
  url: string,
  data? : any
}
const people = async ({ method, url = '', data }: Params): Promise<any> => {
  try {
    const response = await axios({
      method,
      url: `${url}`,
      responseType: 'json',
      data,
    });
    return response;
  } catch (err) {
    if (err.response) {
      return err.response;
    }
    return err;
  }
};

export default people;
