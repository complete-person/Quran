<template>
  <div class="rabbana-duas">
    <div class="title">Rabbana duas</div>
    <div class="main">
      <div v-for="dua in duas" :key="dua.id" class="dua">
        <div class="dua__inner arb">
          {{dua.arb}}
        </div>
        <div class="dua__inner eng">
          {{dua.id}}. {{dua.translation}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        duas: [
            {   
                id: 1,
                arb: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ العَلِيمُ",
                translation: "Our Lord! Accept (this service) from us: For Thou art the All-Hearing, the All-knowing [2:127]"
            },
            {
                id: 2,
                arb: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ",
                translation: "Our Lord! Make of us Muslims, bowing to Thy (Will), and of our progeny a people Muslim, bowing to Thy (will); and show us our place for the celebration of (due) rites; and turn unto us (in Mercy); for Thou art the Oft-Returning, Most Merciful [2:128]"
            },
            {
                id: 3,
                arb: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
                translation: "Our Lord! Grant us good in this world and good in the hereafter, and save us from the chastisement of the fire [2:201]"
            },
            {
                id: 4,
                arb: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْراً وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى القَوْمِ الكَافِرِينَ",
                translation: "Our Lord! Bestow on us endurance, make our foothold sure, and give us help against the disbelieving folk [2:250]"
            
            },
            {
                id: 5,
                arb: "رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
                translation: "Our Lord! Condemn us not if we forget or fall into error [2:286]"
            
            },
            {
                id: 6,
                arb: "رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا",
                translation: "Our Lord! Lay not on us a burden Like that which Thou didst lay on those before us [2:286]"
            
            },
            {
                id: 7,
                arb: "رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
                translation: "Our Lord! Lay not on us a burden greater than we have strength to bear. Blot out our sins, and grant us forgiveness. Have mercy on us. Thou art our Protector; Help us against those who stand against faith [2:286]"
            },
            {
                id: 8,
                arb: "رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ",
                translation: "Our Lord! (they say), Let not our hearts deviate now after Thou hast guided us, but grant us mercy from Thine own Presence; for Thou art the Grantor of bounties without measure [3:8]"
            },
            {
                id: 9,
                arb: "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لاَّ رَيْبَ فِيهِ إِنَّ اللّهَ لاَ يُخْلِفُ الْمِيعَادَ",
                translation: "Our Lord! Thou art He that will gather mankind Together against a day about which there is no doubt; for Allah never fails in His promise. [3:9]"
            },
            {
                id: 10,
                arb: "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
                translation: "Our Lord! We have indeed believed: forgive us, then, our sins, and save us from the agony of the Fire [3:16]"
            },
            {
                id: 11,
                arb: "رَبَّنَآ ءَامَنَّا بِمَآ أَنزَلْتَ وَٱتَّبَعْنَا ٱلرَّسُولَ فَٱكْتُبْنَا مَعَ ٱلشَّٰهِدِينَ",
                translation: "Our Lord! We believe in what Thou hast revealed, and we follow the Messenger. Then write us down among those who bear witness [3:53]"
            },
            {
                id: 12,
                arb: "ربَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَِ",
                translation: "Our Lord! Forgive us our sins and anything We may have done that transgressed our duty: Establish our feet firmly, and help us against those that resist Faith [3:147]"
            },
            {
                id: 13,
                arb: "رَبَّنَا مَا خَلَقْتَ هَذا بَاطِلاً سُبْحَانَكَ فَقِنَا عَذَابَ النَّا",
                translation: "Our Lord! Not for naught Hast Thou created (all) this! Glory to Thee! Give us salvation from the penalty of the Fire [3:191]"
            },
            {
                id: 14,
                arb: "رَبَّنَا إِنَّكَ مَن تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ",
                translation: "Our Lord! Any whom Thou dost admit to the Fire, Truly Thou coverest with shame, and never will wrong-doers Find any helpers! [3:192]"
            },
            {
                id: 15,
                arb: "رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلإِيمَانِ أَنْ آمِنُواْ بِرَبِّكُمْ فَآمَنَّا",
                translation: "Our Lord! We have heard the call of one calling (Us) to Faith, 'Believe ye in the Lord,' and we have believed [3:193]"
            },
            {
                id: 16,
                arb: "رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأبْرَارِ",
                translation: "Our Lord! Forgive us our sins, blot out from us our iniquities, and take to Thyself our souls in the company of the righteous [3:193]"
            },
            {
                id: 17,
                arb: "رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَاد",
                translation: "Our Lord! Grant us what Thou didst promise unto us through Thine apostles, and save us from shame on the Day of Judgment: For Thou never breakest Thy promise [3:194]"
            },
            {
                id: 18,
                arb: "رَبَّنَا آمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
                translation: "Our Lord! We believe; write us down among the witnesses [5:83]"
            },
            {
                id: 19,
                arb: "رَبَّنَا أَنزِلْ عَلَيْنَا مَآئِدَةً مِّنَ السَّمَاء تَكُونُ لَنَا عِيداً لِّأَوَّلِنَا وَآخِرِنَا وَآيَةً مِّنكَ وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ",
                translation: "O Allah our Lord! Send us from heaven a table set (with viands), that there may be for us - for the first and the last of us - a solemn festival and a sign from thee; and provide for our sustenance, for thou art the best Sustainer (of our needs) [5:114]"
            },
            {
                id: 20,
                arb: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
                translation: "Our Lord! We have wronged our own souls: If thou forgive us not and bestow not upon us Thy Mercy, we shall certainly be lost [7:23]"
            },
            {
                id: 21,
                arb: "رَبَّنَا لاَ تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ",
                translation: "Our Lord! Send us not to the company of the wrong-doers [7:47]"
            },
            {
                id: 22,
                arb: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ",
                translation: "Our Lord! Decide Thou between us and our people in truth, for Thou art the best to decide [7:89]"
            },
            {
                id: 23,
                arb: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
                translation: "Our Lord! Pour out on us patience and constancy, and take our souls unto thee as Muslims (who bow to thy will) [7:126]"
            },
            {
                id: 24,
                arb: "رَبَّنَا لاَ تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ ; وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ",
                translation: "Our Lord! Make us not a trial for those who practise oppression; And deliver us by Thy Mercy from those who reject (Thee) [10:85-86]"
            },
            {
                id: 25,
                arb: "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ وَمَا يَخْفَى عَلَى اللّهِ مِن شَيْءٍ فَي الأَرْضِ وَلاَ فِي السَّمَاء",
                translation: "O our Lord! Truly Thou dost know what we conceal and what we reveal: for nothing whatever is hidden from Allah, whether on earth or in heaven [14:38]"
            },
            {
                id: 26,
                arb: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
                translation: "O my Lord! make me one who establishes regular Prayer, and also (raise such) among my offspring O our Lord! and accept Thou my Prayer [14:40]"
            },
            {
                id: 27,
                arb: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
                translation: "O our Lord! Cover (us) with Thy Forgiveness - me, my parents, and (all) Believers, on the Day that the Reckoning will be established! [14:41]"
            },
            {
                id: 28,
                arb: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
                translation: "Our Lord! Bestow on us Mercy from Thyself, and dispose of our affair for us in the right way! [18:10]"
            },
            {
                id: 29,
                arb: "رَبَّنَا إِنَّنَا نَخَافُ أَن يَفْرُطَ عَلَيْنَا أَوْ أَن يَطْغَى",
                translation: "Our Lord! We fear lest he hasten with insolence against us, or lest he transgress all bounds [20: 45]"
            },
            {
                id: 30,
                arb: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
                translation: "Our Lord! We believe; then do Thou forgive us, and have mercy upon us: For Thou art the Best of those who show mercy [23: 109]"
            },
            {
                id: 31,
                arb: "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا إِنَّهَا سَاءتْ مُسْتَقَرًّا وَمُقَامًا",
                translation: "Our Lord! Avert from us the Wrath of Hell, for its Wrath is indeed an affliction grievous,- Evil indeed is it as an abode, and as a place to rest in [25: 65-66]"
            },
            {
                id: 32,
                arb: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
                translation: "O my Lord! Grant unto us wives and offspring who will be the comfort of our eyes, and give us (the grace) to lead the righteous [25:74]"
            },
            {
                id: 33,
                arb: "رَبَّنَا لَغَفُورٌ شَكُورٌ",
                translation: "Our Lord is indeed Oft-Forgiving Ready to appreciate (service) [35: 34]"
            },
            {
                id: 34,
                arb: "آمَنُوا رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ وَقِهِمْ عَذَابَ الْجَحِيمِ",
                translation: "Our Lord! Thy Reach is over all things, in Mercy and Knowledge. Forgive, then, those who turn in Repentance, and follow Thy Path; and preserve them from the Penalty of the Blazing Fire! [40:7]"
            },
            {
                id: 35,
                arb: "رَبَّنَا وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ الَّتِي وَعَدتَّهُم وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ وَقِهِمُ السَّيِّئَاتِ وَمَن تَقِ السَّيِّئَاتِ يَوْمَئِذٍ فَقَدْ رَحِمْتَهُ وَذَلِكَ هُوَ الْفَوْزُ الْعَظِيمُ",
                translation: "And grant, our Lord! that they enter the Gardens of Eternity, which Thou hast promised to them, and to the righteous among their fathers, their wives, and their posterity! For Thou art (He), the Exalted in Might, Full of Wisdom. And preserve them from (all) ills; and any whom Thou dost preserve from ills that Day,- on them wilt Thou have bestowed Mercy indeed: and that will be truly (for them) the highest Achievement [40:8-9]"
            },
            {
                id: 36,
                arb: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا",
                translation: "Our Lord! Forgive us, and our brethren who came before us into the Faith, and leave not, in our hearts, rancour (or sense of injury) against those who have believed [59:10]"
            },
            {
                id: 37,
                arb: "رَبَّنَا إِنَّكَ رَؤُوفٌ رَّحِيمٌ",
                translation: "Our Lord! Thou art indeed Full of Kindness, Most Merciful [59:10]"
            },
            {
                id: 38,
                arb: "رَّبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
                translation: "Our Lord! In Thee do we trust, and to Thee do we turn in repentance: to Thee is (our) Final Goal [60:4]"
            },
            {
                id: 39,
                arb: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
                translation: "Our Lord! Make us not a (test and) trial for the Unbelievers, but forgive us, our Lord! for Thou art the Exalted in Might, the Wise [60:5]"
            },
            {
                id: 40,
                arb: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
                translation: "Our Lord! Perfect our Light for us, and grant us Forgiveness: for Thou hast power over all things [66:8]"
            }
        ] 
    }
  },
}
</script>

<style scoped>
  .title {
    text-align: center;
    padding: 20px 0;
    color: var(--dark);
    font-size: 30px;
    font-weight: bold;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(5px);
  }
  .main {
    max-width: 800px;
    margin: 0 auto;
  }
  .dua {
    width: 100%;
    color: var(--dark);
    font-size: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .eng {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 45px;
  }
  .arb {
    text-align: right;
    background-color: var(--dark);
    padding: 40px;
    color: #fff;
    border-radius: 4px;
  }
  @media all and (max-width: 800px) {
    .main {
      padding: 0 50px;
    }
    .arb {
      font-size: 20px;
    }
  }
</style>