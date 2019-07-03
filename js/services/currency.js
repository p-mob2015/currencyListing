import axios from 'axios';
import { API_ROOT, API_KEY } from 'react-native-dotenv';

import { ERRORS } from '@app/enum';

export const loadCurrencies = async count => {
  try {
    const response = await axios.get(
      `${API_ROOT}/v1/cryptocurrency/listings/latest`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': API_KEY,
        },
        params: {
          start: 1,
          limit: count,
          convert: 'USD',
        },
      },
    );

    return response.data;
  } catch (error) {
    throw new Error({
      type: ERRORS.API_FAILURE,
      error,
    });
  }
}
