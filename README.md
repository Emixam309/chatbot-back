# chatbot-backend


### Version 1

---

- `/dialog/questions` : Méthode GET

    > Retourne la liste des questions ainsi que son identifiant.
   ```json
   {
    "id": number,
    "question": string
  }
  ```

- `/dialog/answer/:id` : Méthode GET

    > Retourne le dialogue correspondant à l'id donné.
    ```json
    {
      "id": number,
      "question": string,
      "response": string
    }
  ```


### Version 2

--- 

etc