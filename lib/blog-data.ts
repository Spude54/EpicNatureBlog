// Blog Data Types and Sample Data
// This file contains all blog and author information in JSON format
// You can easily add, edit, or remove blogs and authors here

export interface Author {
  id: string;
  name: string;
  age: number;
  bio: string;
  avatar: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  featuredImage: string;
  images?: string[];
  authorId: string;
  publishedAt: string;
  tags: string[];
  likes: number;
  views: number;
}

// Authors Data - Add or remove authors here
export const authors: Author[] = [
  {
    id: "author-1",
    name: "Sarah Mitchell",
    age: 32,
    bio: "Nature photographer and writer with over 10 years of experience exploring the wilderness. I believe in the healing power of nature and love sharing stories that inspire others to step outside.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    socialLinks: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: "author-2",
    name: "James Chen",
    age: 28,
    bio: "Environmental scientist turned blogger. I write about sustainable living and the science behind our beautiful planet. When not writing, you'll find me hiking with my dog, Luna.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

// Blog Posts Data - Add or remove blog posts here
// Posts are automatically sorted by date for recent blogs and by likes for popular blogs
export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "finding-peace-in-mountain-meadows",
    title: "Finding Peace in Mountain Meadows",
    excerpt: "Discover the tranquility that awaits in alpine meadows, where wildflowers dance and the sky meets the earth.",
    body: `There's something magical about standing in a mountain meadow, surrounded by wildflowers that stretch as far as the eye can see. The air is crisp and clean, carrying the sweet scent of blooming alpine flowers, and the only sounds are the gentle whisper of the wind and the distant call of birds.

I first discovered the healing power of mountain meadows during a particularly stressful period in my life. Work had consumed me, and I had forgotten what it felt like to truly breathe. A friend suggested a weekend hiking trip, and reluctantly, I agreed.

## The Journey Begins

We set out early on a Saturday morning, the sun just beginning to paint the sky in shades of pink and gold. The trail wound through dense forests of pine and spruce, their needles soft beneath our feet. As we climbed higher, the trees began to thin, and patches of blue sky appeared through the canopy.

After three hours of steady hiking, we emerged from the tree line into a sight that took my breath away. Before us lay a vast meadow, carpeted in wildflowers of every color imaginable. Purple lupines swayed alongside golden columbines, while delicate white daisies dotted the landscape like stars scattered across the earth.

## The Power of Presence

I remember standing at the edge of that meadow, tears streaming down my face. In that moment, all my worries seemed to dissolve into the vastness of the sky above. I realized I had been so caught up in the noise of everyday life that I had forgotten how to simply be present.

We spent hours in that meadow, lying in the grass and watching clouds drift by. I learned the names of flowers I had never seen before and listened as my friend pointed out the different bird calls echoing across the valley.

## Lessons from the Meadow

That trip changed something fundamental in me. I learned that sometimes, the best medicine for a weary soul is simply to step outside and let nature work its magic. The meadow taught me:

1. **Patience**: Wildflowers don't bloom overnight. They take their time, growing at their own pace.
2. **Resilience**: These delicate-looking plants survive harsh winters and strong winds.
3. **Beauty in Simplicity**: A single flower can bring as much joy as a grand vista.
4. **Interconnection**: Every element of the meadow depends on the others for survival.

## Finding Your Own Meadow

You don't need to climb a mountain to find peace in nature. Your "meadow" might be a local park, a quiet garden, or even a windowsill filled with plants. The key is to find a space where you can disconnect from the digital world and reconnect with the natural one.

I now make it a point to visit mountain meadows at least twice a year. Each visit reminds me of what truly matters and helps me reset my priorities. The meadow has become my sanctuary, a place where I can always find peace.

If you're feeling overwhelmed by life's demands, I encourage you to seek out your own meadow. Step outside, breathe deeply, and let nature remind you of the simple beauty that exists in every moment.`,
    featuredImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
    ],
    authorId: "author-1",
    publishedAt: "2026-03-28",
    tags: ["mountains", "meadows", "mindfulness", "hiking"],
    likes: 342,
    views: 1250,
  },
  {
    id: "blog-2",
    slug: "sunrise-over-the-ocean",
    title: "Sunrise Over the Ocean: A New Beginning",
    excerpt: "Watching the sun rise over the ocean is more than a visual experience - it's a spiritual awakening.",
    body: `There's a reason why poets, artists, and dreamers have been captivated by ocean sunrises for centuries. There's something profoundly moving about watching the first light of day emerge from the vast expanse of water, painting the world in colors that seem to defy description.

## My First Ocean Sunrise

I'll never forget the first time I witnessed an ocean sunrise. I was nineteen, traveling alone for the first time, and I had made my way to a small coastal town on the eastern shore. Unable to sleep due to a mixture of excitement and jet lag, I found myself walking toward the beach at 5 AM.

The beach was empty except for a few early morning joggers and their dogs. I found a spot on the cool sand and sat down, wrapping my jacket around me as I waited for the show to begin.

## The Color Symphony

At first, there was only the faintest hint of light on the horizon - a subtle shift from black to deep blue. Then, almost imperceptibly, streaks of pink began to appear, like brushstrokes on a canvas that stretched from one end of the world to the other.

The colors intensified gradually: soft pinks gave way to vibrant oranges, which in turn yielded to brilliant golds. The clouds caught fire, their edges glowing as if lit from within. And then, that magical moment - the first sliver of the sun appeared, a brilliant arc of light breaking free from the embrace of the sea.

## The Sound of Morning

What struck me most wasn't just the visual spectacle, but the accompanying symphony of sounds. The rhythmic crash of waves seemed to grow more pronounced as the light increased, as if the ocean itself was celebrating the new day. Seabirds began their morning chorus, their calls echoing across the water.

I closed my eyes for a moment and simply listened. The sound of the waves, the cry of the gulls, the whisper of the wind - it was nature's own meditation soundtrack, and I found myself breathing in sync with the rhythm of the sea.

## Reflections on Beginnings

That sunrise marked a turning point in my life. Sitting there, watching the world come alive, I realized that every day offers us a fresh start. No matter what challenges we faced yesterday, the sun rises again, offering new possibilities and new hope.

I've since made it a habit to watch the sunrise whenever I can, whether from a beach, a mountain top, or simply from my window. Each sunrise reminds me that:

- **Every day is a gift**: We're not guaranteed tomorrow, so we should cherish each new dawn.
- **Change is constant**: Just as the colors of the sunrise shift and evolve, so too does life.
- **Beauty surrounds us**: Even on the hardest days, there is beauty to be found if we look for it.
- **We are small, and that's okay**: Watching the vastness of the ocean meet the infinity of the sky puts our problems into perspective.

## Practical Tips for Sunrise Watching

If you'd like to experience the magic of an ocean sunrise for yourself, here are some tips:

1. **Check the time**: Use a sunrise calculator to know exactly when the sun will appear.
2. **Arrive early**: Get there at least 30 minutes before sunrise to watch the full color show.
3. **Dress warmly**: Beaches can be cold in the early morning, even in summer.
4. **Bring a thermos**: Hot coffee or tea makes the experience even more enjoyable.
5. **Leave your phone**: Or at least put it away. Be present in the moment.
6. **Stay until after**: The colors often intensify in the minutes after the sun fully rises.

## An Invitation

I invite you to experience an ocean sunrise for yourself. Find a beach near you, set your alarm early, and give yourself the gift of witnessing this daily miracle. I promise you won't regret it.

The ocean has a way of putting things into perspective, and there's no better time to experience its wisdom than in those magical moments when night gives way to day.`,
    featuredImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=800&h=400&fit=crop",
    ],
    authorId: "author-1",
    publishedAt: "2026-03-25",
    tags: ["ocean", "sunrise", "mindfulness", "travel"],
    likes: 567,
    views: 2100,
  },
  {
    id: "blog-3",
    slug: "forest-bathing-japanese-art",
    title: "Forest Bathing: The Japanese Art of Shinrin-yoku",
    excerpt: "Learn about the ancient practice of forest bathing and how spending time among trees can transform your health.",
    body: `In our hyperconnected world, where screens dominate our waking hours and notifications constantly vie for our attention, the Japanese practice of Shinrin-yoku offers a powerful antidote. Translated as "forest bathing," this practice involves immersing oneself in the atmosphere of the forest, engaging all five senses to connect deeply with nature.

## Origins of Shinrin-yoku

The term Shinrin-yoku was coined in 1982 by the Japanese Ministry of Agriculture, Forestry and Fisheries. However, the practice itself draws on ancient Shinto and Buddhist traditions that have long recognized the spiritual importance of forests.

In Japan, forests cover about 67% of the land, and they have always held a special place in the national psyche. Forests are seen as sacred spaces, home to spirits and a source of healing energy. Shinrin-yoku was developed as a way to reconnect the increasingly urbanized Japanese population with these healing natural spaces.

## The Science Behind Forest Bathing

What makes forest bathing more than just a pleasant walk in the woods? Scientists have been studying this question for decades, and the results are remarkable.

### Physical Benefits

Research has shown that spending time in forests can:

- Lower cortisol levels (the stress hormone)
- Reduce blood pressure and heart rate
- Boost the immune system by increasing natural killer cells
- Improve cardiovascular health
- Reduce inflammation markers in the body

### Mental Benefits

The mental health benefits are equally impressive:

- Reduced symptoms of anxiety and depression
- Improved mood and feelings of wellbeing
- Enhanced creativity and problem-solving abilities
- Better concentration and mental clarity
- Improved sleep quality

### The Role of Phytoncides

One of the key factors in forest bathing's effectiveness is phytoncides - natural oils secreted by trees as part of their defense system. When we breathe in these compounds, our bodies respond in beneficial ways, including increased production of natural killer cells that help fight disease.

## How to Practice Forest Bathing

Unlike hiking, which often focuses on reaching a destination or achieving a physical goal, forest bathing is about slowing down and being present. Here's how to practice:

### 1. Choose Your Forest

Select a forest or wooded area where you feel safe and comfortable. It doesn't need to be a pristine wilderness - even a local park with mature trees can work.

### 2. Leave Technology Behind

This is crucial. Put your phone on airplane mode or leave it in the car. The goal is to disconnect from the digital world entirely.

### 3. Walk Slowly

There's no destination. Wander without purpose, following whatever draws your attention. If you see an interesting tree, stop and observe it. If you hear a bird, pause and listen.

### 4. Engage All Five Senses

- **Sight**: Notice the play of light through the leaves, the different shades of green, the patterns of bark.
- **Sound**: Listen to bird songs, rustling leaves, the crunch of your footsteps.
- **Smell**: Breathe deeply. Notice the earthy scent of soil, the freshness of the air.
- **Touch**: Feel the texture of bark, the softness of moss, the coolness of a stream.
- **Taste**: If safe to do so, taste wild berries or edible plants (only if you're certain of identification).

### 5. Find a Spot to Sit

At some point during your bath, find a comfortable spot to sit. Lean against a tree, sit on a rock, or simply settle on the ground. Spend at least 20 minutes just being still.

### 6. Practice Regularly

Like any wellness practice, forest bathing is most effective when done regularly. Try to spend at least two hours in the forest every week if possible.

## My Personal Experience

I discovered forest bathing during a particularly difficult period in my life. I was dealing with burnout, and traditional approaches weren't helping. A friend who had lived in Japan introduced me to the practice, and I was skeptical at first.

My first session was transformative. I remember walking into a local forest preserve, putting away my phone, and simply wandering. At first, my mind was racing, full of to-do lists and worries. But gradually, the forest worked its magic.

I found myself noticing things I had never noticed before: the intricate patterns of lichen on rocks, the way sunlight created pools of gold on the forest floor, the complex symphony of birdsong all around me.

By the end of two hours, I felt like a different person. The weight I had been carrying seemed lighter, and I had a sense of clarity I hadn't experienced in months.

## Bringing the Forest Home

While nothing can replace actually being in a forest, you can bring some of the benefits home:

- Keep houseplants, especially those that release phytoncides
- Use essential oils from forest trees (pine, cedar, cypress)
- Listen to recordings of forest sounds during meditation
- Hang nature photography in your living space
- Open windows to let in fresh air when possible

The forest is calling. Will you answer?`,
    featuredImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&h=400&fit=crop",
    ],
    authorId: "author-2",
    publishedAt: "2026-03-20",
    tags: ["forest", "wellness", "mindfulness", "japanese-culture"],
    likes: 891,
    views: 3450,
  },
  {
    id: "blog-4",
    slug: "desert-stars-night-sky",
    title: "Desert Stars: Finding Wonder in the Night Sky",
    excerpt: "A journey into the desert reveals the breathtaking beauty of our galaxy and our place within it.",
    body: `The first time I saw the Milky Way with my naked eyes, I cried. I was standing in the middle of a desert, miles from the nearest artificial light, and above me stretched a river of stars so bright and numerous that it seemed impossible they had been there all along, hidden by the glow of city lights.

## The Light Pollution Problem

Most of us live under skies polluted by artificial light. According to research, over 80% of the world's population lives under light-polluted skies, and for many urban dwellers, seeing more than a handful of stars is impossible.

This isn't just an aesthetic loss. Light pollution affects wildlife, disrupts human sleep patterns, and disconnects us from the cosmic perspective that our ancestors took for granted.

## My Desert Pilgrimage

I had been planning my desert trip for months. I chose a location in the high desert, far from any major cities, where the International Dark-Sky Association had certified the area as having some of the darkest skies on Earth.

I arrived in the afternoon and set up my camp on a flat stretch of sand, surrounded by strange rock formations that seemed to glow orange in the setting sun. As twilight deepened, I watched the first stars appear, like diamonds being revealed on velvet.

## The Night Unfolds

What happened next is difficult to describe adequately. As full darkness fell, the sky came alive in a way I had never experienced. Stars appeared by the thousands, then by the millions. The Milky Way wasn't a faint smudge, as I had seen it in national parks - it was a brilliant band of light stretching from horizon to horizon, so bright it cast faint shadows on the ground.

I lay on my back on a sleeping pad, staring up at this magnificent display, and felt my perspective shift fundamentally. I was looking at our galaxy from the inside - a spiral arm of hundreds of billions of stars, of which our sun is just one ordinary member.

### What I Saw

During that night, I observed:

- The Andromeda Galaxy, visible as a faint smudge, the most distant object visible to the naked eye at 2.5 million light years away
- Countless shooting stars as the Earth passed through a meteor stream
- The planets Jupiter and Saturn, bright points of light among the fixed stars
- The zodiacal light, a faint cone of light caused by dust in the plane of the solar system
- Satellites crossing the sky, including the International Space Station

## The Science of Stargazing

Understanding what you're looking at can deepen the experience enormously. Here are some basics:

### Distance and Time

When you look at the stars, you're looking back in time. Light from the nearest star beyond our sun, Proxima Centauri, takes over four years to reach us. Many stars visible to the naked eye are hundreds of light years away, meaning the light entering your eyes left those stars centuries ago.

### Types of Stars

Stars come in different colors depending on their temperature:
- Blue/white stars are the hottest
- Yellow stars (like our sun) are medium temperature
- Red stars are the coolest

### The Milky Way

Our galaxy contains between 100 and 400 billion stars. The band of light we see is our view of the galactic plane from our position about two-thirds of the way out from the center.

## Finding Dark Skies

If you want to experience truly dark skies, here are some tips:

1. **Use light pollution maps**: Websites and apps show light pollution levels worldwide
2. **Travel during new moon**: The full moon can drown out fainter stars
3. **Allow your eyes to adapt**: It takes 20-30 minutes for your eyes to fully adjust to darkness
4. **Check the weather**: Clear, dry conditions are essential
5. **Bring warm clothing**: Nights can be cold, even in the desert
6. **Avoid using lights**: If you need illumination, use a red flashlight

## A Cosmic Perspective

Carl Sagan famously wrote about the "pale blue dot" - Earth as seen from billions of miles away. Seeing the stars in their full glory provides a similar shift in perspective.

Looking at the Milky Way, I understood viscerally that we are on a small planet orbiting an ordinary star in an unremarkable part of a galaxy containing hundreds of billions of stars, in a universe containing hundreds of billions of galaxies.

This could be a terrifying realization, but I found it profoundly comforting. Our daily worries, our petty conflicts, our endless striving - all of it seemed less pressing against this cosmic backdrop. At the same time, the fact that we exist at all, that atoms have assembled themselves into beings capable of contemplating the stars, seemed like the most extraordinary miracle.

## An Invitation to Wonder

I encourage everyone to seek out dark skies at least once. Leave behind the city lights, the screens, the noise, and give yourself the gift of seeing the universe as our ancestors saw it - vast, beautiful, and humbling.

The stars have been there all along, waiting to fill you with wonder. All you have to do is find a dark enough place to see them.`,
    featuredImage: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=400&fit=crop",
    ],
    authorId: "author-1",
    publishedAt: "2026-03-15",
    tags: ["desert", "stars", "astronomy", "night-sky"],
    likes: 723,
    views: 2890,
  },
  {
    id: "blog-5",
    slug: "spring-wildflower-guide",
    title: "A Guide to Spring Wildflowers",
    excerpt: "Learn to identify the beautiful wildflowers that emerge each spring and understand their role in the ecosystem.",
    body: `Spring brings one of nature's most spectacular shows - the emergence of wildflowers. After months of dormancy, meadows, forests, and roadsides burst into color as countless species bloom in a carefully orchestrated sequence that has evolved over millions of years.

## Why Wildflowers Matter

Wildflowers aren't just pretty - they're essential components of healthy ecosystems. They provide food for pollinators, prevent soil erosion, and support complex food webs that include everything from insects to birds to mammals.

Many of our cultivated garden plants descended from wildflowers, and wildflower populations continue to be important genetic resources for developing new crop varieties and medicines.

## Common Spring Wildflowers

Here's a guide to some of the wildflowers you might encounter on your spring walks:

### Early Spring (March-April)

**Trillium** - These three-petaled flowers are among the first to bloom in woodland areas. White trillium is most common, but you may also find red and yellow varieties. Fun fact: it can take a trillium plant 7-10 years to produce its first flower from seed!

**Bloodroot** - Named for the red-orange sap in its roots (used by Indigenous peoples as a dye), bloodroot produces delicate white flowers that last only a few days.

**Dutchman's Breeches** - These whimsical flowers look like tiny pairs of white pants hanging on a line. They're early bloomers that provide important nectar for queen bumblebees emerging from hibernation.

### Mid-Spring (April-May)

**Virginia Bluebells** - Clusters of pink buds open into sky-blue bell-shaped flowers. They carpet forest floors in stunning displays before the tree canopy fully leafs out.

**Wild Violets** - Found in purple, blue, white, and yellow, violets are familiar spring favorites. Both flowers and leaves are edible and high in vitamins A and C.

**Jack-in-the-Pulpit** - This unusual flower features a hooded structure (the "pulpit") with a central spike (the "jack"). The plant can change sex from year to year depending on its energy reserves!

### Late Spring (May-June)

**Lupines** - Tall spikes of blue, purple, pink, or white flowers. Lupines fix nitrogen in the soil, making them valuable for ecosystem health.

**Wild Columbine** - Red and yellow drooping flowers attract hummingbirds. Each petal forms a hollow spur containing nectar.

**Dame's Rocket** - Often mistaken for phlox, this fragrant flower blooms in purple, pink, and white. Though beautiful, it's considered invasive in some areas.

## Wildflower Photography Tips

If you want to capture the beauty of wildflowers:

1. **Get low**: Photograph at the flower's level for more intimate images
2. **Use morning light**: Early light is soft and often highlights dewdrops
3. **Mind your background**: A cluttered background distracts from the flower
4. **Use a macro lens or mode**: This reveals details invisible to the naked eye
5. **Be patient**: Wait for the breeze to pause before shooting
6. **Never pick or trample**: Leave flowers for others to enjoy

## Conservation Concerns

Unfortunately, many wildflower species are declining due to habitat loss, climate change, and invasive species. Some ways to help:

- Support habitat preservation organizations
- Plant native wildflowers in your garden
- Never pick wildflowers or dig up wild plants
- Report rare species sightings to local botanical societies
- Control invasive species on your property

## Starting a Wildflower Journal

I highly recommend keeping a wildflower journal. Record:
- Date and location of sightings
- Species identification (or your best guess)
- Growing conditions (shade, sun, moist, dry)
- Associated species growing nearby
- Sketches or photos

Over years, your journal becomes a valuable record of local flora and changing bloom times.`,
    featuredImage: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=800&h=400&fit=crop",
    ],
    authorId: "author-2",
    publishedAt: "2026-03-10",
    tags: ["wildflowers", "spring", "botany", "nature-guide"],
    likes: 456,
    views: 1780,
  },
  {
    id: "blog-6",
    slug: "rainy-day-nature-appreciation",
    title: "Embracing Rainy Days: Nature in the Rain",
    excerpt: "Rain doesn't have to keep you indoors. Discover the unique beauty of nature during and after rainfall.",
    body: `We often curse rainy days, seeing them as obstacles to our outdoor plans. But rain is essential for life, and there's a unique beauty to the natural world during and after rainfall that many of us miss by staying indoors.

## The Sound of Rain

Close your eyes and listen. Rain creates one of nature's most soothing soundscapes - the patter on leaves, the gurgle of forming streams, the deeper percussion on rocks and rooftops. These sounds have been shown to reduce stress and promote relaxation.

## After the Rain

Some of the best times to experience nature are immediately following rainfall:

**The Petrichor** - That distinctive earthy smell after rain has a name! It's caused by oils released from plants and a compound called geosmin produced by soil bacteria. This scent signals to many creatures that it's safe to come out.

**Heightened Colors** - Everything looks more vibrant after rain. Wet surfaces reflect more light, and colors appear more saturated. Photographers call this the "magic" lighting condition.

**Wildlife Activity** - Many animals become more active after rain. Birds sing more vigorously, earthworms emerge, and amphibians come out of hiding.

## Rain Photography

Rain creates unique photographic opportunities:

- Water droplets act as tiny lenses, magnifying what's behind them
- Reflections in puddles create natural mirrors
- Mist and fog add atmosphere and mystery
- Lightning can be captured with long exposures (from a safe location!)

## Dressing for Rain

The right gear makes all the difference:

- Waterproof outer layers that breathe
- Waterproof boots with good traction
- A wide-brimmed hat to keep rain off your face
- Quick-dry underlayers
- Waterproof bags for electronics

## The Life Rain Brings

Rain is the lifeblood of ecosystems. Consider:

- A single rainstorm can provide millions of gallons of water to a forest
- Rain fills vernal pools that are essential breeding habitat for amphibians
- Mushrooms and fungi fruit primarily after rainfall
- Many seeds require rain to germinate
- Streams and rivers depend on rain to support fish and other aquatic life

Next time it rains, instead of lamenting, consider going outside. You might discover a whole new way of experiencing nature.`,
    featuredImage: "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=1200&h=600&fit=crop",
    images: [],
    authorId: "author-2",
    publishedAt: "2026-03-05",
    tags: ["rain", "weather", "nature", "photography"],
    likes: 234,
    views: 980,
  },
];

// Helper functions to get blog data
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}

export function getRecentBlogs(limit: number = 6): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getPopularBlogs(limit: number = 6): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, limit);
}

export function searchBlogs(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.body.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}
