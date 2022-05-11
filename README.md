This is one of the technical samples requested on lyft's apprenticeship application. Code is located in functions folder under "index.js". Read below for API link and details on the API.

API link https://us-central1-every-third-letter.cloudfunctions.net/lyftApi/test
This API accepts a POST request that accepts one argument "string_to_cut"
It returns a JSON object with the key "return_string" and a string containing every third letter from the original string.
Example: If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}