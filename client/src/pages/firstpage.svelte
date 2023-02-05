

<main class="main-content">
    <div class="image-main">
        <img src="./img/img-greetings.svg" alt="">
    </div>
    <div class="content-bottom">
        <div class="text-greetings">
            <h1>Seja muito bem-vindo(a)!</h1>
            <h2>Pipipipopopopo</h2>
        </div>
        <div class="buttons">
            <button class="login-btn">
                Fazer login
            </button>
            <button class="register-btn">
                Criar uma conta
            </button>
        </div>
    </div>
    
</main>

<style>
    .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        gap: 48px;
        padding: 91px 0;
        max-width: 296px;
        margin: auto;
        min-height: calc(100vh - 91px * 2);
    }
    .image-main, .image-main img {
        width: 100vw;
        max-width: 500px;
    }

    .text-greetings {
        text-align: center;
    }

    .buttons {
        display: flex;
        background-color: #F0F1F2;
        border: 1px solid #FFFFFF;
    }
    .buttons button {
        padding: 15px 22px;
        width: 50%;
        border: none;
        
    }
    .login-btn {
        background-color: #FFF;
        border-radius: 9px;

    }
    .register-btn {
        padding-left: 10px !important;
    }
    .content-bottom {
        display: flex;
        flex-direction: column;
        gap: 97px;
    }
</style>