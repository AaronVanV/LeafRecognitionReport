---
title: Home
---

# Deep learning Rapport

<!-- Verander de bovenstaande titel naar de titel van je project -->

<!--
    ===========================================
    !!!! LEES DEZE HANDLEIDING GRONDIG EN PAS TOE  !!!!
    ===========================================

    Gebruik dit document als sjabloon voor het verslag. Lees alles grondig door en vul overal aan waar een TODO vermeld staat. Verwijder op het einde alle commentaren waarin een TODO vermeld staat.

    Belangrijk!:
    * Verzorg de stijl van je document. Kijk na of alles correct weergegeven wordt.
    * Let op de markdown stijl bij je antwoorden.
      * Installeer de dependencies met `npm install` en voer de linter uit met `npm run lint`
      * Gebruik de markdownlint extension in VScode en zorg ervoor dat ALLE opmerkingen weggewerkt zijn. (https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
    * Plaats code altijd in een markdown code blok en vermeld de juiste language
    * Gebruik tabellen en afbeeldingen om zaken te verduidelijken. Zorg dat alle afbeeldingen lokaal in de repository staan. Link niet naar afbeeldingen die op het internet staan.
    * Gebruik de VScode plugin Code Spell Checker (https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) en de Dutch - Code Spell Checker (https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-dutch). Zorg ervoor dat alle aangeduide taalfouten nagekeken zijn.
 -->

Welcome to our Leaf Recognition project.

In this report you can find explanations of the code, how to use it and extra information about the project.

The link to the code: [LeafRecognitionCode](https://github.com/AaronVanV/LeafRecognitionCode)

## Abstract

<!-- TODO Plaats hier in abstract in een block quote -->
<!-- Het abstract is een samenvatting van de hele tekst (probleemstelling, doelstelling, uitwerking, conclusie) in 150 tot maximum 200 woorden.-->
Wouldn't it be great to know with species of tree a certain leaf belongs to?
We were able to create a project that recognises 15 tree species by its leaves. This realised by first processing the images of the leaves from a Swedish dataset using Matlab, then putting those processed images through a python Keras training model which trains to recognise the 15 Swedish tree species. Then you can take a new picture of a leaf in those 15 species, run it through the image processing Matlab code and let the predition code run on that processed image. It will return a prediction of the species of the inputted image with a percentage of how certain the model is. Some expansions on the project would be to increase the amount of tree species and some automation of the Matlab image processor, so you the prediction would run in 1 smooth motion.

## About us

We are third year students in Electronics-IT at Vives Bruges, this is the report of our project for the subject Deep Learning.
We got the assignment make a project that uses deep learning and preferably Matlab.

Students:

- Aaron Van Vyve [Github](https://github.com/AaronVanV/) [Report link](https://github.com/DeepLearning-2021-2022/deep-learning-project-report-AaronVanV)

- Thomas Luca [Github](https://github.com/ThomasLuca/) [Report link](https://github.com/DeepLearning-2021-2022/deep-learning-project-report-ThomasLuca)

- Jens Cocquyt [Github](https://github.com/Jens-C/) [Report link](https://github.com/DeepLearning-2021-2022/deep-learning-project-report-Jens-C)
