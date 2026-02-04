# NSwag in this repo

## Generate client
1) Ensure backend swagger JSON works:
   - http://localhost:5000/swagger/v1/swagger.json
2) Set `.env`
3) Run:
```bash
npm run api:gen
```

## Output
- `src/api/generated/apiClient.ts`

## How to use generated client
In a repository:
- import `{ AuthClient }` (or others) from `src/api/generated/apiClient`
- construct client with:
  - baseUrl = API_BASE_URL
  - custom fetch from `getFetch()`

If your generated client does not accept a custom fetch directly, use NSwag options and re-run.
This repo already sets `template: Fetch` + transform methods.

