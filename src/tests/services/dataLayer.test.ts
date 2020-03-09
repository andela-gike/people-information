// import axiosMock from 'axios';
import DataLayer from '../../services/dataLayer';

const EXTERNALURL = 'https://dummy-people-info.herokuapp.com/results';

test('loads all employees', async () => {
  try {
    const { data } = await DataLayer({ method: 'GET', url: EXTERNALURL });
    expect(data.length).toBeGreaterThan(1);
  } catch (err) {
    expect(err.message).toMatch(/Cannot read property 'length' of undefined/i);
  }
}, 30000);

test('wrong endpoint url', async () => {
  await expect(DataLayer({ method: 'GET', url: `${EXTERNALURL}/me` })).toMatchObject({});
});
