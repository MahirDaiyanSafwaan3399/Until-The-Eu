import assets from "./assets";

const Data = [
  {
    id: "Stage-01",
    name: "Alarm Stage",
    creator:
      "The alarm reaction stage refers to the initial symptoms the body experiences when under stress",
    description:
      "Our heart rate increases, our focus sharpens and our body begins to fill with adrenalin. We feel an impulse to either stay and fight, or run away. All of this helps us to increase activity for a short time as it’s a natural response, designed to help us to survive a threat - very useful during evolution. But now, not so much.",
    image: assets.fight_stage,
    solutions: [
      {
        levelName: "Breathing",
        avatar: assets.breathing2,
        levelSub: "Lets start with a deep breath!",
        levelDesc: [
          "Lie down in a comfortable position and place one hand on the stomach and the other on the chest.",
          "While breathing through the nose, focus on the feeling of the hands on the stomach going up and down.",
          "One when you breathe in, and one when you exhale, you say to yourself, It's comfortable” and perform until 10 continuously",
        ],
        solutionImgSrc: assets.breathtimer,
        imgSrc: assets.breathing,
        img2: assets.breathtimer2,
      },
      {
        levelName: "Stretching",
        avatar: assets.streaching2,
        levelSub: "Help the avatar to do streaching",
        levelDesc: [
          "Relax your body and lie down comfortably in a quiet space that is not disturbed.",
          "Tense the muscles one by one. ",
          "Hold your breath for 10 seconds and remember the feeling of tension, causing the tension",
          "Compare the feeling of relaxation with the feeling of nervousness. Take a deep breath again and breathe out slowly and quietly whisper 'comfortable'",
        ],
        solutionImgSrc: assets.strechingl,
        imgSrc: assets.stretching,
      },
      {
        levelName: "Cleaning The Room",
        avatar: assets.cleaning2,
        levelSub: "Help the avatar to clean the room.",
        levelDesc: [
          "Picture of messy room and the messy room picture changes into picture of clean room when player clicks on the picture.",
        ],
        solutionImgSrc: assets.cleaningl,
        imgSrc: assets.sourceofstress,
        pic1: assets.messyroom,
        pic2: assets.cleanroom,
      },
    ],
  },
  {
    id: "Stage-02",
    name: "Resistance Stage",
    creator:
      "The resistance stage is when your body tries to repair itself after the initial shock of stress.",
    description:
      "If the perceived stress continues, the body stays activated at a higher metabolic level in an effort to offset the persistent stress.  The body cannot maintain this level indefinitely, and its resources will eventually deplete.",
    image: assets.damage_control_stage,
    solutions: [
      {
        levelName: "Write Something",
        avatar: assets.writesomething2,
        levelSub: "Help avatar to write down what comes to his or her mind",
        levelDesc: [
          "Writing about uplifting things encourages you to concentrate and focus on positivity.",
          "One of the main advantages of journaling therapy for depression is that it is used to overcome traumatic events and help people experiencing PTSD symtoms.",
          "Write what ever comes to your mind below",
        ],
        solutionImgSrc: assets.writingsomething,
        imgSrc: assets.writesomething,
        inputBox: true,
      },
      {
        levelName: "Exercising",
        avatar: assets.exercising2,
        levelSub:
          "What kind of exercising that you want to recommend to avatar?",
        levelDesc: [
          "Stretching-> Stretching is an exercise performed by straightening the body and feeling the muscle stretching, and is aimed at preventing injury, physical fitness, and fatigue recovery, and is also necessary to maintain the balance of the body.",
          "Aerobic activity-> By supplying as much oxygen as possible to the body, it has the effect of improving the function of the heart and lungs and having strong vascular tissue. Jogging runs, swimming biking, aerobic dance, cross country, and marathon are among them.",
          "A muscular workout-> It aims to increase muscle size and increase the motor unit so that multiple muscle fibers can be mobilized for exercise at the same time. People usually think of weight training with heavy dumbbells, but exercise using dumbbells or elastic bands or weight resistance exercises using one's own weight also belong to weight training.",
        ],
        solutionImgSrc: assets.outdoorsports,
        imgSrc: assets.outdoorgames,
      },
      {
        levelName: "Relaxing Music",
        avatar: assets.relaxing2,
        levelSub: "Help avatar to listen to music",
        levelDesc: [
          "Listen to some soothing music. Music enables you to remove your stress and start a new day. So plug in your headphones and enjoy.",
        ],
        solutionImgSrc: assets.listeningmusic,
        imgSrc: assets.music,
        musicmp: assets.musicmp,
      },
      {
        levelName: "Have Some Food",
        avatar: assets.food2,
        levelSub: "What foods would u recommend to avatar?",
        levelDesc: [
          "The foods that are helpful to stress.",
          "Sweet food-> Moderately sweet food suppresses the secretion of a stress-related hormone called corticoid and makes you feel better.",
          "Serotonin containing food->Serotonin is a neurotransmitter that greatly affects emotions, appetite, and sleep, and it is nicknamed the happiness hormone. ex. Meat, mung bean, milk",
          "Vitamin, mineral containing food->ex. walnut (vit E), kiwi (vit C). Cabbage (vit C), tomatoes, mushrooms (vit B), bell peppers, nuts",
          "Endorphin containing food->Endorphin is a natural painkiller secreted by our body that blocks neurotransmitters and makes us feel good.ex. Chocolate, cocoa, spicy foods",
          "The foods that are not helpful to stress",
          "Caffeine->Caffeine stimulates the brain and contracts blood vessels, which further stimulates stress",
          "Snacks->Snack contains a lot of sugar and fat, which increases stress.",
          "Soda->Soda contains a lot of sugar, and excessive consumption of sodas containing this amount of sugar can reduce the resistance to stress",
        ],
        solutionImgSrc: assets.eatingfood,
        imgSrc: assets.eating,
      },
    ],
  },
  {
    id: "Stage-03",
    name: "Exhaustion Stage",
    creator: "This stage is the result of prolonged or chronic stress",
    description:
      "Prolonged exposure to the stressor will result in the depletion of the bodys resources, and the resulting wear and tear will suppress the immune system and cause bodily functions to deteriorate.  This can lead to a variety of health issues and illnesses, including heart disease, digestive problems, depression, and diabetes.",
    image: assets.recovery_stage,
    solutions: [
      {
        levelName: "Setting Goals",
        avatar: assets.goals2,
        levelSub: "Setting goals that you really want to achieve in life",
        levelDesc: ["Write your goals in the input box"],
        solutionImgSrc: assets.goalset,
        imgSrc: assets.goals,
        inputBox: true,
      },
      {
        levelName: "7 Habits of Happy People",
        avatar: assets.habitsforhappylife2,
        levelSub: "Help avatar to learn about positive psychology",
        levelDesc: [
          "Make good friends",
          "Express your gratitude actively",
          "Actively pursue your goals",
          "Do the task that you can often.",
          "Give",
          "Don't just chase money",
          "Live the life you want",
        ],
        solutionImgSrc: assets.interpretingl,
        imgSrc: assets.think,
      },
      {
        levelName: "Meditation",
        avatar: assets.meditation2,
        levelSub: "A sense of calm, peace and balance",
        levelDesc: [
          "Choose a quiet space that is not disturbed by the surroundings.",
          "Wear loose clothes and close your eyes.",
          "After looking through your body, relax your tense muscles.",
          "Recall a place in your mind where you feel comfortable and vividly recalls the scene.",
          "Repeat, briefly and say I'm relaxing now.",
        ],
        solutionImgSrc: assets.meditationing,
        imgSrc: assets.meditation,
      },
      {
        levelName: "Benefits of Positive Self Talking",
        avatar: assets.PERMA2,
        levelSub: "Self-talk is your internal dialogue.",
        levelDesc: [
          "Healthier immune system",
          "Reduced pain",
          "Better cardiovascular health",
          "Improved mental health",
          "Improved self-esteem",
          "Increased vitality",
          "Greater life satisfaction",
          "Reduced stress",
        ],
        solutionImgSrc: assets.selftalking,
        imgSrc: assets.selftalk,
      },
      {
        levelName: "PERMA",
        avatar: assets.PERMA2,
        levelSub: "PERMA is a formula for a happy life without stress",
        levelDesc: [
          "P: positive emotion-> It refers to joy, warmth, confidence, and optimism.",
          "E: engagement-> It refers that you don’t know time passing, or you can’t recognize while immersed in an activity, also it refers to voluntary commitment to work.",
          "R: relationship-> When you think of the moment when you were indescribably happy and felt tremendous pride in your achievement, it is almost when you were with others",
          "M: meaning-> It is based on belonging to and contributing to something that you believe is more important than yourself.",
          "A: accomplishment-> It refers to the pursuit of achievement itself not to win or to make money.",
        ],
        solutionImgSrc: assets.positivepsychology,
        imgSrc: assets.positive,
      },
      {
        levelName: "Laughing",
        avatar: assets.laughing2,
        levelSub: "Help the avatar to laugh",
        levelDesc: ["Laugh for 10 seconds"],
        solutionImgSrc: assets.laughingl,
        imgSrc: assets.laughing,
        img2: assets.laughtimer,
      },
    ],
  },
];

export { Data };
