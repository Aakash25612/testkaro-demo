/*
  Mock test papers, one per exam. Each exam has its own sections, timing and score scale.
  Questions: { t: question, o: [options], a: index of the correct option, ctx: optional text shown above it }.
  Essay sections: { prompt, minWords, maxWords?, guide, sample, posts? }.
  The academy team can replace any passage, question or prompt here. Keep the same shape.
*/
window.TK_MOCKS = {
  ielts: {
    title: "IELTS Academic · Mock 1",
    short: "Reading + Writing Task 2",
    minutes: 60,
    sections: [
      { id: "reading", label: "Reading", kind: "mcq", time: "20 min",
        passage: { title: "Farming on the rooftops", paras: [
          "In the early 2000s, a handful of city restaurants began growing herbs on their own rooftops. Most of these first gardens were abandoned within two years. Owners found that the cost of carrying soil, water and tools up several floors outweighed the savings on fresh produce.",
          "The second wave of rooftop farming looked very different. Instead of heavy soil, growers used lightweight mixes of coconut fibre and compost, and many switched to hydroponic trays that need no soil at all. Building engineers were brought in early to check how much weight each roof could safely hold.",
          "Supporters argue that rooftop farms cool the buildings beneath them, reduce storm-water run-off and cut the distance food travels to reach a plate. Critics reply that the total amount of food produced is tiny compared with a city's needs, and that the same roofs could generate more value from solar panels.",
          "Researchers now suggest the two uses need not compete. Some trial sites place panels on raised frames, with shade-loving crops such as lettuce growing underneath. Early results show that the plants stay cooler and the panels, in turn, run more efficiently."
        ]},
        questions: [
          { t: "Why were most early rooftop gardens abandoned?", o: ["Plants failed to grow at that height", "Moving materials up the building cost too much", "Restaurants could not find staff", "City rules banned them"], a: 1 },
          { t: "Second-wave growers often used no soil at all.", o: ["True", "False", "Not given"], a: 0 },
          { t: "Building engineers were consulted only after farms were built.", o: ["True", "False", "Not given"], a: 1 },
          { t: "What is the critics' main concern about rooftop farms?", o: ["They attract pests", "They make buildings hotter", "They produce very little food for the city", "They use too much water"], a: 2 },
          { t: "What did the trial sites with raised solar panels find?", o: ["Crops grew faster in full sun", "Panels and plants both benefited", "Panels produced less power", "Lettuce could not grow in shade"], a: 1 }
        ]},
      { id: "writing", label: "Writing Task 2", kind: "essay", time: "40 min",
        prompt: "Some people believe city rooftops should be used to grow food, while others think they are better used for solar panels. Discuss both views and give your own opinion.",
        minWords: 250,
        guide: "Write at least 250 words. Scored on task response, coherence and cohesion, lexical resource, and grammatical range and accuracy.",
        sample: "In many crowded cities, space is limited, so people disagree about how rooftops should be used. Some believe these areas should grow food, while others argue that solar panels are a better choice. This essay will discuss both views before giving my own opinion.\n\nOn the one hand, rooftop farms bring clear benefits to local communities. They provide fresh vegetables that travel a very short distance, which reduces transport pollution. In addition, plants cool the buildings below them and absorb rain water, which can reduce flooding during heavy storms. For example, several schools in Mumbai now grow vegetables on their roofs and use them in student meals. Children also learn where their food comes from.\n\nOn the other hand, solar panels can produce a large amount of clean energy from the same space. Since cities use a huge amount of electricity, panels may have a bigger effect on pollution than a small garden. They also need very little care once they are installed, whereas farms need water, workers and regular attention.\n\nIn my opinion, cities do not have to choose only one option. New designs place panels on raised frames with crops growing in the shade underneath, so both uses can share one roof. Governments should support these mixed projects because they combine the benefits of food and energy.\n\nIn conclusion, both rooftop farms and solar panels help cities in different ways. Each option has real strengths, but combining them on the same roof is the most sensible solution for the future of crowded cities." }
    ]
  },

  pte: {
    title: "PTE Academic · Mock 1",
    short: "Reading + Write Essay",
    minutes: 40,
    sections: [
      { id: "reading", label: "Reading", kind: "mcq", time: "20 min",
        passage: { title: "Bike-share in a crowded centre", paras: [
          "When the city launched its first bike-share scheme, planners expected commuters to be the main users. Data from the first year told a different story. Most trips were short, taken in the middle of the day, and began near markets, colleges and the railway station.",
          "Commuters did use the bikes, but many found the docks full in the morning and empty by evening. The operator responded by moving bikes overnight in vans, a task that added cost and, ironically, traffic.",
          "The scheme's second phase tried a different approach. Riders who returned a bike to a nearly empty dock earned a small credit. Within months, riders themselves were doing much of the work that the vans had done."
        ]},
        questions: [
          { t: "Multiple choice: Who used the bikes most in the first year?", o: ["Morning commuters", "People making short trips in the middle of the day", "Tourists at weekends", "Delivery workers"], a: 1 },
          { t: "Multiple choice: What problem did commuters face?", o: ["The bikes were too expensive", "Docks were full in the morning and empty by evening", "The railway station had no docks", "The bikes were too heavy"], a: 1 },
          { t: "Fill in the blank: Moving bikes in vans added cost and, ironically, ______.", o: ["traffic", "riders", "docks", "credit"], a: 0 },
          { t: "Multiple choice: What was the credit in the second phase for?", o: ["Raising ticket prices", "Getting riders to move bikes to empty docks", "Rewarding commuters who rode every day", "Paying the van drivers"], a: 1 },
          { t: "Multiple choice: Which title best fits the passage?", o: ["How riders fixed a bike-share problem", "Why cities should ban vans", "A short history of the bicycle", "Railway stations of the future"], a: 0 }
        ]},
      { id: "essay", label: "Write Essay", kind: "essay", time: "20 min",
        prompt: "Some people believe governments should invest in public bike-share schemes rather than build more roads. To what extent do you agree or disagree? Support your opinion with reasons and examples.",
        minWords: 200, maxWords: 300,
        guide: "Write 200–300 words. Scored on content, form, development and structure, grammar, vocabulary and spelling.",
        sample: "Traffic in large cities keeps growing, and governments must decide where to spend transport money. I largely agree that public bike-share schemes deserve more investment than new roads, although roads cannot be ignored completely.\n\nFirstly, new roads often fill with cars within a few years. A wider road makes driving easier, so more people drive, and the jams return. Bike-share schemes, in contrast, take short trips off the road entirely. Many journeys in a city centre are under three kilometres, which is an easy distance on a bicycle. For example, students travelling from a hostel to a college rarely need a car or even a bus for such a short ride.\n\nSecondly, bikes are far cheaper to provide than roads. The cost of one flyover could fund thousands of bicycles and docks across a city. In addition, cycling improves public health and reduces air pollution, which saves money for hospitals in the long term. Cleaner air also makes busy streets more pleasant for people who walk.\n\nHowever, roads are still needed for buses, ambulances and goods vehicles. A city cannot run on bicycles alone, and some people cannot cycle because of age or disability.\n\nIn conclusion, governments should spend most new transport money on bike-share schemes and safe cycle lanes, while maintaining existing roads for essential vehicles." }
    ]
  },

  toefl: {
    title: "TOEFL iBT · Mock 1",
    short: "Reading + Academic Discussion",
    minutes: 35,
    sections: [
      { id: "reading", label: "Reading", kind: "mcq", time: "20 min",
        passage: { title: "Why some city birds sing at night", paras: [
          "In many European cities, robins can be heard singing well after dark. For years, observers assumed that street lighting simply confused the birds into thinking day had begun. Field studies have suggested a different explanation.",
          "Researchers who recorded robins in noisy and quiet districts found that night singing was most common where daytime noise was highest. Traffic masks the song during the day, so a male whose call cannot be heard at noon may shift his effort to the quieter hours.",
          "Light still plays a part. Birds near bright windows began singing earlier in the evening than birds on dim streets. Yet when noise and light were measured together, noise was the better predictor of who sang at night."
        ]},
        questions: [
          { ctx: "Read in daily life — Notice, Science Library: From Monday, group study rooms on Floor 2 must be booked online. Bookings are limited to two hours per day. Rooms not claimed within 15 minutes of the start time will be released to the next student.",
            t: "What is the main purpose of the notice?", o: ["To announce a booking rule for study rooms", "To close the science library", "To advertise a new course", "To change library opening hours"], a: 0 },
          { ctx: "Same notice as above.",
            t: "What happens if a student arrives 20 minutes after the booking starts?", o: ["The booking is extended", "The room may be given to another student", "The student pays a fee", "Nothing changes"], a: 1 },
          { t: "Academic passage: What explanation for night singing did observers first assume?", o: ["Birds were avoiding predators", "Street lighting made birds think day had begun", "Birds were calling to their young", "Night air carries sound further"], a: 1 },
          { t: "The word \"masks\" in paragraph 2 is closest in meaning to", o: ["hides", "reveals", "repeats", "measures"], a: 0 },
          { t: "What does the passage suggest about light and noise?", o: ["Light alone explains night singing", "Noise predicted night singing better than light", "Neither had any effect", "Only quiet districts had night singing"], a: 1 }
        ]},
      { id: "discussion", label: "Academic Discussion", kind: "essay", time: "10 min",
        prompt: "Your professor is teaching a class on urban planning. Write a post responding to the professor's question. In your response, express and support your opinion and make a contribution to the discussion.",
        posts: [
          { who: "Professor Rao", text: "Cities are getting louder. Should city councils limit night-time noise, such as traffic and construction after 10 pm, even if it slows down building projects? Why or why not?" },
          { who: "Ananya", text: "Yes. People and wildlife both need quiet hours. A project that takes a few weeks longer is better than a whole neighbourhood losing sleep." },
          { who: "Leo", text: "I'm not sure. Some roads can only be repaired at night, when traffic is light. A strict limit could move the noise and the jams into the day." }
        ],
        minWords: 100,
        guide: "Write at least 100 words. Give your view, support it, and respond to the discussion.",
        sample: "I agree with Ananya that councils should limit night-time noise, but I think Leo's point shows the limit needs exceptions rather than a total ban. Sleep is not a luxury. Studies of city birds even suggest that daytime traffic is now so loud that wildlife has moved its activity into the night, so the quiet hours matter for more than people.\n\nA sensible rule would allow essential road repairs after 10 pm only with a permit, a fixed end date, and notice to residents. Ordinary construction, such as building a shopping centre, would have to stop at night. This keeps the busiest roads repairable without turning every street into a night-time worksite. In my view, a few extra weeks on a private project is a fair price for a city that can still sleep." }
    ]
  },

  gmat: {
    title: "GMAT Focus · Mock 1",
    short: "Quant + Verbal + Data Insights",
    minutes: 30,
    sections: [
      { id: "quant", label: "Quantitative", kind: "mcq", time: "10 min",
        questions: [
          { t: "A shop sells notebooks at ₹40 each and gives 15% off orders of 10 or more. What do 12 notebooks cost?", o: ["₹396", "₹408", "₹420", "₹432", "₹450"], a: 1 },
          { t: "If 3x − 7 = 2x + 5, what is x?", o: ["−2", "2", "5", "7", "12"], a: 4 },
          { t: "The average of five numbers is 18. Four of them are 12, 15, 20 and 25. What is the fifth?", o: ["16", "18", "20", "22", "24"], a: 1 },
          { t: "Pipe A fills a tank in 6 hours and pipe B in 3 hours. Working together, how long do they take?", o: ["1.5 hours", "2 hours", "2.5 hours", "4.5 hours", "9 hours"], a: 1 }
        ]},
      { id: "verbal", label: "Verbal", kind: "mcq", time: "10 min",
        passage: { title: "Critical reasoning", paras: [
          "City council: After speed cameras were installed on Ring Road, reported accidents on Ring Road fell by 30% within a year. Therefore, installing speed cameras on every main road will cut accidents across the city by 30%."
        ]},
        questions: [
          { t: "Which of the following is an assumption the argument depends on?", o: ["Accidents on other main roads have causes that cameras would also reduce", "Ring Road is the longest road in the city", "Speed cameras are cheap to install", "Most drivers prefer Ring Road", "Most accidents happen at night"], a: 0 },
          { t: "Which of the following, if true, most weakens the argument?", o: ["In the same year, Ring Road was resurfaced and its sharpest bend straightened", "Residents generally support speed cameras", "Ring Road carries more traffic than any other road", "The council plans to buy more cameras next year", "Some drivers dislike being photographed"], a: 0 },
          { t: "Which of the following, if true, most strengthens the argument?", o: ["On three other roads where only cameras were added, accidents also fell by about a third", "Ring Road has more traffic lights than other roads", "Camera fines are paid online", "Accidents rose in a nearby city", "Speed limits were raised on Ring Road"], a: 0 }
        ]},
      { id: "di", label: "Data Insights", kind: "mcq", time: "10 min",
        passage: { title: "Table analysis — quarterly sales (units)", paras: [
          "<table class=\"di\"><thead><tr><th>Region</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th></tr></thead><tbody><tr><td>North</td><td>120</td><td>135</td><td>150</td><td>160</td></tr><tr><td>South</td><td>90</td><td>110</td><td>105</td><td>130</td></tr><tr><td>East</td><td>75</td><td>80</td><td>95</td><td>100</td></tr><tr><td>West</td><td>140</td><td>125</td><td>130</td><td>145</td></tr></tbody></table>"
        ]},
        questions: [
          { t: "Which region had the highest total sales across the four quarters?", o: ["North", "South", "East", "West"], a: 0 },
          { t: "In how many regions did sales rise in every quarter?", o: ["0", "1", "2", "3", "4"], a: 2 },
          { t: "By roughly what percent did South's sales grow from Q1 to Q4?", o: ["31%", "40%", "44%", "50%", "69%"], a: 2 }
        ]}
    ]
  },

  gre: {
    title: "GRE General · Mock 1",
    short: "Analytical Writing + Verbal + Quant",
    minutes: 35,
    sections: [
      { id: "aw", label: "Analytical Writing", kind: "essay", time: "15 min",
        prompt: "Universities should require every student to take courses outside their main field of study. Write a response in which you discuss the extent to which you agree or disagree with this recommendation, and explain your reasoning.",
        minWords: 200,
        guide: "Analyze an Issue. Take a position, support it with reasons and examples, and consider where the statement may not hold. Scored 0–6.",
        sample: "Requiring every student to study outside their main field is a sound policy in most cases, although the requirement should be designed so that it does not weaken specialist training.\n\nThe strongest reason for the requirement is that most real problems cross subject lines. An engineer designing a dam must understand the communities that will be moved; a doctor must explain risk to patients who are not scientists. Courses in history, economics or writing give specialists the tools to see these connections. In addition, students often discover their true interests only after trying an unfamiliar subject. A chemistry student who takes a course in public policy may realise that her real interest lies in environmental regulation, a career she would never have considered otherwise. Breadth, in this sense, does not dilute expertise; it gives expertise a direction.\n\nHowever, the recommendation does not hold equally well for every programme. In fields with long, tightly sequenced training, such as medicine or architecture, extra requirements can delay graduation and add cost. Here, the outside courses should be few and chosen to connect with the main field, for example ethics for medical students.\n\nTherefore, universities should keep the requirement, but they should shape it to each discipline rather than apply one fixed rule." },
      { id: "verbal", label: "Verbal Reasoning", kind: "mcq", time: "10 min",
        questions: [
          { t: "Text completion: Although the novelist's early work was dismissed as ______, later critics found in it a careful structure that earlier readers had missed.", o: ["meticulous", "haphazard", "celebrated", "profound", "austere"], a: 1 },
          { t: "Text completion: The committee's report was anything but ______: it ran to four hundred pages and answered every objection in detail.", o: ["exhaustive", "cursory", "thorough", "controversial", "lengthy"], a: 1 },
          { t: "Sentence equivalence: The scientist was ______ about the early results, refusing to draw conclusions until the trial was repeated. Choose the pair that gives the sentence the same meaning.", o: ["cautious / wary", "elated / thrilled", "careless / hasty", "certain / confident"], a: 0 }
        ]},
      { id: "quant", label: "Quantitative Reasoning", kind: "mcq", time: "10 min",
        questions: [
          { t: "Quantity A: 3/8    Quantity B: 0.4", o: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"], a: 1 },
          { t: "x > 0.    Quantity A: x²    Quantity B: x", o: ["Quantity A is greater", "Quantity B is greater", "The two quantities are equal", "The relationship cannot be determined"], a: 3 },
          { t: "A shirt's price rises by 20% and then falls by 20%. The final price is what percent of the original?", o: ["90%", "96%", "100%", "104%"], a: 1 },
          { t: "A class of 40 students has boys and girls in the ratio 3 : 5. How many girls are there?", o: ["15", "20", "24", "25"], a: 3 }
        ]}
    ]
  }
};
