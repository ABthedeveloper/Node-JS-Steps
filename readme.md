for more info visit https://medium.com/yavar/backend-application-and-its-folder-structure-ed631051faae#:~:text=The%20back%20end%20also%20known,to%20talk%20to%20each%20other.


1.Config
This is the main configuration file and contains all your default environment variables.

2.Controllers:
The controllers are responsible for handling incoming requests and returning responses to the client. Its main purpose is to receive specific requests for the application.

3.Services:
The services handle all the logic between the incoming request and returning the response. In the library todo API, the services handle the add, update, list, and deletion logic and send it to the returning response.

4.Models:
The models are used to communicate with the database. It is an intermediary between the database and the controllers.