<template>
  <div>
    <section class="hero is-fullheight has-carousel">
      <!-- Images -->
      <b-carousel
        :arrow="arrow"
        :arrow-both="arrowBoth"
        :arrow-hover="arrowHover"
        :indicator="indicator"
        :indicator-background="indicatorBackground"
        :animated="animated"
        :interval="interval"
        :indicator-inside="indicatorInside"
        :indicator-mode="indicatorMode"
        :indicator-style="indicatorStyle"
        :autoplay="autoplay"
      >
        <b-carousel-item
          v-for="(item, i) in carousels"
          :key="i"
          class="has-background"
        >
          <LazyImage
            :srcData="item.img"
            fetchMode="srcset"
            extraCss="is-background is-overlay"
          />
        </b-carousel-item>
      </b-carousel>

      <div class="hero-head">
        <b-navbar>
          <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img src="~/assets/brand/vaes logo.svg" alt="Grondwerken Vaes" />
            </b-navbar-item>
          </template>
          <template slot="start">
            <b-navbar-item href="#">
              Home
            </b-navbar-item>
            <b-navbar-item href="#">
              Activiteiten
            </b-navbar-item>
            <b-navbar-item href="#">
              Bedrijf
            </b-navbar-item>
          </template>

          <template slot="end">
            <b-navbar-item tag="div">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Contact</strong>
                </a>
              </div>
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>

      <div class="hero-body">
        <div class="container">
          <div class="content"></div>
        </div>
      </div>
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
                <p class="has-text-justified">
                  Stop met zoeken! Met een ruim aanbod aan activiteiten en
                  decennialange ervaring, bent u bij ons aan het juiste adres.
                  Of het nu gaat over het uitgraven van een zwembad, plaatsen
                  van een put of het afbreken van een (bij)gebouw, wij staan
                  voor u klaar.
                </p>
                <p class="has-text-justified">
                  Neem gerust een kijkje op onze website om enkele van onze
                  projecten te bekijken of om het bedrijf beter te leren kennen.
                  Indien u met een degelijke grondwerker in zee wil gaan, neem
                  dan zeker contact op voor een vrijblijvende offerte!
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
                  <div class="agency-icon-box" data-aos="zoom-in">
                    <i class="im im-icon-Worker"></i>

                    <div class="box-title">Grondwerken</div>
                  </div>
                </div>
                <!-- Icon block -->
                <div class="column is-6">
                  <div
                    class="agency-icon-box"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <i class="im im-icon-Hammer"></i>

                    <div class="box-title">Afbraakwerken</div>
                  </div>
                </div>
                <!-- Icon block -->
                <div class="column is-6">
                  <div
                    class="agency-icon-box"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <i class="im im-icon-Truck"></i>

                    <div class="box-title">Transport</div>
                  </div>
                </div>
                <!-- Icon block -->
                <div class="column is-6">
                  <div
                    class="agency-icon-box"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <i class="im im-icon-Landscape"></i>

                    <div class="box-title">Divers</div>
                  </div>
                </div>
                <!-- Icon block -->
                <div class="column is-6">
                  <div
                    class="agency-icon-box"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <i class="im im-icon-Gears"></i>

                    <div class="box-title">Machineverhuur</div>
                  </div>
                </div>
                <!-- Icon block -->
                <div class="column is-6">
                  <div
                    class="agency-icon-box"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <i class="im im-icon-Split-FourSquareWindow"></i>
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

  mounted() {}

  data() {
    return {
      arrow: true,
      arrowBoth: true,
      arrowHover: true,
      indicator: true,
      indicatorBackground: true,
      indicatorInside: true,
      indicatorMode: 'click',
      indicatorStyle: 'is-lines',
      animated: 'slide',
      interval: 3000,
      autoplay: true,
      carousels: [
        { title: 'Slide 1', color: 'info', img: 'home/header/0_Logo.jpeg' },
        {
          title: 'Slide 2',
          color: 'success',
          img: 'home/header/1_Greenville.jpeg'
        },
        {
          title: 'Slide 3',
          color: 'warning',
          img: 'home/header/2_Afbraak.jpeg'
        },
        {
          title: 'Slide 4',
          color: 'danger',
          img: 'home/header/3_Kelder_(liftput).jpeg'
        },
        {
          title: 'Slide 5',
          color: 'danger',
          img: 'home/header/4_Transport.jpeg'
        },
        {
          title: 'Slide 6',
          color: 'danger',
          img: 'home/header/5_Zeven.jpeg'
        },
        {
          title: 'Slide 7',
          color: 'danger',
          img: 'home/header/6_Opruimen.jpeg'
        },
        {
          title: 'Slide 8',
          color: 'danger',
          img: 'home/header/7_Aanvullen_kelder.jpeg'
        },
        {
          title: 'Slide 9',
          color: 'danger',
          img: 'home/header/8_Afbraak.jpeg'
        },
        {
          title: 'Slide 10',
          color: 'danger',
          img: 'home/header/9_Bandenkranen.jpeg'
        }
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
<style lang="scss">
#thanks {
  background-color: #fff;
}
#thanks::after {
  content: none;
}
#thanks div {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.carousel {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: auto;
  border: none;
  margin: auto;
  padding: 0;
  z-index: 0;
}

.hero.has-carousel .carousel .carousel-list {
  height: auto !important;
}
.hero-carousel .carousel {
  width: 100%;
  position: relative;
  border: none;
  display: flex;
  margin: 0;
  padding: 0;
  left: -100%;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
</style>
