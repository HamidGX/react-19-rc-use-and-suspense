export interface GamesByCategory {
	id: number
	title: string
	thumbnail: string
	short_description: string
	game_url: string
	genre: Genre
	platform: Platform
	publisher: string
	developer: string
	release_date: string
	freetogame_profile_url: string
}

export enum Genre {
	Action = 'Action',
	BattleRoyale = 'Battle Royale',
	Fighting = 'Fighting',
	MMORPG = 'MMORPG',
	Mmo = 'MMO',
	Moba = 'MOBA',
	Shooter = 'Shooter',
	Strategy = 'Strategy',
}

export enum Platform {
	PCWindows = 'PC (Windows)',
	PCWindowsWebBrowser = 'PC (Windows), Web Browser',
	WebBrowser = 'Web Browser',
}
