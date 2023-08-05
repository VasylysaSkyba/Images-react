import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '37231765-93879a3c2b17d9f49829cd6d4',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const fetchPicturesQuery = async (search, page) => {
  const { data } = await instance.get('/', {
    params: {
      q: search,
      page: page,
    },
  });
  return data;
};
