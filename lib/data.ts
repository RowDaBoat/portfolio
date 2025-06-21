import { Gamepad2, Zap, Wrench, Bitcoin, Users, Target } from "lucide-react"

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  video?: string
  pouet?: string
  itch?: string
  android?: string
  github?: string
  assetStore?: string
  demo?: string
  license?: string
}

export interface ProjectCategories {
  games: Project[]
  gamedevTools: Project[]
  bitcoinNostr: Project[]
}

export interface Skill {
  name: string
  icon: any
}

export interface ProjectGroup {
  title: string
  description: string
  icon: any
  count: number
}

export const projectCategories: ProjectCategories = {
  games: [
    {
      title: "Man In The Vox",
      description:
        "Winning PC Demo entry for the Flashparty 2024. Written in Kotlin on top of Vexel, my own game engine.",
      image: "/man-in-the-vox.png",
      tags: ["Kotlin", "Voxels", "Vexel"],
      video: "https://www.youtube.com/watch?v=FuqRFe3w_nE",
      pouet: "https://www.pouet.net/prod.php?which=98277",
    },
    {
      title: "Mr. Maim",
      description:
        "Game for the Global Game Jam 2022 event. A Mime goes on a frantic clown-killing spree using imaginary weapons. It went viral on Twitter through its original premise.",
      image: "/mr-maim.jpg",
      tags: ["Unity", "C#", "FPS", "Global Game Jam"],
      itch: "https://rowdaboat.itch.io/mr-maim",
      video: "https://www.youtube.com/watch?v=5xuYpCEuWqw",
    },
    {
      title: "Behoarder",
      description:
        " Game for the Global Game Jam 2019 event, later released on Mobile stores. Ol'Duncan goes deep into the lair of the Behoarder to recover his stolen furniture. The game peaked at 10k users.",
      image: "/behoarder.png",
      tags: ["Unity", "C#", "Mobile", "Roguelike RPG", "Global Game Jam"],
      itch: "https://rowdaboat.itch.io/behoarder",
      android: "https://play.google.com/store/apps/details?id=com.gentlegoose.behoarder2",
    },
  ],
  gamedevTools: [
    {
      title: "Enhanced Timeline",
      description:
        "Published comercial Unity package that solves a lot of Unity's stock Timeline problems.\n\nIt features a simple reactive API, and is networking ready out of the box.",
      image: "/enhanced-timeline.webp",
      tags: ["Unity", "C#", "Rx", "Networking", "Mirror"],
      assetStore: "https://assetstore.unity.com/packages/tools/utilities/enhanced-timeline-305512",
      video: "https://www.youtube.com/watch?v=PbvnzbJkBHg",
      license: "Unity's EULA",
    },
    {
      title: "Network Input",
      description:
        "Published comercial Unity package integrating networking into Unity's Input System, ideal for server authoritative multiplayer games.\n\nNetworking Solutions: Mirror, N4GO, FishNet, your own.",
      image: "/network-input.webp",
      tags: ["Unity", "C#", "Networking", "Mirror", "N4GO", "FishNet"],
      assetStore: "https://assetstore.unity.com/packages/tools/input-management/network-input-315259",
      license: "Unity's EULA",
    },
    {
      title: "Vexel",
      description:
        "A modular game engine developed in 1 year.\n\nFeaturing: voxel graphics, hardware accelerated raytracing, global illumination, ImGUI integration, and an extensible content pipeline.",
      image: "/vexel.png",
      tags: ["Kotlin", "Game Engine", "Vulkan", "Raytracing", "Global Illumination", "ImGUI", "LWJGL"],
      video: "https://www.youtube.com/watch?v=FuqRFe3w_nE",
      license: "Not Public",
    },
    {
      title: "Keep",
      description:
        "A game engine for text-based adventure games written in Kotlin.\n\nIt features an easy to read and write, fully documented, domain specific language to design scenes, items, characters, actions, and state machines.",
      image: "/keep.png",
      tags: ["Kotlin", "Game Engine", "Text Adventures"],
      github: "https://github.com/RowDaBoat/keep-engine",
      license: "Open Source, ISC",
    },
    {
      title: "shaderc-nim",
      description:
        "Shaderc is Google's collection of tools and libraries for shader compilation, mostly used to compile GLSL code into SPIRV.\n\nThis library provides bindings for the nim programming language.",
      image: "TEXT:shaderc+👑",
      tags: ["Nim", "GLSL", "SpirV"],
      github: "https://github.com/RowDaBoat/shaderc-nim",
      license: "Open Source, ISC",
    },
    {
      title: "Kobold Parsing Kit",
      description:
        "A set of tools to create lexers, parsers, and compilers, using grammars expressed in a simple domain specific language. No regular expressions, just an easy to learn DSL.\n\nKobold Parsing Kit is implemented in Kotlin, with a left-recursive packrat parser.",
      image: "/kobold-parsing-kit.png",
      tags: ["Kotlin"],
      github: "https://github.com/RowDaBoat/kobold-parsing-kit/tree/trunk",
      license: "Open Source, ISC",
    },
  ],
  bitcoinNostr: [
    {
      title: "nodrop.btc",
      description:
        "No Drama Operations for Bitcoin and frens.\n\nA bare-bones approach to DevOps on Bitcoin, deploy your own bitcoind, lnd, and ord nodes and servers, serve your own NIP-05 and LNURL, all with minimal and standard configuration, and without any heavy interfaces.",
      image: "TEXT:nodrop.btc",
      tags: ["Bitcoin", "Lightning", "Ordinals", "Nostr", "Docker", "DevOps"],
      github: "https://github.com/RowDaBoat/nodrop.btc",
      license: "Open Source, ISC",
    },
    {
      title: "glostr",
      description:
        "glostr renders GLSL shaders written on nostr notes. The project aims to use Nostr as a platform to visualize and share computer graphics code.",
      image: "/glostr.png",
      tags: ["Nostr", "TypeScript", "WebGL", "GLSL"],
      github: "https://github.com/RowDaBoat/glostr",
      demo: "https://rowdaboat.github.io/glostr/#npub1u3svk99639mcdfn43s2nawg4a2j4ejmgrq2n63l4t67wzqdmtnks2uxaql",
      license: "Open Source, ISC",
    },
  ],
}

export const skills: Skill[] = [
  { name: "Product Orientation", icon: Target },
  { name: "Game/Engine Development", icon: Gamepad2 },
  { name: "Building, Growing, and Leading Teams", icon: Users },
  { name: "Ultra Fast Prototyping", icon: Zap },
]

export const projectGroups: ProjectGroup[] = [
  {
    title: "Games and Demos",
    description: "Self-published games, and demoscene productions.",
    icon: Gamepad2,
    count: projectCategories.games.length,
  },
  {
    title: "Tools and Libraries",
    description: "Open source and commercial tools for game development (mostly).",
    icon: Wrench,
    count: projectCategories.gamedevTools.length,
  },
  {
    title: "Bitcoin and Nostr",
    description: "Pet projects setting up Bitcoin infrastructure and harnessing Nostr's power.",
    icon: Bitcoin,
    count: projectCategories.bitcoinNostr.length,
  },
]
