<template>
    <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <b-icon icon="question-octagon" animation="throb" font-scale="2" style="color: var(--light-primary);"></b-icon>
          </div>
          <div class="modal-body">
            <p>{{ message }}</p>
          </div>
          <div class="modal-footer">
            <button class="modal-button" @click="closeModal">Fechar</button>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
      },
    },
    methods: {
      /* Função para fechar o modal ao apertar o botão. */
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    transition: all 500ms;
  }
  
  .modal-dialog {
    margin: 0;
  }
  
  .modal-content {
    width: 400px;
    background-color: var(--white);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 0 16px 4px var(--light-shadow);
  }
  
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
  }
  
  .modal-title {
    font-weight: bold;
    font-size: 20px;
    margin: 0;
  }
  
  .modal-body {
    text-align: center;
  }

  .modal-body p {
    font-weight: 700;
    margin: 0;
  }
  
  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }

  .modal-button {
    height: auto;
    width: 50%;
    border: none;

    background-color: var(--light-primary);

    box-shadow: 0 0 12px 4px var(--light-shadow);

    letter-spacing: 1px;
    font-weight: 700;

    padding: 8px 0;
    border-radius: 8px;

    transition: all 400ms;
  }

  .modal-button:hover {
    background-color: var(--dark-primary);
  }

  @media (max-width: 768px) {
    .modal-content {
        width: 300px;
    }
  }
  </style>