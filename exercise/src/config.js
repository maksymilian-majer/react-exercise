const defaultHostname = "https://randomuser.me/api";
export const api_hostname = process.env.REACT_APP_API_HOSTNAME || defaultHostname; // support of dev/staging/prod environments through env vars
