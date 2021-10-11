# Persons and Scores

- Hehe, we edited this one together during class :D


**TASK** Add endpoints!

- *Note* Don't return the "__v" field for any requests

1. Get a user (with all their scores) `GET /users/:id`
2. Delete a user AND all of their scores `DELETE /users/:id`
3. Get all scores (endpoint exists, but make it *paginated*, returning 10 items at a time)
    - If the request is `GET /scores`, return 10 scores ordered by total score (ascending) with the users
    - If the request is `GET /scores/page/:nbr`, return 10 scores ordered by total score (ascending) with the users starting from the requested "page"

- Research: there are two ways of having parameters in your URL:
    1. http://localhost:3000/users/1/page/14
    2. http://localhost:3000/users/1?page=14
    - While we have used the 1st type, the 2nd type is common too! It's sometimes called something like "query string parameters" or "query params" or in very technical documents "query component" - although that last one is not super common. If you have a request like the 2nd one coming in; how could you get the value of "page" in express?