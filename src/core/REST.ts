import axios from "axios";
import { requestOptions, RESTOptions } from "../types/interface";

export class REST {
    public version = "1";
    public base = "https://hewkawar.xyz/api";

    private makeRequest = "fetch" as "fetch" | "axios";

    private async request(method: string, path: string, options?: requestOptions) {
        const url = `${this.base}/v${this.version}${path}`;
        if (this.makeRequest === "fetch") {
            const headers = {
                "Content-Type": "application/json",
                ...options?.headers
            };
            const body = options?.body ? JSON.stringify(options.body) : undefined;
            const response = await fetch(url, {
                method,
                headers,
                body
            });
            return response.json();
        } else if (this.makeRequest === "axios") {
            const headers = {
                "Content-Type": "application/json",
                ...options?.headers
            };
            const body = options?.body;
            const response = await axios({
                method,
                url,
                headers,
                data: body
            });
            return response.data;
        } else {
            throw new Error("Invalid request method");
        }
    }

    constructor(options: Partial<RESTOptions> = {}) {
        Object.assign(this, options);
    }

    public get(path: string, options?: requestOptions) {
        return this.request("GET", path, options);
    }

    public post(path: string, options?: requestOptions) {
        return this.request("POST", path, options);
    }

    public put(path: string, options?: requestOptions) {
        return this.request("PUT", path, options);
    }

    public patch(path: string, options?: requestOptions) {
        return this.request("PATCH", path, options);
    }

    public delete(path: string, options?: requestOptions) {
        return this.request("DELETE", path, options);
    }

    public head(path: string, options?: requestOptions) {
        return this.request("HEAD", path, options);
    }

    public options(path: string, options?: requestOptions) {
        return this.request("OPTIONS", path, options);
    }
}