import Vue from 'vue';
import Component from "nuxt-class-component";

@Component({
  data() {
    return {
      kata: '',
      artiData: [],
    }
  }
})
export default class DictionaryController extends Vue {

  // async mounted() {
  //   this.load();
  // }

  // async load() {
    // const response = await this.$axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.$data.kata}`)
    // this.$data.artiData = response
  // }
  async load() {
    this.$data.artiData = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${this.$data.kata}`
    ).then(res => res.json())

    const result = this.$data.artiData.map((x:any) => x.phonetics.map((data: any) => data.audio))
    console.log(result)
  }

  get arti() {

    // if (this.isArray(this.$data.artiData) === true){
    //   return this.$data.artiData.map((x:any) => x.phonetics)
    // } else{
    //   return false
    // }
      // const datas = this.$data.artiData.map((y: any) => y.data)
    // const dataArti= data.data.map((x:any) => {x.arti})
    // return datas
    const result = this.$data.artiData.map((x:any) => x.phonetics)
    return result
  }

  isArray(x: any) {
    const result = Array.isArray(x) ? true : false
    return result
    console.log(result); // 👉️ []
  }
}
