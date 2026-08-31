export interface QuoteItem {
  id: string;
  categoryKey: string;
  categoryTa: string;
  categoryEn: string;
  emoji: string;
  tagTa?: string;
  tagEn?: string;
  quoteTa: string;
  quoteEn: string;
  meaningTa: string;
  meaningEn: string;
  relatedPoemSlug?: string;
  relatedPoemTitleTa?: string;
  relatedPoemTitleEn?: string;
}

export const sampleQuotes: QuoteItem[] = [
  {
    id: 'q11',
    categoryKey: 'book-voice',
    categoryTa: 'புத்தகம் தன்னைப் பற்றி...',
    categoryEn: 'The Book Speaks',
    emoji: '📖',
    tagTa: '🥇 சிறந்த படைப்பு',
    tagEn: '🥇 Best Writing',
    quoteTa: `“என்னுள் இருக்கும் அன்பு கோபம் சிரிப்பு 
அழுகை பரிவு காதல் நட்பு முழுமையாய் 
வாசிக்கும் வாசகருக்காக காத்திருக்கிறேன்.

இப்படிக்கு
நீண்ட காலமாக விற்காமல் இருக்கும் புத்தகம்”`,
    quoteEn: `“I wait for the reader who will read me in full—my love, anger, laughter, tears, compassion, and friendship.

Sincerely,
A book that has remained unsold for a long time.”`,
    meaningTa: 'பொருள்: ஒரு புத்தகம் மனித உணர்வுகளின் பொக்கிஷம். அதை வாசிக்கும் வாசகன் கிடைக்கும் வரை அதன் அனைத்து உணர்ச்சிகளும் காத்திருக்கின்றன என்பதே இதன் ஆழமான பொருளாகும்.',
    meaningEn: 'Meaning: A book is a treasure chest of human emotions. Its feelings remain locked until a true reader turns its pages and brings them to life.',
    relatedPoemSlug: 'ennangalin-kuppai-koodam-extract',
    relatedPoemTitleTa: 'எண்ணங்களின் குப்பைக் கூடம்',
    relatedPoemTitleEn: 'Ennangalin Kuppai Koodam'
  },
  {
    id: 'q1',
    categoryKey: 'love',
    categoryTa: 'காதல் & பிரிவு',
    categoryEn: 'Love & Longing',
    emoji: '❤️',
    tagTa: 'சிறந்த கவிதை',
    tagEn: 'Best Love Verse',
    quoteTa: `“காதல் என்னும் கடலில் விழுந்துவிட்டேன்
இன்னும் கரை சேரவில்லை
காதலின் ஆழத்திற்கு சென்று
இறுதியில் சுவாசமின்றி இறந்தேன்
நானோ இன்று கல்லறையில்
அவளோ இன்று கடற்கரையில்…”`,
    quoteEn: `“I fell into the ocean called love
and never reached the shore again.
Descending into its profound depths,
I drew my final breath.
Today I rest in a graveyard,
while she stands by the seashore…”`,
    meaningTa: 'பொருள்: ஆழமான காதலில் விழுந்தவன் மீள முடியாமல் தன் உணர்வுகளால் அழிகிறான்; ஆனால் காதலித்தவளோ அதை உணராமல் கடலோரத்தில் இயல்பாக வாழ்கிறாள் என்ற ஏக்கத்தைப் உணர்த்துகிறது.',
    meaningEn: 'Meaning: The one who loves deeply suffocates in emotional depths, while the beloved remains unaware, standing peacefully on the shore of life.',
    relatedPoemSlug: 'hidden-views-of-pain-and-love',
    relatedPoemTitleTa: 'வலியின் மறைக்கப்பட்ட முகம்',
    relatedPoemTitleEn: 'The Hidden Countenance of Pain'
  },
  {
    id: 'q4',
    categoryKey: 'philosophy',
    categoryTa: 'வாழ்க்கைத் தத்துவம்',
    categoryEn: 'Life Philosophy',
    emoji: '⏳',
    tagTa: '🔥 வாழ்வியல் உண்மை',
    tagEn: '🔥 Essential Wisdom',
    quoteTa: `“வாழ்க்கை முன்நோக்கினால் பாதை
வாழ்க்கை பின்நோக்கினால் பாடம்.”`,
    quoteEn: `“Life viewed forward is a path;
Life viewed backward is a lesson.”`,
    meaningTa: 'பொருள்: நாம் வாழப்போகும் எதிர்காலம் நமக்கு ஒரு பயணப்பாதை; ஆனால் நாம் வாழ்ந்து கடந்த கடந்தகாலம் நமக்கு ஒரு வாழ்வியல் பாடம் என்பதே இதன் பொருள்.',
    meaningEn: 'Meaning: Future lies ahead as a journey of pathways, but our past stands behind as an irreplaceable classroom of life lessons.',
    relatedPoemSlug: 'philosophy-of-happiness',
    relatedPoemTitleTa: 'மகிழ்ச்சியின் தத்துவம்',
    relatedPoemTitleEn: 'Philosophy of Happiness'
  },
  {
    id: 'q6',
    categoryKey: 'nature',
    categoryTa: 'இயற்கை & காலம்',
    categoryEn: 'Nature & Time',
    emoji: '🌳',
    tagTa: '⭐ இயற்கை கவிதை',
    tagEn: '⭐ Nature Verse',
    quoteTa: `“இலையுதிர் காலத்தில் உதிரும்
இலைகளை கண்டுகொள்ளாமல்
வசந்த காலத்தில் பூக்கப் போகும்
பூக்களுக்காக காத்திருக்கும்.

பிரிவை புரிந்துகொண்ட மரம்.”`,
    quoteEn: `“Ignoring the leaves that fall
in the autumn season,
it patiently awaits the blossoms
that will bloom in spring.

The tree that understood separation.”`,
    meaningTa: 'பொருள்: பிரிவும் இழப்பும் தற்காலிகமானவை; புதிய வசந்தமும் நம்பிக்கையும் நிச்சயம் வரும் என்ற இயற்கையின் விதியை ஏற்றுக்கொண்ட மனநிலையை மரம் உணர்த்துகிறது.',
    meaningEn: 'Meaning: Loss and separation are temporary phases of life; accepting them with patience leads to new growth and spring.',
    relatedPoemSlug: 'reflections-on-existence',
    relatedPoemTitleTa: 'வாழ்வின் மறைமுகப் பார்வைகள்',
    relatedPoemTitleEn: 'Hidden Views of Life'
  },
  {
    id: 'q15',
    categoryKey: 'philosophy',
    categoryTa: 'சமூக சிந்தனை',
    categoryEn: 'Social Perspective',
    emoji: '🐾',
    tagTa: '🔥 சமூக பார்வை',
    tagEn: '🔥 Social Perspective',
    quoteTa: `“கழுகை உண்ணும் குருவி அழகாக தெரிகிறது
மானை உண்ணும் புலி கொடூரமாக தெரிகிறது
இங்கு நடப்பது இரண்டும் வேட்டைதான்
கொள்பவரை பொறுத்து காட்சி மாறுகிறது.”`,
    quoteEn: `“A sparrow eating an eagle looks beautiful;
a tiger preying on a deer looks cruel.
Yet both are hunting—
the perspective changes depending on who holds the power.”`,
    meaningTa: 'பொருள்: உலகில் ஒரு செயலின் நியாயம் அல்லது அநியாயம் என்பது அதைச் செய்யும் நபர் மற்றும் பார்க்கும் மனிதர்களின் பார்வையை மட்டுமே பொறுத்தது.',
    meaningEn: 'Meaning: The morality of an action often depends on public bias and power dynamics rather than the act itself.',
    relatedPoemSlug: 'reflections-on-existence',
    relatedPoemTitleTa: 'வாழ்வின் மறைமுகப் பார்வைகள்',
    relatedPoemTitleEn: 'Hidden Views of Life'
  },
  {
    id: 'q16',
    categoryKey: 'philosophy',
    categoryTa: 'மனித இயல்பு',
    categoryEn: 'Human Nature',
    emoji: '🌍',
    tagTa: 'ஆழ்ந்த கவனிப்பு',
    tagEn: 'Profound Insight',
    quoteTa: `“உயிரினங்களெல்லாம் பரிணாம வளர்ச்சி அடைந்துவிட்டன
கல் மட்டும் கல்லாகவே இருக்கிறது
சில மனிதர்களும் அப்படித்தான்.”`,
    quoteEn: `“All living beings have undergone evolutionary growth;
only a stone remains a stone.
So do some human beings.”`,
    meaningTa: 'பொருள்: உலகம் மற்றும் உயிரினங்கள் வளர்ந்தாலும், சில மனிதர்கள் தங்கள் பிடிவாதம் மற்றும் இரக்கமற்ற மனநிலையால் மாறாமல் கல்லாகவே இருக்கிறார்கள்.',
    meaningEn: 'Meaning: While nature evolves, rigid and unfeeling humans refuse to grow or change their cold hearts.',
    relatedPoemSlug: 'reflections-on-existence',
    relatedPoemTitleTa: 'வாழ்வின் மறைமுகப் பார்வைகள்',
    relatedPoemTitleEn: 'Hidden Views of Life'
  },
  {
    id: 'q2',
    categoryKey: 'love',
    categoryTa: 'காதல் & பிரிவு',
    categoryEn: 'Love & Longing',
    emoji: '💔',
    tagTa: 'ஒருதலைக் காதல்',
    tagEn: 'Unrequited Love',
    quoteTa: `“பத்து தலை ராவணனுக்கு கூட
ஒருதலை காதல் உண்டு…”`,
    quoteEn: `“Even the ten-headed Ravana
had unrequited love in his heart…”`,
    meaningTa: 'பொருள்: எவ்வளவு பெரிய வலிமைமிக்க வீரனாக இருந்தாலும், காதலில் ஒருதலை வலி அனைவருக்கும் சமமானது என்பதை புராண பிம்பம் வழி விளக்குகிறது.',
    meaningEn: 'Meaning: No matter how powerful or mighty someone is, unrequited love creates vulnerable pain in every human heart.',
    relatedPoemSlug: 'hidden-views-of-pain-and-love',
    relatedPoemTitleTa: 'வலியின் மறைக்கப்பட்ட முகம்',
    relatedPoemTitleEn: 'The Hidden Countenance of Pain'
  },
  {
    id: 'q3',
    categoryKey: 'love',
    categoryTa: 'காதல் & பிரிவு',
    categoryEn: 'Love & Longing',
    emoji: '🌧️',
    tagTa: 'ஏக்கம்',
    tagEn: 'Longing',
    quoteTa: `“அவள் இருக்கும் இடத்தைவிட்டு தூரம் செல்ல செல்ல
தூரத்தை விட மனதின் வலி அதிகமாக தெரிகிறது.”`,
    quoteEn: `“The farther I travel away from where she stays,
the intensity of inner pain far exceeds the physical distance.”`,
    meaningTa: 'பொருள்: நாம் நேசிப்பவரை விட்டு உடல்ரீதியாக தூரம் செல்ல செல்ல, மைல்களின் தூரத்தை விட மனதின் பிரிவின் வலியே மிகப்பெரியதாக உணரப்படுகிறது.',
    meaningEn: 'Meaning: Physical distance measured in miles is trivial compared to the immense weight of emotional longing.',
    relatedPoemSlug: 'hidden-views-of-pain-and-love',
    relatedPoemTitleTa: 'வலியின் மறைக்கப்பட்ட முகம்',
    relatedPoemTitleEn: 'The Hidden Countenance of Pain'
  },
  {
    id: 'q5',
    categoryKey: 'mind',
    categoryTa: 'மனம் & தத்துவம்',
    categoryEn: 'Mind & Dignity',
    emoji: '👤',
    tagTa: 'தன்மானம்',
    tagEn: 'Self-Respect',
    quoteTa: `“உன் நியாயம் வலிமை பெறுவதில்லை
மாறாக உன் தன்மானத்தின் அளவு
குறைந்து கொண்டு போகிறது.”`,
    quoteEn: `“Your sense of justice does not gain strength;
instead, the measure of your self-respect
continues to diminish.”`,
    meaningTa: 'பொருள்: தன்மானத்தை விட்டுக்கொடுத்து நிரூபிக்கப்படும் எந்தவொரு நியாயமும் உண்மையான வெற்றியல்ல; அது தன்மான இழப்பே ஆகும்.',
    meaningEn: 'Meaning: Fighting for validation at the expense of self-respect weakens your dignity rather than proving your truth.',
    relatedPoemSlug: 'philosophy-of-happiness',
    relatedPoemTitleTa: 'மகிழ்ச்சியின் தத்துவம்',
    relatedPoemTitleEn: 'Philosophy of Happiness'
  },
  {
    id: 'q7',
    categoryKey: 'philosophy',
    categoryTa: 'சமூக தத்துவம்',
    categoryEn: 'Social Equality',
    emoji: '✊',
    tagTa: 'சமூக முழக்கம்',
    tagEn: 'Social Equality',
    quoteTa: `“சாதி மனிதனை பிரிக்கும்
மனிதம் சாதியை எரிக்கும்.”`,
    quoteEn: `“Caste divides humanity;
Humanity incinerates caste.”`,
    meaningTa: 'பொருள்: சாதீய வேறுபாடுகள் மனிதர்களை பிரிக்க முயன்றாலும், உண்மையான அன்பும் மனிதநேயமும் அந்த பாகுபாடுகளை முற்றிலும் அழிக்கும்.',
    meaningEn: 'Meaning: Discriminatory social barriers divide people, but genuine empathy and universal humanity burn down all divisions.',
    relatedPoemSlug: 'reflections-on-existence',
    relatedPoemTitleTa: 'வாழ்வின் மறைமுகப் பார்வைகள்',
    relatedPoemTitleEn: 'Hidden Views of Life'
  },
  {
    id: 'q8',
    categoryKey: 'mind',
    categoryTa: 'மனம் & மனிதநேயம்',
    categoryEn: 'Mind & Empathy',
    emoji: '🤝',
    tagTa: 'மனிதநேயம்',
    tagEn: 'Empathy',
    quoteTa: `“மனிதர்களுக்கு மரியாதையை கற்றுத்தர
நினைக்கிறது ஆட்டுக்குட்டி”`,
    quoteEn: `“The little lamb wishes
to teach humans the art of respect.”`,
    meaningTa: 'பொருள்: பகுத்தறிவுள்ள மனிதர்கள் மற்ற உயிர்களையும் மனிதர்களையும் மதிக்காமல் வாழும் சூழலில், எளிய ஆட்டுக்குட்டியின் மௌனம் மரியாதையை கற்றுத் தருகிறது.',
    meaningEn: 'Meaning: Innocent creatures often embody pure, harmless respect that arrogant humans tend to forget.',
    relatedPoemSlug: 'reflections-on-existence',
    relatedPoemTitleTa: 'வாழ்வின் மறைமுகப் பார்வைகள்',
    relatedPoemTitleEn: 'Hidden Views of Life'
  },
  {
    id: 'q9',
    categoryKey: 'love',
    categoryTa: 'நட்பு & அன்பு',
    categoryEn: 'Friendship & Love',
    emoji: '👥',
    tagTa: 'நட்பு',
    tagEn: 'Friendship',
    quoteTa: `“ஆண்களின் வாழ்க்கையில் காதலி மட்டும்தான்
தேவதையாக இருக்க முடியுமா
தோழியும் இருக்கலாம்.”`,
    quoteEn: `“Must a girlfriend be the only angel
in a man\'s life?
A female friend can be one too.”`,
    meaningTa: 'பொருள்: ஆண்களின் வாழ்வில் காதல் மட்டுமே உயரிய உறவல்ல; தூய்மையான நட்பும் தேவதையைப் போன்ற வழிகாட்டியாக இருக்க முடியும்.',
    meaningEn: 'Meaning: Pure friendship holds equal grace and purity as romantic love in enriching a person\'s life journey.',
    relatedPoemSlug: 'hidden-views-of-pain-and-love',
    relatedPoemTitleTa: 'வலியின் மறைக்கப்பட்ட முகம்',
    relatedPoemTitleEn: 'The Hidden Countenance of Pain'
  },
  {
    id: 'q10',
    categoryKey: 'mind',
    categoryTa: 'குடும்ப அன்பு',
    categoryEn: 'Family Affection',
    emoji: '🏠',
    tagTa: 'பாசம்',
    tagEn: 'Affection',
    quoteTa: `“கருவில் இருந்த உன்னை கனவுகளில் சுமக்கிறோம்…
அக்கா மகனாய் இருந்தால் தோளில் சுமக்கிறோம்
அக்கா மகளாய் இருந்தால் இதயத்தில் சுமக்கிறோம்.”`,
    quoteEn: `“While you were in the womb, we carried you in dreams…
If a nephew, we carry him on our shoulders;
If a niece, we carry her in our hearts.”`,
    meaningTa: 'பொருள்: குடும்ப உறவுகளில் குழந்தை பருவத்திலிருந்தே பிறக்கும் அளப்பரிய பாசமும், அக்கறையும் அழகாக வெளிப்படுத்தப்பட்டுள்ளது.',
    meaningEn: 'Meaning: The tender evolution of family affection, carrying loved ones from dreams to shoulders to the deep heart.',
    relatedPoemSlug: 'philosophy-of-happiness',
    relatedPoemTitleTa: 'மகிழ்ச்சியின் தத்துவம்',
    relatedPoemTitleEn: 'Philosophy of Happiness'
  },
  {
    id: 'q12',
    categoryKey: 'philosophy',
    categoryTa: 'சமூக அங்கதம்',
    categoryEn: 'Social Satire',
    emoji: '⚖️',
    tagTa: 'அங்கதம்',
    tagEn: 'Satire',
    quoteTa: `“பிச்சைக்காரன் அரசரானால்
ஊரெல்லாம் சில்லறையாகும்.”`,
    quoteEn: `“If a beggar becomes king,
the whole town turns into small change.”`,
    meaningTa: 'பொருள்: தகுதியற்ற அல்லது குறுகிய மனப்பான்மை கொண்ட நபரிடம் அதிகாரம் கிடைத்தால், அது ஒட்டுமொத்த சமூகத்தின் மதிப்பையும் குறைத்துவிடும்.',
    meaningEn: 'Meaning: Granting supreme power to someone with petty greed degrades the wealth and dignity of the entire community.',
    relatedPoemSlug: 'reflections-on-existence',
    relatedPoemTitleTa: 'வாழ்வின் மறைமுகப் பார்வைகள்',
    relatedPoemTitleEn: 'Hidden Views of Life'
  },
  {
    id: 'q13',
    categoryKey: 'mind',
    categoryTa: 'பயணம் & சுயத்தேடல்',
    categoryEn: 'Travel & Reflection',
    emoji: '🛤️',
    tagTa: 'சுயத்தேடல்',
    tagEn: 'Self Discovery',
    quoteTa: `“நீண்ட நாள் முடிவுபெறாத என் கவிதை
ஒரு பேருந்து பயணத்தில் எப்படி முழுமை பெற்றது.

பயணம் நம்மை புதுப்பிக்கிறதா?
பயணம் நம்மை பக்குவப்படுத்துகிறதா?
பயணம் நம் கேள்விகளுக்கு பதில் அளிக்கிறதா?”`,
    quoteEn: `“My poem that remained unfinished for long—
how did it find completion on a bus journey?

Does travel renew us?
Does travel mature us?
Does travel answer our lingering questions?”`,
    meaningTa: 'பொருள்: பயணம் என்பது ஒரு இடத்திலிருந்து இன்னொரு இடத்திற்கு நகர்வது மட்டுமல்ல; அது மனித மனதை பக்குவப்படுத்தி விடை தெரியா கேள்விகளுக்கு பதில் அளிக்கும் கவித்துவப் பயணம்.',
    meaningEn: 'Meaning: Travel is not merely spatial movement, but a reflective inner journey that matures thoughts and resolves quiet questions.',
    relatedPoemSlug: 'reflections-on-existence',
    relatedPoemTitleTa: 'வாழ்வின் மறைமுகப் பார்வைகள்',
    relatedPoemTitleEn: 'Hidden Views of Life'
  },
  {
    id: 'q14',
    categoryKey: 'philosophy',
    categoryTa: 'இயற்கை & விவசாயம்',
    categoryEn: 'Water & Agriculture',
    emoji: '🌾',
    tagTa: 'விவசாயி',
    tagEn: 'Farmer Struggle',
    quoteTa: `“நீரின்றி அமையாது உலகு என்றவன்
உணவுக்காக நீரில் இறங்கி போராடிக்
கொண்டிருக்கிறான்.”`,
    quoteEn: `“The one who declared \'No world exists without water\'
is now standing in water, fighting for his daily food.”`,
    meaningTa: 'பொருள்: உலகிற்கு உணவளிக்கும் உழவன், தன் வாழ்வாதாரத்திற்காகவும் நீருக்காகவும் போராடும் முரண்நிலையை சுட்டிக்காட்டுகிறது.',
    meaningEn: 'Meaning: The tragic irony of the farmer—who feeds the entire world—having to wade through struggles to secure basic sustenance.',
    relatedPoemSlug: 'reflections-on-existence',
    relatedPoemTitleTa: 'வாழ்வின் மறைமுகப் பார்வைகள்',
    relatedPoemTitleEn: 'Hidden Views of Life'
  }
];
