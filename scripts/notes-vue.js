import Note from "./Note.js"

const app = Vue.createApp({
    data() {
        return {
            notes: [],
            isAddFormVisible: false,
            title: '',
            description: '',
            creationDate: ''
        }
    },
    created(){ //HOOK invocado al crear objetivo VUE
        console.log("App creada!")
        Note.fetchAll((data) => {
            this.notes = data
            this.getAllNotesFromBBDD()
        })
    },
    methods: {
        getAllNotesFromBBDD(){
            Note.fetchAll( (data) => {
                this.notes = data
                console.log("Datos recuperados de la BBDD: ", data)
            })
        },
        showAddForm() {
            this.isAddFormVisible = true
        },
        addNote() {
            if (!this.title || !this.description) {
                alert('Rellena los campos!')
                return
            }

            const note = new Note(this.title, this.description, this.creationDate)
            console.log("Vamos a insertar: ", note)
            note.save( () => {
                this.getAllNotesFromBBDD()
            })
            this.isAddFormVisible = false
        }       
    }
})

app.mount('#app')