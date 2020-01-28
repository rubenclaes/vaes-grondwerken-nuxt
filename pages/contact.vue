---
layout: default
title: Contact
---

<div
  class="hero parallax is-cover is-relative is-default is-bold"
  data-background="assets/images/headers/Beton.jpg"
  data-color="#000"
  data-color-opacity="0.3"
>
  {{> navbar-fade}}

  <!-- Hero image -->
  <div id="main-hero" class="hero-body ">
    <div class="container has-text-centered">
      <div class="columns">
        <!-- Page Heading -->
        <div
          class="column is-6 is-offset-3 has-text-centered is-header-caption"
        >
          <h1 class="title main-title subpage-title text-bold is-2">
            CONTACTEER ONS
          </h1>
          <h2 class="subtitle is-4 light-text pt-20"></h2>
          <br />
        </div>
      </div>
    </div>
  </div>
  <!-- /Hero image -->
</div>
<!-- /Hero and nav -->

<!-- Contact details section -->
<div class="section is-medium">
  <div class="container">
    <div class="centered-title">
      <h2>Algemene onderneming Rudi Vaes nv</h2>
      <div class="title-divider"></div>
      <div class="subheading">
        <div class="icon">
          <i class="im im-icon-Map-Marker"></i>
        </div>
        Industrieweg-Zuid 1308
        <br />
        3520 Zonhoven
        <br />
        BTW BE0472 395 047
      </div>
    </div>
  </div>
</div>
<!-- /Contact details section -->

<!-- Map and contact form section -->
<div class="section no-padding">
  <div class="container is-fluid no-margin">
    <div class="columns is-gapless is-not-tablet-portrait">
      <!-- Contact form -->
      <div class="column is-6">
        <div class="contact-form-wrapper">
          <h2 class="form-title has-text-centered is-size-4-mobile">
            Laat een bericht achter
          </h2>

          <div class="column is-6 is-offset-3 has-text-centered">
            <!-- Contact info -->
            <div class="content">
              <!-- Card -->
              <div
                class="flex-card contact-card light-bordered hover-inset padding-15"
              >
                <div class="contact-info">
                  <div class="contact-name"></div>
                  <div class="contact-details">
                    <span class="details-text"
                      ><b>
                        <a href="mailto:info@vaes-grondwerken.be?Subject=Info">
                          <div class="icon">
                            <div class="icon">
                              <i class="im im-icon-Email"></i>
                            </div>
                          </div>
                          info@vaes-grondwerken.be</a
                        ></b
                      ></span
                    >
                  </div>
                </div>
              </div>
              <div
                class="flex-card contact-card light-bordered hover-inset padding-15"
              >
                <div class="contact-info">
                  <div class="contact-name"></div>
                  <div class="contact-details">
                    <span class="details-text">
                      <div class="icon">
                        <i class="im im-icon-Phone-Wifi"></i>
                      </div>
                      <b>0475 428 753 - Rudi Vaes</b>
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="flex-card contact-card light-bordered hover-inset padding-15"
              >
                <div class="contact-info">
                  <div class="contact-name"></div>
                  <div class="contact-details">
                    <span class="details-text">
                      <div class="icon">
                        <i class="im im-icon-Phone-Wifi"></i>
                      </div>
                      <b>0473 966 189 - Nick Vaes</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Contact form -->

      <!-- Google map -->
      <div class="column">
        <div id="half-map" class="half-map"></div>
      </div>
      <!-- /Google map -->
    </div>
  </div>
</div>
<!-- /Map and contact form section -->

{{> footer-dark}}
