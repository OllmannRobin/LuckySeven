Vue.component('vjcNombre', {
  props:['mTirageIndicateur', 'mModeTriche', 'mPartieEstGagnee'],
  data:function(){
    return{
      mValeurDuNombre: 0,
      mValeurMaximaleNombre:9,
      mQuantiteDeNombre: 3,
      mCibleQuiDoitEtreAtteindre: 7,
      mNombreEstVictorieux: false,
    }
  },
  
  template:'<span v-bind:class="{victoire :this.mNombreEstVictorieux, nombre:true} ">{{this.mValeurDuNombre}}</span>',
  methods:{
    tirerNombre(){
      this.mModeTriche ? this.mValeurDuNombre = this.mCibleQuiDoitEtreAtteindre : this.mValeurDuNombre = Math.floor(Math.random()*Math.floor(this.mValeurMaximaleNombre));
      this.estGagnant();
  },
    estGagnant(){
      this.mValeurDuNombre === this.mCibleQuiDoitEtreAtteindre ? ( this.mNombreEstVictorieux = true, this.$emit('on-gagnant', true)) : this.mNombreEstVictorieux = false }
  },
  watch:{
    mTirageIndicateur: function(){
      this.tirerNombre(); 
    }
  },
})