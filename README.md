# LLM-materialsChem-hack24

# Authors:
- Tapashree Pradhan (KU Leuven, Belgium) [Email](tapashree.pradhan@student.kuleuven.be)
- Devi Dutta Biswajeet (University of Illinois Chicago, USA) [Email](dbiswa4@uic.edu)

# Synthetic Data Generation and Insightful Machine Learning for High Entropy Alloy Hydrides

## Introduction
High Entropy Alloys (HEAs) have garnered significant attention for their potential applications in hydrogen storage due to their unique multi-principal element compositions. This project proposes leveraging the generative capabilities of Large Language Models (LLMs) to synthetically expand the dataset of HEA hydrides across a range of untested stoichiometries, temperatures, and pressures. Additionally, it aims to develop machine learning models to predict hydrogen content in these alloys and deploy an intelligent chatbot to disseminate complex material insights and references.

## Project Objectives

### Synthetic Data Generation
- Fine-tune LLMs on existing datasets of high entropy alloy hydrides to generate high-fidelity synthetic data reflecting unexplored stoichiometries and variable environmental conditions.

### Predictive Modeling
- Construct and train two predictive models using both the original and synthetic datasets to evaluate hydrogen weight percentages in HEAs, thereby testing the synthetic data's effectiveness in enhancing model accuracy and robustness.

### Insightful Chatbot Implementation
- Develop a LLM-powered chatbot that elucidates the physical properties and applications of HEAs, equipped to reference scientific literature and notify users of data gaps.

## Innovative Aspects

- **Enhanced Data Utility**: The project uniquely proposes extending available data through synthetic means, thereby enabling the exploration of HEA properties under diverse conditions without the need for extensive physical experimentation.
- **Integrative Use of Language Models**: This initiative is pioneering in its integration of advanced language models for synthetic data generation within the materials science domain, potentially setting a new standard for computational research methodologies.
- **Comparative Model Analysis**: By training machine learning models on both actual and synthetic data, this project offers a novel evaluation of synthetic data's utility in scientific investigations.

## Sustainability

- **Reduction of Experimental Demands**: The generation of synthetic data minimizes the need for physical experimentation, reducing both the costs and environmental impact associated with traditional materials testing.
- **Educational and Research Enhancement**: The chatbot will serve as a sophisticated educational tool, improving accessibility to complex materials science concepts and promoting deeper understanding among students and researchers.

## Execution Strategy

### Data Preparation and Model Fine-Tuning
- Preprocess and adapt the HEA hydride dataset for compatibility with LLM.
- Implement domain-specific fine-tuning of LLM to enhance its data generation capabilities focused on HEA characteristics.

### Synthetic Data Creation and Verification
- Systematically generate synthetic datasets encapsulating a wide array of conditions.
- Employ theoretical and limited experimental validations to ensure the synthetic data's realism and applicability.

### Model Development and Comparative Training
- Develop and optimize machine learning models to utilize both real and synthetic datasets.
- Conduct a thorough comparative analysis of the models' performance metrics to ascertain the advantages of synthetic data training.

### Chatbot Development and Deployment
- Design and program the chatbot using the LLM API to effectively respond to user inquiries with insightful and accurate information.
- Integrate the chatbot into a user-friendly GUI making it readily available to material scientists and educational institutions.

## Prototype Status
We currently have one batch-based fine-tuning code that utilizes prompts to guide GPT-4 to learn from data entries of the high entropy alloy dataset. It can generate synthesis data based on a user-specified number of entries. The other interface is a GPT-4 chatbot which is fine-tuned by supervised reinforcement and provided with the dataset as knowledge to enable users to interact directly and generate synthetic data of their choice. Our other code focuses on machine learning for the prediction of hydrogen content in high-entropy alloys. The goal is to create a GUI interface which links all these individual functionalities into a single web-based platform that can enable synthetic data generation and ML runs at the same time. The pseudocode for the GUI interface and all other functionalities are available in our GitHub repo.

# Link to YouTube: [Link](https://www.youtube.com/watch?v=QrDf6nPrdsI)

# Link to prototype GPT-4 based chatbox: [Link](https://chatgpt.com/g/g-Qhsefy8rQ-alloy-insight-guide)