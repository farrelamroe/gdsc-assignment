module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"fgm-merah-orange": "#E62C20",
				"fgm-purple": "#9C4A9A",
				"fgm-orange": "#F69722",
				"fgm-hijau": "#4A8068",
				"fgm-base" :"#171717",
				"fgm-base-terang":"#242424"
			},
			screens: {
				mobile: { MIN: "360px", max: "639px" },
				navbar1: {MIN: "1280px", max: "1400px"},
				'xsm': '400px',
			},
			fontFamily: {
				Montserrat: ["Montserrat"],
				Inter: ["Inter"],
			},
			animation: {
				fade: 'fadeIn 500ms',
			  },
		
			  // that is actual animation
			  keyframes: theme => ({
				fadeIn: {
				  '0%': { opacity: '50%' },
				  '100%': { opacity: '100%' },
				},
			  }),
		},
		backgroundImage: {
			bgmobile: "url('../src/assets/162d4db6b536ff3412f23571a08525c5.webp')",
			bgdesktop:"url('../src/assets/background.webp')",
		},
	},
	plugins: [],
};
