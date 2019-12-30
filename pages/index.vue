<template>
  <div>
    <div class="hero is-cover is-relative is-fullheigt is-default is-bold">
      <!-- Hero and nav -->

      <section>
        <b-carousel
          :indicator="indicator"
          :animated="animated"
          :interval="interval"
          :indicator-inside="indicatorInside"
          :indicator-mode="indicatorMode"
          :indicator-style="indicatorStyle"
        >
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-medium is-${carousel.color}`">
              <LazyImage srcData="home/header/0_Logo.jpeg" fetchMode="srcset" />
            </section>
          </b-carousel-item>
        </b-carousel>
      </section>

      <!-- About section -->
      <section id="services" class="section section-feature-grey is-medium">
        <div id="readmore" class="container">
          <div class="centered-title">
            <h2>Leer ons kennen!</h2>
            <div class="title-divider"></div>
            <div class="subheading">
              Heeft u een bouwproject, maar nog geen aannemer?
            </div>
          </div>

          <div class="content-wrapper">
            <div class="columns">
              <!-- Content -->
              <div class="column is-4">
                <div class="service-box">
                  <div class="title-divider"></div>

                  <p class="has-text-justified">
                    Stop met zoeken! Met een ruim aanbod aan activiteiten en
                    decennialange ervaring, bent u bij ons aan het juiste adres.
                    Of het nu gaat over het uitgraven van een zwembad, plaatsen
                    van een put of het afbreken van een (bij)gebouw, wij staan
                    voor u klaar.
                  </p>
                  <p class="has-text-justified">
                    Neem gerust een kijkje op onze website om enkele van onze
                    projecten te bekijken of om het bedrijf beter te leren
                    kennen. Indien u met een degelijke grondwerker in zee wil
                    gaan, neem dan zeker contact op voor een vrijblijvende
                    offerte!
                  </p>
                  <div class="action">
                    <a
                      href="/activiteiten"
                      class="button btn-align button-cta raised rounded primary-btn is-bold"
                      >Activiteiten</a
                    >
                  </div>
                </div>
              </div>
              <!-- Icons -->
              <div class="column is-7 is-offset-1">
                <div class="columns is-vcentered is-multiline">
                  <!-- Icon block -->
                  <div class="column is-6">
                    <div class="agency-icon-box">
                      <div class="is-icon-reveal">
                        <i class="im im-icon-Worker"></i>
                      </div>
                      <div class="box-title">Grondwerken</div>
                    </div>
                  </div>
                  <!-- Icon block -->
                  <div class="column is-6">
                    <div class="agency-icon-box">
                      <div class="is-icon-reveal">
                        <i class="im im-icon-Hammer"></i>
                      </div>
                      <div class="box-title">Afbraakwerken</div>
                    </div>
                  </div>
                  <!-- Icon block -->
                  <div class="column is-6">
                    <div class="agency-icon-box">
                      <div class="is-icon-reveal">
                        <i class="im im-icon-Truck"></i>
                      </div>
                      <div class="box-title">Transport</div>
                    </div>
                  </div>
                  <!-- Icon block -->
                  <div class="column is-6">
                    <div class="agency-icon-box">
                      <div class="is-icon-reveal">
                        <i class="im im-icon-Landscape"></i>
                      </div>
                      <div class="box-title">Divers</div>
                    </div>
                  </div>
                  <!-- Icon block -->
                  <div class="column is-6">
                    <div class="agency-icon-box">
                      <div class="is-icon-reveal">
                        <i class="im im-icon-Gears"></i>
                      </div>
                      <div class="box-title">Machineverhuur</div>
                    </div>
                  </div>
                  <!-- Icon block -->
                  <div class="column is-6">
                    <div class="agency-icon-box">
                      <div class="is-icon-reveal">
                        <i
                          class="im 
                                    im-icon-Split-FourSquareWindow"
                        ></i>
                      </div>
                      <div class="box-title">Containerverhuur</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Icons -->
            </div>
          </div>
        </div>
      </section>
      <!-- /About section -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  layout: 'default',

  components: {
    LazyImage: () => import('@/components/LazyImage.vue')
  }
})
export default class IndexPage extends Vue {
  private title = 'Home';

  head() {
    return {
      title: this.title
    };
  }

  data() {
    return {
      indicator: true,
      indicatorInside: true,
      indicatorMode: 'hover',
      indicatorStyle: 'is-lines',
      animated: 'fade',
      interval: 3000,
      carousels: [
        { title: 'Slide 1', color: 'info', img: '0 Logo.JPG' },
        { title: 'Slide 2', color: 'success', img: '1 Greenville.jpg' },
        { title: 'Slide 3', color: 'warning', img: '2 Afbraak.JPG' },
        { title: 'Slide 4', color: 'danger', img: '3 Kelder (liftput).jpg' }
      ]
    };
  }

  getImgUrl(value) {
    return `https://picsum.photos/id/43${value}/1230/500`;
  }

  scrollToHash() {
    var hash = this.$nuxt.$route.hash;
    this.$nextTick(() => {
      this.$scrollTo(hash, 0, { offset: -120 });
    });
  }
}
</script>
<style></style>
