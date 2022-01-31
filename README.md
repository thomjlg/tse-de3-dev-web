# Documentation technique 
## Projet final du module développment web | TSE DE3
<br />

## Arborescence du projet
```bash
.
├── README.md
├── exam.md
├── fonts
│   ├── 70b628a2521876b8a7d11f8bfad52cd7.ttf
│   ├── savoye-let-plain-1-0.ttf
│   └── savoye-let-plain-1-0.woff
├── images
│   ├── 55849375_2746497575377379_1960753506650423296_o.jpg
│   ├── DSC_6337.jpg
│   ├── IMG_0537.jpg
│   ├── IMG_1842.jpg
│   ├── banner-small.jpg
│   ├── banner.jpg
│   ├── bergamo.jpg
│   ├── calanque.jpg
│   ├── chpfr.jpg
│   ├── croixprovence.jpg
│   ├── gouffreenfer.jpg
│   ├── gouffreenferhiver.jpg
│   ├── guizay-nov21.jpg
│   ├── guizay.jpg
│   ├── guizayhiver.jpg
│   ├── lagodicomo.jpg
│   ├── lagodigarda.jpg
│   ├── lagoiseo.jpg
│   ├── mDSC_0495.jpg
│   ├── milan.jpg
│   ├── mondovi.jpg
│   ├── monza-street.jpg
│   ├── monza.jpg
│   ├── mouette.jpg
│   ├── murano.jpg
│   ├── photoCV.png
│   ├── popup-arrow.png
│   ├── poselongueaix.jpg
│   ├── rosalba.jpg
│   ├── stemetropole.jpg
│   ├── tlpE4.jpg
│   ├── torino.jpg
│   ├── venise-2.jpg
│   ├── venise.jpg
│   └── vignesreims.jpg
├── index.html
└── scr
    ├── script.js
    ├── style-global.css
    ├── style-max-width-980.css
    ├── style-min-width-1250.css
    └── style-min-width-981-max-width-1249.css
```

Le dossier ```scr``` contient les fichiers css et javascript : 
- ```style-max-width-980.css```, ```style-min-width-1250.css``` et ```style-min-width-981-max-width-1249.css``` appliquent des styles selon les tailles d'écran (téléphones, tablettes, ordinateurs), de manière à avoir un site responsive.
-  ```style_global.css``` contient des styles communs aux différentes tailles d'écran.
- ```script.js``` contient l'ensemble des fonctions javascript et notamment jQuery qui permettent le bon fonctionnement du site.

Le dossier ```images``` contient toutes les images utilisées sur le site.

Le dossier ```fonts``` contient les polices de caractères utilisées dans le site internet. Seule la police par défaut : ```font-family: Calibri, sans-serif;``` n'y est pas car elle est déjà connue par les navigateurs.

Le fichier ```index.html``` est la page internet du site.

<br />

## Choix du design
J'ai fait le choix de réaliser un site contenant un seul bloc vertical prenant toute la largeur de la page. Je n'avais pas l'utilité d'un second bandeau vertical. Cela permet d'afficher plus de contenu et d'améliorer l'expérience utilisateur sur le site.

Au niveau des couleurs, j'ai fait le choix d'une palette plutôt simple, ne contenant que du blanc et des dégradés de vert et de gris. Cela permet d'avoir une cohérence sur l'ensemble du site et l'œil n'est pas agréssé par une quantité de couleurs. J'ai également joué sur la transparence au niveau du ```header``` et de la ```modal```. 

La plupart des sites ont une couleur de définie pour le ```html, body```. J'ai fait le choix de définir une image de fond fixe plutôt qu'une couleur. L'idée étant de faire un site pour un photographe, autant afficher une image et faire défiler les div dessus pour rester dans le thème. De plus, l'image de fond diffère selon la taille de l'écran. Cela permet de rendre le site plus attractif.

Au niveau des démarcations entre les ```sections```, j'ai opté pour des séparations inclinées au lieu des séparations horizonrales que l'on a par défaut. Pour cela, j'ai créé des gradients avec une inclinaison de quelques pourcentages. Cela permet de casser un peu les blocs et de rendre le site plus agréable et moins agressif à regarder. 
<br />Pour conserver l'image de fond en diagonale au niveau des séparations, j'ai mis un attribut ```transparent``` au lieu d'une couleur, ce qui permet de laisser l'image de fond apparente et de donner l'impression que les div flottent au dessus de l'image. 

J'ai pris le parti d'ajouter une police de caractère pour le logo et pour le titre de la rubrique du portfolio. La police ```savoye``` permet d'avoir un visuel plus fantaisiste tout en gardant en lisibilité. L'idée était de changer des polices génériques utilisées sur la plupart des sites.

Le site ne contient qu'une seule page :  ```index.html```. Le menu de navigation permet de se rendre en un clic à la section choisie (a propos / portfolio) via un scroll dans la page.
<br />

## Détail du fichier ```index.html```
Le site est divisé en plusieurs blocs distincts : 
- ```<noscript>``` : sert à afficher un message dans le cas ou l'utilisateur n'aurait pas activé ```javascript``` sur son navigateur (le reste du site n'est pas visible dans ce cas)

- ```<nav>``` : permet d'afficher le menu vers les 2 sections du site (a propos / portfolio). Ce bloc est en  position fixe, au dessus du header.

- ```<header>``` : contient le titre du site, disposé sur la gauche du ```header```, ainsi que les icones sociales. La modal contenant le formulaire de contact est également déclarée dans le ```header``` et s'affiche au clic sur l'icone ```fas fa-envelope```. Le ```header``` est en position fixe, juste en dessous du bloc ```nav```.

- ```<section>``` : ce sont les blocs principaux contenant les différentes rubriques du site
    - ```<section class="section-panel panel-item-banner" id="link-portal"></section>``` sert à afficher l'image de fond du site
    - ```<section class="section-panel panel-item-about">``` permet d'afficher la rubrique ```A Propos``` sur le site.
    - ```<section class="section-panel panel-item-albums">``` permet d'afficher le portfolio avec la grille d'albums.

- ```<footer>``` : il est composé de 2 blocs ```<div class=preFooter>``` et ```<div class=postFooter>```. Le premier bloc sert à afficher le logo et le second à afficher les crédits &copy; et le nom.

<br />

### Grille d'albums
La grille d'albums a été réalisée en utilsant la fonctionnalité ```flexbox``` de ```css```. Le nombre d'élément par ligne s'adapte en fonction de la largeur de l'écran. 
Chaque album affiché est codé de la même manière avec le code suivant :
```html
<div class="item-album nature">
    <div class="album-item-photo" id="id-de-la-photo"></div>
    <div class="album-title">
        <!-- Titre de l'album -->
    </div>
    <div class="album-date">
        <!-- date de l'album -->
    </div>
    <a href="https://mon-url-vers-lalbum" target=_blank>
        <div class="album-description">
            Voir l'album 
            <i class="fas fa-long-arrow-alt-right"></i>
        </div>
    </a>
</div>
```
Dans la ```class``` de la première ```div``` il faut préciser le type de photo de l'album. Les catégories ```cyclisme```, ```nature```, ```ville``` ont été définies. Par exemple, il faut écrire une des ligne ci-dessous.
```html
<div class="item-album cyclisme">
<div class="item-album nature">
<div class="item-album ville">
```
Cela permet de pouvoir filtrer dans la page selon le type de photo que l'on veut visualiser.

La ```div``` ayant la ```class=album-item-photo``` est celle qui permet l'affichage de la photo de couverture de l'album. 
Pour mettre une photo unique par album, il faut ajouter ces lignes dans le fichier ```style-global.css```, tout en mettant un ```id``` unique par item : 
```css
#id-de-la-photo{
    background-image: url("../images/ma-photo.jpg");
}
```
Dans les ```div``` ayant les ```class="album-title"``` et ```class="album-date"```, il faut écrire les noms et dates des albums.

Enfin, il faut préciser l'url de l'album dans la balise ```<a href="https://mon-url-vers-album" target=_blank>```.

<br />

### Defilement parallax des images dans la dernière section
La dernière ```section``` du site avant le ```footer``` est une section contenant 3 images. Une animation en  ```javascript``` permet de faire défiler les images en même temps que l'utlisateur fait  défiler la page. Un effet d'ombre a été ajouté de manière à faire ressortir les images sur le fond qui est également une image.

<br /><hr />
&copy; 2021 - Thomas JAULGEY - TSE FISA DE3