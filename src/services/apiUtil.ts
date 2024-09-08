import { errorBoundaryStore } from "../stores/errorBoundaryStore";

const API_BASE_URL = "https://api.nasa.gov/";

interface RequestOptions {
  url: string;
  method?: 'GET' | 'POST';
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, any>;
}
  interface ApiRequestResponse<T> {
    loading: boolean;
    error?: string;
    result?: T;
    request: () => Promise<void>;
  }
  
  export const apiRequest = <T>({
    url,
    method = 'GET',
    headers = {},
    body,
    params,
  }: RequestOptions): ApiRequestResponse<T> => {
    let loading = false;
    let error: string | undefined;
    let result: T | undefined;
  
    const request = async () => {
      loading = true;
      error = undefined;
      result = undefined;
  
      try {
        const queryParams = params
          ? new URLSearchParams(params as any).toString()
          : '';
        const fullUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`;
        const response = await fetch(fullUrl, {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            ...headers,
          },
          body: method === 'POST' ? JSON.stringify(body) : undefined,
        });
  
        if (!response.ok) {
          const errorResponse = await response.json();
          errorBoundaryStore.setError(errorResponse.message);
          throw new Error(errorResponse.message || 'An error occurred');
        }
  
        result = (await response.json()) as T;
      } catch (err) {
        error = (err as Error).message;
        errorBoundaryStore.setError(error || 'An error occurred');
      } finally {
        loading = false;
      }
    };
  
    return {
      loading,
      error,
      result,
      request,
    };
  };
  