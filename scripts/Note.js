const url = 'https://notes-app-1236d-default-rtdb.firebaseio.com/notes.json'

export default class Note {
    constructor(title, description, creationDate) {
        this.title = title
        this.description = description
        this.creationDate = creationDate      
    }

    save() {
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.title,
                description: this.description,
                creationDate: this.creationDate
            })
        } 
        
        fetch(url, postOptions)
            .catch(error => console.error(error)) 
    }
    static fetchAll(cb) {
        fetch(url)
            .then(response => response.json())
            .then(data => cb(data));
    }
}

