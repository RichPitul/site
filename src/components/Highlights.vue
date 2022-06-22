<template>
    <section>
        <article>
            <h3>Developed over 200 websites/applications for professional sports teams worldwide.</h3>
            <p>At Channel 1 Media, I have worked with teams in all professional sports leagues in North America; including the NFL, NHL, MLB, NBA, MLS and Collegiate properties across the United States. I have also worked with professional soccer teams in the UK; Europe; and UAE.</p>
        </article>
        <article>
            <h3>Developed Appointment Booking/Scheduling Systems.</h3>
            <p>Created booking systems for sports organizations including UBS Arena, Crew Stadium, Seattle Kraken, and the Phoenix Suns to allow clients and service reps to book appointments with each other.</p>
        </article>
        <article>
            <h3>Developed touchscreen presentations.</h3>
            <p>Using Electron JS and Capacitor JS; previously using Adobe Air; created cross-platform touchscreen presentations for presentation centers for the Columbus Crew, Seattle Kraken, FC Cincinatti, and Cleveland Cavaliers.</p>
        </article>
        <article>
            <h3>Migrated to AWS/Google Cloud.</h3>
            <p>Behind a strategic move to migrate Channel 1's business to AWS/Google Cloud services to decrease costs and increase security/up time of Channel 1's websites.</p>
        </article>
        <article>
            <h3>Co-created a cross platform mobile and desktop presentation system.</h3>
            <p>Integrated services, apis, and custom software together into a single product called ePitch.</p>
        </article>
        <article>
            <h3>Created for iOS and the web; sales data applications for Legends Global Sales.</h3>
            <p>For numerous collegiate properties and LASED; developed iOS app and admin panel to share sales and important data to ownership.</p>
        </article>   
    </section> 
</template>

<script>
export default {
    name:'Highlights'
}
</script>

<style lang="scss" scoped>
    section {
     display: grid;
     grid-template-columns: 1fr;
     overflow: hidden;
     @media (min-width:600px) {
        grid-template-columns: repeat(2, 50vw);    
     }
     @media (min-width:1000px) {
        grid-template-columns: repeat(3, calc(100vw / 3));
     }
     
     article {
         padding:2em;
     }   
    }
</style>