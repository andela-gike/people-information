// import axiosMock from 'axios';
import DataLayer from '../../services/dataLayer';

const EXTERNALURL = 'https://dummy-people-info.herokuapp.com/results';

test('loads all employees', async () => {
  const { data } = await DataLayer({ method: 'GET', url: EXTERNALURL });
  expect(data.length).toBeGreaterThan(1);
});

test('wrong endpoint url', async () => {
  await expect(DataLayer({ method: 'GET', url: `${EXTERNALURL}/me` })).toMatchObject({});
});

// test('loads all employees', async () => {
//   await expect(DataLayer({ method: 'GET', url: '' }))
//     .toMatch('error');
// });
