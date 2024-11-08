export interface RESTOptions {
    version: string;
    base: string;
    makeRequest: "fetch" | "axios";
}

export interface requestOptions {
    body?: any;
    headers?: any;
}