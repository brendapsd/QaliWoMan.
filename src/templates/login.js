import { ingresarConGoogleClick, ingresarConFacebookClick} from '../view-controller.js'

export const iniciarSesion = () => {
  const formIniciar = document.createElement('section');
  const formLogin = `
  <!-- Masthead -->
  <header class="masthead text-white text-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h1 class="mb-5">QaLiWoMan</h1>
        </div>
        <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div class="form-row">
              <div class="col-12 col-md-9 mb-2 mb-md-0">
                <input type="email" class="form-control form-control-lg" placeholder="Ingresa el nombre de tu TeamFamily......">
              </div>
              <div class="col-6 col-md-12">
                <button type="submit" id='btn-google' class="btn  btn-primary btn-lg btn-primary">Goole</button>
              </div>
              <br>
              <div class="col-6 col-md-12">
                <button type="submit" id='btn-facebook' class="btn btn-block btn-lg btn-primary">Facebook</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
  
  <!-- Footer -->
  <footer class="footer bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 h-100 text-center text-lg-left my-auto">
          <p class="text-muted small mb-4 mb-lg-0">By Lucero-Betsy-Brenda</p>
        </div>
      </div>
    </div>
  </footer>
  
  `;
  formIniciar.innerHTML = formLogin;
    
 
  // Inicia sesion con cuenta Google
  const btnGoogle = formIniciar.querySelector('#btn-google');
  btnGoogle.addEventListener('click', ingresarConGoogleClick);

  // Inicia sesion con cuenta Facebook
  const btnFacebook = formIniciar.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', ingresarConFacebookClick);

 
  
  return formIniciar;
};
