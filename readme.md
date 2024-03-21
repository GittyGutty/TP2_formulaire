# Autoévaluation
__TP2 - Intégration d'un formulaire accessible__

__Barème :__ 
A = 100%, (Tout les sous-critères respectés, réussite complète)
B = 85%, (Presque tous les critères respectés)
C = 75%, (Quelques lacunes)
D = 65%, (Atteinte minimale du critère)
E = 55% (Lacunes majeures)

## Commentaires

 
## Critères
__HTML__ X sur 4
- [X] balises structurelles et balises sémantiques 
Page bien structuré avec un `header`, un `main` et un `footer`.
Faire le bon choix du type de `input`, par exemples le courriel doit être de `type` "email"
- [X] code html *valide* 
Faire une capture-écran avant-après ou juste après pour prouver que le document ne comporte aucune erreur. Les simples avertissements ne comptent pas comme des erreurs.
- [X] regroupements, étiquetage 
Balise `fieldset` pour grouper et balise `legend` pour étiqueter le groupe.  
Balise `label` relié au `input` par son attribut `for` dont la valeur est celle du `id` du champ de saisie.
Les images doivent possèder un attribut alt bien documenté.
- [X] contraintes de saisie 
Bien utiliser les attributs: `required`, `pattern` et `title`. 
  
__SASS et CSS__ X sur 2
- [X] mobile first  
Les règles pour l'écran étroit sont écrites en premier et on imbrique les requêtes medias de manière à obtenir tout de suite après dans la css les variantes pour l'écran large 
- [X] styles de base, alignements, apparence du formulaire
Les champs de saisie doivent être alignés.
La variante pour l'écran large doit être enrichie par rapport à la version de l'écran étroit. Minimalement, ajouté un visuel à la gauche du formulaire.
- [X] styles interactivité  
Lorsqu'un élément de formulaire reçoit le focus son apparence doit changer pour le mettre en évidence.
Le bouton de soumission et les hyperliens doivent avoir des états survol. 
- [X] syntaxe sass : variables, importation, nichage des requêtes media.
   
__NAVIGATION ACCESSIBLE__ X sur 2  
- [X] navigation au clavier du formulaire
Avec la touche `tab` on doit pouvoir parcourir le formulaire dans le bon ordre et pouvoir soumettre le formulaire avec la touche `enter`.
- [X] ajout du lien "allez au contenu" 
Tout de suite après l'ouverture du `body`doit se trouver un lien permettant d'aller directement au contenu principal. Ce lien aura pour classes `screen-reader-only` et `focussable`.
- [X] ajout des attributs `role` aux régions (landmarks) 
Ajouter l'attribut role sur le `header`(`banner`) et le `footer`(`content-info`).

__JAVASCRIPT__ X sur 2 
- [X] vérifier que les champs de saisie ne sont pas vides
- [X] vérifier que les données sont conformes au type attendu 

__BONUS__ (maximum 2 points)  
- [ ] expliquer ci-dessous la valeur ajoutée. Si vous avez utilisé du code dont vous n'êtes pas l'auteur, mentionner vos sources. Pareil si vous avez utilisé une IA, donnez lui son mérite (ou démérite haha).

__TOTAL__ 
10 sur 10  