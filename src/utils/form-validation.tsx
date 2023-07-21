import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const searchSchema = Yup.object().shape({
    search: Yup.string(),
});

export const formSearch = { resolver: yupResolver(searchSchema) };
