    var app = new Vue({
      el: "#app",
      data: {
        mTitre: 'Lucky Seven',
        mNombredeValeur: 3,
        mModeTriche: false,
        mTirageIndicateur: false ,
        mPartieEstGagnee: false,
        mCompteur:0,
        mScore: 0

      },
      // TODO GESTION DES ERREURS AVEC TRY CATCH
      methods:{
        initialiserPartie(){
          this.mPartieEstGagnee = false;
          this.mCompteur=0 
          },
        jouer(pTriche = false){
          this.initialiserPartie();
          pTriche ? this.mModeTriche = true : this.mModeTriche = false;
          this.mTirageIndicateur = !this.mTirageIndicateur;
        },
        regarderSiGagnant(){
          this.mCompteur++;
          this.declarerPartieVictorieuse();
        },
        declarerPartieVictorieuse(){
          this.mCompteur === this.mNombredeValeur ? (this.mPartieEstGagnee = true, this.mScore++) : this.mPartieEstGagnee = false;
        }
      },
    })