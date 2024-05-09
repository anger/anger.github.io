export const ctfEvents = [
  {
    name: "cr3 CTF 2024",
    desc: "",
    challenges: [
      {
        name: "secretclub",
        category: "web",
        href: "https://github.com/cr3mov/cr3ctf-2024/tree/main/challenges/web/secretclub",
        writeup: "https://github.com/cr3mov/cr3ctf-2024/tree/main/challenges/web/secretclub/solution",
        desc: "Use hidden express functionality to bypass internal checks and allow XSS leading to permission manipulation",
      },
    ],
  },
  {
    name: "SparkCTF 2024",
    desc: "",
    challenges: [
      {
        name: "Skip, skip, and away!",
        category: "pwn",
        href: "https://github.com/anger/CTF-Challenges/tree/main/pwn/skipskipandaway",
        writeup: "https://github.com/anger/CTF-Challenges/blob/main/pwn/skipskipandaway/solve.py",
        desc: "Use undefined behavior in setjmp() and longjump() to defeat binary protections and execute shellcode.",
      },
    ],
  },
  {
    name: "PatriotCTF 2023",
    desc: "",
    challenges: [
      {
        name: "Pick Your Starter",
        category: "web",
        href: "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/Web/pickyourstarter",
        writeup: "https://sanlokii.eu/writeups/patriotctf/pick-your-starter/",
        desc: "Blind SSTI leading to RCE",
      },
      {
        name: "Guessing Game",
        category: "pwn",
        href: "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/pwn/guessinggame",
        writeup:
          "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/pwn/guessinggame",
        desc: "Buffer Overflow leading to flag",
      },
      {
        name: "Wing it",
        category: "rev",
        href: "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/Rev/wing_it",
        writeup:
          "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/Rev/wing_it",
        desc: "An easy Reverse Engineering challenge",
      },
      {
        name: "Uh Oh!",
        category: "misc",
        href: "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/misc/Uh%20Oh!",
        writeup:
          "https://github.com/MasonCompetitiveCyber/PatriotCTF2023/tree/main/misc/Uh%20Oh!",
        desc: "A test in your knowledge of regular expressions",
      },
    ],
  },
];
