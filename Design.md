# LOTR SDK

SDK created on top of Lord of the Rings OpenApi for providing information regarding, The Lord of the Rings. Written using Typescript. Axois is used to comsume the api.

### Folder Structure
```
├─ src
│  ├─ routes
│  │  ├─ book.ts
│  │  ├─ chapter.ts
│  │  ├─ charater.ts
│  │  ├─ movie.ts
│  │  └─ quote.ts
│  ├─ util
│  │  ├─ factory.ts
│  │  ├─ reqConfig.ts
│  │  └─ setAuthConfig.ts
│  └─ index.ts
├─ package-lock.json
├─ package.json
└─ tsconig.json
```
### Design decisions
- Utilize a factory method for calling the endpoints from the API.
- For abstracting the endpoints, Methods are created by which user can recieve response.
- As Endpoints are grouped, Methods are also grouped into parent object.
- User can access restricted routes by passing Auth Token into methods.
- User can configure request by passing pagination, sorting or filtering in config param.

### Architecture
Functionality about each files.
##### Index.ts
main starting point of the project, which is inherited by object groups. User can import LOTR from this file to utilize methods.

LOTR object have four nested object in it.
1. books
2. movies
3. characters
4. quote

##### route/book.js
All the request method about books are present in this file. This includes Open API methods as well newly introduced methods as below:
- getByID
- getChaptersFromABook
- getChapterCountFromABook
##### route/movie.js
All the request method about movies are present in this file. This includes Open API methods as well newly introduced methods as below:
- getByID
##### route/character.js
All the request method about characters are present in this file. This includes Open API methods as well newly introduced methods as below:
- getAllByRace
- getAllByGender
- getByID
- getQuoteFromACharacter
##### route/quote.js
All the request method about quote are present in this file. This includes Open API methods as well newly introduced methods as below:
- getByID
##### route/chapter.js
All the request method about chapters are present in this file. This includes Open API methods as well newly introduced methods as below:
- getByID
##### util/factory.ts
In this factory method request are made with the API then response is processed and checked for potential errors then passed to the method which invoked it.
- Generalized functionality implementation easier.
- It is the common ground in which we can easily manage the errors and provide a readable error message to SDK callers.
- Data can be easily manipulated as we want.

##### util/reqConfig.ts
Method created to handle pagination, sorting and filtering.

##### util/setAuthConfig.ts
To handle authentication pass through auguments.