---
title: "Deep Learning for Earthquake Damage Detection"
description: "Accelerating satellite-based earthquake damage classification through deep learning and edge inference."
tags:
  - Python
  - Deep Learning
  - OpenVINO
  - Remote Sensing
github: "https://github.com/adri1197/DP_Image-Binary-Classification"
website: "https://ieeexplore.ieee.org/document/9416728/"
category: "Research"
order: 2
---

This project explores the use of deep learning and high-performance inference to accelerate earthquake damage assessment from satellite imagery. Originally developed as part of my Bachelor’s degree project, it uses a convolutional neural network to classify areas captured in Very High Resolution imagery as either damaged or undamaged.

The model was trained using GeoEye-1 satellite images collected after the 2010 Haiti earthquake. Built with Python, TensorFlow and Keras, the network learns visual patterns associated with structural damage and provides an automated mechanism for analysing affected areas—supporting faster decision-making during time-critical disaster-response operations.

Beyond developing the classification model, the project focuses on making deep-learning inference portable and efficient across different hardware environments. Using the Intel OpenVINO toolkit, the trained network was converted, optimised and deployed on Intel CPUs and the Intel Movidius Neural Compute Stick 2. The implementation evaluates synchronous and asynchronous inference, heterogeneous execution and mixed-precision optimisation, while comparing OpenVINO performance with TensorFlow Serving.

The research demonstrated that hardware-aware optimisation can significantly reduce inference time while maintaining reliable classification accuracy. This makes the solution suitable for edge and resource-constrained environments, where satellite images may need to be processed quickly without relying entirely on large cloud-computing infrastructure.

The work resulted in the peer-reviewed publication “Portability and Acceleration of Deep Learning Inferences to Detect Rapid Earthquake Damage From VHR Remote Sensing Images Using Intel OpenVINO Toolkit,” published in the IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing.

By combining remote sensing, convolutional neural networks and edge-AI optimisation, the project demonstrates how portable deep-learning systems can support faster and more effective post-disaster assessment.