const API_ENDPOINT = "https://iva-dev.clinbioinfosspa.es:9090/api/v1/";


class MmpApi {

    static async getTimeseries(province: string | undefined, abortSignal: AbortSignal) {
        const url = !!province ? `timeseries/${province}` : "timeseries";
        return MmpApi.get<any>(undefined, url, undefined, abortSignal);
    }

    private static async exchange<T>(sessionToken: string | undefined, serviceUrl: string, httpMethod: string, queryParams: any, requestBody: any, abortSignal: AbortSignal): Promise<T> {
        // const mmpHostUrl = clientConfig.get("mmp-host") as string;
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        } as any;
        if (!!sessionToken) {
            headers.Authorization = `Bearer ${sessionToken}`;
        }
        const params = {
            method: httpMethod,
            headers: headers,
            signal: abortSignal,
            body: undefined === requestBody ? undefined : JSON.stringify(requestBody)
        };
        const queryStr = undefined === queryParams ? "" : Object.entries(queryParams)
            .filter(([_, paramValue]) => undefined !== paramValue)
            .map(([paramName, paramValue]) => {
                const value: string = paramValue instanceof Date ? paramValue.toISOString() : paramValue as string;
                return `${encodeURIComponent(paramName)}=${encodeURIComponent(value)}`;
            }).join("&");
        const queryUrl = `${API_ENDPOINT}${serviceUrl}${!!queryStr ? "?" : ""}${queryStr}`;
        const response = await fetch(queryUrl, params);
        if (!!response.ok) {
            const actualResponse = await response.json();
            for (const item of actualResponse) {
                item.date = Date.parse(item.date);
            }
            return actualResponse;
        } else {
            const error = new Error(response.statusText);
            error.name = `${response.status}`;
            throw error;
        }
    }

    private static async get<T>(sessionToken: string | undefined, serviceUrl: string, queryParams: any, abortSignal: AbortSignal): Promise<T> {
        return MmpApi.exchange(sessionToken, serviceUrl, "GET", queryParams, undefined, abortSignal);
    }

    private static async put<T>(sessionToken: string | undefined, serviceUrl: string, queryParams: any, requestBody: any, abortSignal: AbortSignal): Promise<T> {
        return MmpApi.exchange(sessionToken, serviceUrl, "PUT", queryParams, requestBody, abortSignal);
    }

    private static async post<T>(sessionToken: string | undefined, serviceUrl: string, queryParams: any, requestBody: any, abortSignal: AbortSignal): Promise<T> {
        return MmpApi.exchange(sessionToken, serviceUrl, "POST", queryParams, requestBody, abortSignal);
    }

    private static async delete<T>(sessionToken: string | undefined, serviceUrl: string, queryParams: any, abortSignal: AbortSignal): Promise<T> {
        return MmpApi.exchange(sessionToken, serviceUrl, "DELETE", queryParams, undefined, abortSignal);
    }
}


export default MmpApi;