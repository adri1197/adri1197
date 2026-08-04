---
title: "Modeling Emergent Vegetation Dynamics: An ARC-NCA Framework"
description: "Reconstructing vegetation indicators from RGB drone imagery using Neural Cellular Automata."
tags:
  - Python
  - AI
  - Neural Networks
  - Remote Sensing
  - Generative Model
  - Deep Learning
github: "https://github.com/adri1197/ARC-NCA-Vegetation-Dynamics"
category: "Research"
order: 1
---

This research project explores how Neural Cellular Automata can reconstruct vegetation information from standard RGB drone imagery. Developed as part of my Master’s thesis, the project uses an ARC-NCA model to estimate near-infrared reflectance and derive NDVI maps, reducing the reliance on specialised multispectral sensors.

Unlike conventional image-to-image models, the ARC-NCA evolves its predictions through repeated local interactions between neighbouring cells. This self-organising process enables the model to progressively reconstruct spatial vegetation patterns while offering a more interpretable perspective on how those patterns emerge.

The project includes an end-to-end geospatial deep-learning pipeline for processing UAV orthomosaics, aligning multispectral data, extracting image patches, integrating spatial information and agricultural annotations, training the neural cellular automaton, and evaluating its predictions using metrics such as RMSE, MAE, R² and SSIM.

By combining remote sensing, deep learning and emergent computation, the project investigates a novel and potentially accessible approach to crop-health monitoring and vegetation analysis in precision agriculture.
