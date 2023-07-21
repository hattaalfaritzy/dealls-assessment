import axios from 'axios';
import config from '@/config/_config';
import { apiPublic } from '@/api/_root';

const timeout = Number(config.NEXT_PUBLIC_API_TIMEOUT || 15000);

export const fetchApi = async ({method, baseUrl, url, params, data, headers, ...rest}: Props) => {
    const authorizationToken: string | null = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY4OTg1NTU2NiwiZXhwIjoxNjg5ODU5MTY2fQ.FkshdhtEAN3SWAfKBdGwXX1136XLq4wn3HztCkvpXLk';
    
    const finalHeaders = {
        'Authorization': authorizationToken,
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        ...headers
    };
      
	const response = await axios({
        timeout,
        baseURL: baseUrl || apiPublic(),
        url: url,
        params,
		method,
		headers: finalHeaders,
		data: data && JSON.stringify(data),
        ...rest,
	});

    return response.data;
}

type Props = {
    method?: string;
    baseUrl?: string;
    url?: string;
    params?: string | number;
    data?: Record<string, unknown>;
    headers?: any;
};
