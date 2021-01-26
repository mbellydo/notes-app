Completa el següent [exercici](https://jsbeginners.com/javascript-notes-app-project/).
Pots fer servir els fitxers del codi font com a base, pero compte:

1.Només volem, de moment, implementar les funcionalitats
    1. Afegir una nova nota
    2. Recuperar totes les notes

2.L'aplicació ha de guardar les notes a la teva instancia de firebase; i també recuperar-les

3.L'aplicació ha de ser capaç d'ordenar les notes tal i com es motra a la demo (ordenar per data d'edició no serà possible, per el moment)

4.També heu de filtrar les notes pel filtre text (mirar si el valro del input està contigut en el title o en la description d'alguna nota)

5.BONUS:
    1. Afegir funcionalitat per esborrar una nota de la BBDD
    2. AFegir funcionalitat per modificar una nota de la BBDD
        1. Posiblement en ambdós casos necessitareu recuperar l'id que genera firebase en el moment de crear l'entrada a la base dades, i guardar aquest id.
            1. Modificar [la invocació de fetch](https://pastebin.com/raw/hj1Sr8m6) per obtenir el ID de Firebase
            2. Propietat amb el [ID](https://oscarm.tinytake.com/tt/NTA0MTk2Nl8xNTg1MzEyMA)
        2. O potser es adecuat generar un identificador únic amb nanoid