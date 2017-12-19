<template>
    <section>
        <parallax>
            <parallax-group :z-index="5">
                <parallax-layer class="section-header bg-1">
                    <div class="container h-100">
                        <div class="h-100 w-100 row align-items-center">
                            <div class="col-md col-sm-12">
                                <h1>Tradelogistik-yug</h1>
                            </div>
                            <div class="col-md col-sm-12">
                                <h1>Что это такое</h1>
                            </div>
                        </div>
                    </div>
                </parallax-layer>
            </parallax-group>

            <parallax-group :z-index="4">
                <parallax-layer class="bg-2">
                    <div class="container h-100">
                        <div class="h-100 row justify-content-end align-items-center">
                            <div class="col-md col-sm-12 bg-primary-alpha">
                                <h1 class="font-accent">Вдохновляющий текст</h1>
                            </div>
                        </div>
                    </div>
                </parallax-layer>
                <parallax-layer depth="back" scale="back" class="bg-2-back">
                </parallax-layer>
            </parallax-group>

            <parallax-group :z-index="4">
                <parallax-layer class="bg-1">
                    <div class="container h-100">
                        <div class="h-100 w-100 row justify-content-center align-items-center">
                            <div class="col-md col-sm-12">
                                <h1>Бла бла бла</h1>
                            </div>
                        </div>
                    </div>
                </parallax-layer>
                <parallax-layer depth="fore" scale="fore" class="">
                    <div class="container h-100">
                        <div class="h-100 w-100 row justify-content-start align-items-center">
                            <div class="col-4">
                                <!--<img src="~assets/img/s.png" class="s2 w-50"/>-->
                            </div>
                        </div>
                    </div>
                </parallax-layer>
                <parallax-layer :depth="200" :scale="0.3" class="">
                    <div class="container h-100">
                        <div class="h-100 w-100 row justify-content-start align-items-center">
                            <div class="col-4">
                                <!--<img src="~assets/img/s.png" class="s1 blur-2"/>-->
                            </div>
                        </div>
                    </div>
                </parallax-layer>
            </parallax-group>

            <parallax-group :z-index="3">
                <parallax-layer depth="deep" scale="deep" class="bg-4-deep">
                </parallax-layer>
                <parallax-layer class="">
                </parallax-layer>
            </parallax-group>

            <parallax-group :z-index="5">
                <parallax-layer class="bg-footer">
                    <div class="container h-100">
                        <div class="h-100 w-100 row justify-content-center align-items-center">
                            <div class="col-md col-sm-12">
                                <h1 class="font-accent">Footer</h1>
                            </div>
                        </div>
                    </div>
                </parallax-layer>
            </parallax-group>
        </parallax>
    </section>
</template>

<script>
  import Parallax from '../components/Parallax'
  import ParallaxGroup from '../components/ParallaxGroup'
  import ParallaxLayer from '../components/ParallaxLayer'

  export default {
    name: 'app',
    components: {
      Parallax,
      ParallaxGroup,
      ParallaxLayer
    }
  }
</script>

<style>
    html, body
    {
        background-color: #00f;
        color: #fff;
        letter-spacing: 0.5px;
        font-size: 16px;
        height: 100vh;
        margin: 0;
    }

    footer
    {
        padding: 20px;
        text-align: center;
        border-top: 1px solid #ddd;
    }

    a, a:hover, a:focus, a:visited
    {
        color: #000;
    }

    .font-accent {
        color: #0af;
    }

    .logo {
        width: 100%;
        height: auto;
        max-width: 400px;
        max-height: 289px;
    }

    .section-header {
        font-size: 14px;
    }
    .bg-1 {
        background: #ff0;
    }
    .bg-2-back {
        /*background: url('~assets/img/cart.jpg') center center no-repeat;*/
        /*background-size: cover;*/
    }
    .bg-3 {
        background: #f0f;
    }
    .bg-4-deep {
        /*background: url('~assets/img/12.jpg') center center no-repeat;*/
        background-size: cover;
    }

    .bg-primary-alpha {
        background: rgba(201, 154, 132, .7);
    }

    .bg-footer {
        background: #d20;
    }
</style>
