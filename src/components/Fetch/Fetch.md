# Fetch.js

Fetches data with debounce and shows a loader and error message.

## Usage

```html
<Fetch url="/search?suburb=hawthorn">
    {(response) => (
    <div>{JSON.stringify(response)}</div>
    )}
</Fetch>
```
