/*

This file simulates a channel loading by playing back all the events that were
received by the api when I loaded the page one afternoon.  This allows you to debug 
styling changes in a web browser instead of having to reload the style in Linkinus.

*/

//   \/ Change this to true to enable the output.
if (false) Event.observe(window,'load', function () {
	var actions = 
	[
		{
			"action": "style:scrollTo",
			"args": {
				"target":"bottom",
				"forced": true
			}
		}, {
			"action": "style:scrollTo",
			"args": {
				"target":"bottom",
				"forced": true
			}
		}, {
			"action": "style:setting",
			"args": {
				"key": "Variant",
				"value": "Dark"
			}
		}, {
			"action": "style:setting",
			"args": {
				"key": "FontSize",
				"value": 11
			}
		}, {
			"action": "style:setting",
			"args": {
				"key": "CombinedMessages",
				"value": 0
			}
		}, {
			"action": "style:setting",
			"args": {
				"key": "Emoticons",
				"value": 0
			}
		}, {
			"action": "style:setting",
			"args": {
				"key": "SpotlightUserMessagesOnHover",
				"value": 0
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD00AD779-857E-40B2-B5B7-903D4A814232-70974-000101C5D2B9943E",
				"nick": "silentsurf",
				"description": "spotlight will never work again...",
				"time": "5:04 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L8BC4D090-285D-4810-A6F5-C2A00B3B1AF6-70974-000102238F94E8EC",
				"nick": "PegaYenzi",
				"description": "Quit: Get your MOS fan shirt at www.sharky-shirts.de",
				"time": "5:10 PM",
				"nick_color": "14",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~PegaYenzi@p4FC6046F.dip0.t-ipconnect.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LCE523C17-08E3-423D-921C-D837AE8114D2-70974-000102312212E560",
				"nick": "stirlingsilver",
				"description": "",
				"time": "5:11 PM",
				"nick_color": "13",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~stirlings@67-60-62-39.cpe.cableone.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB56794F0-1AD4-4AB7-8CB7-E0D134929AD6-70974-0001024785479818",
				"nick": "Wally",
				"description": "silentsurf I had something wrong with spotlight",
				"time": "5:13 PM",
				"nick_color": "16",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L81761006-B480-43A1-8C0F-4FB05BD815FB-70974-0001025172C0FC9F",
				"nick": "silentsurf",
				"description": "how did you fix it?",
				"time": "5:14 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L81AFFDD1-8AA0-47A2-8CAE-416FE1BDDC6B-70974-000102531B3CCB2C",
				"nick": "Wally",
				"description": "It fixed itself xD",
				"time": "5:14 PM",
				"nick_color": "16",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0F10BFE7-FBFB-4B77-9A2D-A210C80B3F67-70974-000102540834F15F",
				"nick": "silentsurf",
				"description": "figures lol",
				"time": "5:14 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD8016E77-BE11-4448-A2D7-C732A6E220C8-70974-0001025584FA0EAB",
				"nick": "silentsurf",
				"description": "going to take battery out and reboot",
				"time": "5:14 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2A06A89B-3966-4492-AC82-4B65B5ED1DE4-70974-00010255EB53A91A",
				"nick": "silentsurf",
				"description": "and rest pram",
				"time": "5:14 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4B0A5596-CAA5-420A-A591-FF925E1CE1D1-70974-0001025665FD0E21",
				"nick": "Wally",
				"description": "i may have done some error checking.",
				"time": "5:14 PM",
				"nick_color": "16",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5D40C080-1E2A-4865-BCA0-BC15B55D1033-70974-00010256EAC88B5D",
				"nick": "silentsurf",
				"description": "doubt that will fix anything",
				"time": "5:14 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LF1D7A08C-80DA-484A-8950-F92F612FE2B9-70974-00010258DC12B356",
				"nick": "remyo",
				"description": "Quit: remyo",
				"time": "5:14 PM",
				"nick_color": "1",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L2A3F1075-41F9-4387-8E01-897E6346D49E-70974-000102600B90BC32",
				"nick": "turkchgo",
				"description": "",
				"time": "5:15 PM",
				"nick_color": "15",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "trbldwine@2001:470:1f11:acf:21d:4fff:fe4b:d2ec",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L32C8FA4F-648C-48C1-87E4-9EA848313DD9-70974-0001027936F554B6",
				"nick": "jedivulcan",
				"description": "I can't stand spotlight... it's a shoddy application launcher at best.",
				"time": "5:16 PM",
				"nick_color": "17",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jedivulca@wikia/majorthomme",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFF25365D-E406-4DD7-AF98-BCD633129298-70974-0001027DC7C69113",
				"nick": "silentsurf",
				"description": "i used it for launching apps",
				"time": "5:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L865F13FE-D1A5-42F2-BA4F-5B87C2150456-70974-0001027E67277554",
				"nick": "silentsurf",
				"description": "accessing files quick",
				"time": "5:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA25AD968-2407-40FF-B669-8BA074839B8B-70974-0001027EA8851A4F",
				"nick": "silentsurf",
				"description": "documents",
				"time": "5:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6130DD79-A561-4C38-B7DA-00F339BD9958-70974-0001027F4FA13150",
				"nick": "silentsurf",
				"description": "and calculator",
				"time": "5:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4A78F51D-AABD-4805-967E-526310FCF089-70974-0001027F7CF3C127",
				"nick": "silentsurf",
				"description": "i liked it",
				"time": "5:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBECFDED5-1435-478F-A2FA-FCFE12581599-70974-0001027FFFDDEA72",
				"nick": "silentsurf",
				"description": "mad it broke itself",
				"time": "5:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCE7F0EBE-8DBC-412F-BFE6-9258771EB1F8-70974-00010280C8550C79",
				"nick": "silentsurf",
				"description": "using quicksilver now...",
				"time": "5:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LEB072A69-9143-4EA0-912A-E0014A934AF8-70974-000102819AEA79CB",
				"nick": "LordDragon",
				"description": "Quit: Hmm.. Seems like I quit",
				"time": "5:17 PM",
				"nick_color": "2",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Dragon@unaffiliated/lorddragon",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBC3394B0-4A43-4B46-AC83-5AB381D0F4B2-70974-00010281E6CF0B0B",
				"nick": "silentsurf",
				"description": "but it calculator module dont owrk",
				"time": "5:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7DB8374D-C526-4086-B662-7DE0DC7556EB-70974-0001028235380493",
				"nick": "jedivulcan",
				"description": "Yeah. I use the calculator a lot.",
				"time": "5:17 PM",
				"nick_color": "17",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jedivulca@wikia/majorthomme",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9CB3DE19-F346-4891-841B-97E3B85944FD-70974-0001028905AAE238",
				"nick": "silentsurf",
				"description": "brb in a few min",
				"time": "5:18 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L95C43768-608D-4F19-B73C-0A81D0B88AF7-70974-00010289551EA18F",
				"nick": "silentsurf",
				"description": "tryign thi",
				"time": "5:18 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA3A1438D-9377-41E4-A68B-56E1C1412152-70974-00010289CE843812",
				"nick": "silentsurf",
				"description": "trying this*",
				"time": "5:18 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC13DFFC3-3CA9-4DAA-8CF9-29FCD5316EC8-70974-0001028BCEBB8307",
				"nick": "silentsurf",
				"description": "Quit: silentsurf",
				"time": "5:18 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L03102889-0CB1-490C-ABA3-89939B8B2188-70974-000102A89B8AEA38",
				"nick": "tschundeee",
				"description": "Quit: tschundeee",
				"time": "5:20 PM",
				"nick_color": "18",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~anonymous@HSI-KBW-085-216-123-190.hsi.kabelbw.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L5E6D9BBD-EBBC-48BC-8CA3-84A496F12CC4-70974-000102BF60CE953E",
				"nick": "Krazy_Sea",
				"description": "Ping timeout: 246 seconds",
				"time": "5:21 PM",
				"nick_color": "2",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~krazy_sea@131.204.254.71",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L878DF93A-7A72-4AAE-8009-C773D1310061-70974-000102C520163D85",
				"nick": "LordDragon",
				"description": "",
				"time": "5:22 PM",
				"nick_color": "1",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Dragon@lorddragon.twilightparadox.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L1A72DF96-6A09-46D6-B1D0-A95269C40FC8-70974-000102C53B79F2F2",
				"nick": "LordDragon",
				"description": "Changing host",
				"time": "5:22 PM",
				"nick_color": "1",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Dragon@lorddragon.twilightparadox.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6894C2D0-56C9-4C07-8D51-0ED457DC63CD-70974-000102C54594C78E",
				"nick": "LordDragon",
				"description": "",
				"time": "5:22 PM",
				"nick_color": "2",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Dragon@unaffiliated/lorddragon",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L66B6E931-3D1C-427A-85F0-698E0093A4E7-70974-000102C9CAD01252",
				"nick": "grekkos",
				"description": "I use alfred now",
				"time": "5:22 PM",
				"nick_color": "5",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~grekkos@pool-173-77-183-135.nycmny.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L36D7CAD5-FC03-41C9-BBF3-22875FB993CB-70974-000102CAA756D591",
				"nick": "grekkos",
				"description": "been trying it out for the past few days",
				"time": "5:22 PM",
				"nick_color": "5",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~grekkos@pool-173-77-183-135.nycmny.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L01BB586E-FE0C-450B-842C-37E0B69E46E2-70974-000102E06DF0EFAA",
				"nick": "MrUnagi",
				"description": "",
				"time": "5:24 PM",
				"nick_color": "16",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~mrunagi@c-98-244-140-239.hsd1.ga.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L367ABCD1-A280-405F-BDD4-304A83F3A5E2-70974-000102E7DD469E28",
				"nick": "stirlingsilver",
				"description": "Quit: Computer has gone to sleep",
				"time": "5:24 PM",
				"nick_color": "13",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~stirlings@67-60-62-39.cpe.cableone.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8AD19261-17E3-40FA-84FA-79FE07082CF5-70974-000102F8145609C3",
				"nick": "silentsurf",
				"description": "",
				"time": "5:25 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L07A5F7C4-28CB-41CB-8CFB-D909F79C63A0-70974-000102F9C7E9C9F9",
				"nick": "silentsurf",
				"description": "well that failed as i expected",
				"time": "5:26 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L44E1AF98-FCA3-4C97-BCC0-C159E9BB32DA-70974-0001032E8AD97E39",
				"nick": "frogor",
				"description": "",
				"time": "5:29 PM",
				"nick_color": "5",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L254CA34C-0D1D-4EE0-A401-2B096061A83C-70974-0001034411C663C2",
				"nick": "Necrosand",
				"description": "",
				"time": "5:31 PM",
				"nick_color": "14",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~necrosan@unaffiliated/necrosan",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LF92D784C-97BC-4FBF-BA7B-A8F187E09A7F-70974-00010357C3B5410C",
				"nick": "snoopy_minimac",
				"description": "",
				"time": "5:32 PM",
				"nick_color": "17",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~snoopy@118-46-237-24.gci.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBA638E21-2C69-4985-8F06-027B0D19FDC7-70974-000103707C96261B",
				"nick": "grekkos",
				"description": "at least you were expecting it",
				"time": "5:34 PM",
				"nick_color": "5",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~grekkos@pool-173-77-183-135.nycmny.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9525D73A-4914-41A8-BC8B-23FCAD222534-70974-0001037494211CDD",
				"nick": "MrUnagi",
				"description": "Quit: Colloquy for iPad - http://colloquy.mobi",
				"time": "5:34 PM",
				"nick_color": "16",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~mrunagi@c-98-244-140-239.hsd1.ga.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L073E0443-F0D5-4961-B53E-A8BA4A050558-70974-00010379AE169375",
				"nick": "Necrosan",
				"description": "Ping timeout: 260 seconds",
				"time": "5:35 PM",
				"nick_color": "14",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~necrosan@unaffiliated/necrosan",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LE79A42A7-3BDA-4307-845C-77F025818BBD-70974-0001037E0B1CA4F9",
				"nick": "Necrosand",
				"description": "Ping timeout: 246 seconds",
				"time": "5:35 PM",
				"nick_color": "14",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~necrosan@unaffiliated/necrosan",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9803D18F-C7F2-4D15-A6FA-46BB339FBBCB-70974-000103863497D3B5",
				"nick": "Necrosan",
				"description": "",
				"time": "5:36 PM",
				"nick_color": "14",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~necrosan@unaffiliated/necrosan",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L6E71AE5A-1AB2-4EE5-8923-62EED099E933-70974-0001039AF22075B6",
				"nick": "Flowerbauer",
				"description": "Ping timeout: 276 seconds",
				"time": "5:37 PM",
				"nick_color": "14",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~kablooie@e181048156.adsl.alicedsl.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L87D5E640-3016-4F34-9D72-F13E7607A6F5-70974-000103A15265D04F",
				"nick": "leochencipher",
				"description": "Quit: WeeChat 0.3.4",
				"time": "5:38 PM",
				"nick_color": "18",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~leo@cpe-66-68-105-42.austin.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L01DF8546-BA6A-489D-99A7-FE5CABC0E644-70974-000103BD42A79AC6",
				"nick": "silentsurf",
				"description": "heh.",
				"time": "5:40 PM",
				"nick_color": "20",
				"extra": "",
				"current": false,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nickname@c-68-60-30-205.hsd1.tn.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:scrollTo",
			"args": {
				"target":"bottom",
				"forced": true
			}
		}, {
			"action": "style:scrollTo",
			"args": {
				"target":"bottom",
				"forced": true
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L88FA8420-44A3-4E9F-B80D-6413A74A3B4B-75542-000148CC67CB49A4",
				"nick": "Wally",
				"description": "Worry Warts is one of my favourites",
				"time": "5:10 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3C76476F-9AEE-4D3B-B0C6-29501A93954F-75542-000148CE12D3ED46",
				"nick": "dleedev",
				"description": "Quit: dleedev",
				"time": "5:10 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~dleedev@207.47.25.98.static.nextweb.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L086EBAE7-F7BB-461C-AA68-E136F16960EE-75542-000148CE629FD8BF",
				"nick": "Wally",
				"description": "or misery guts",
				"time": "5:10 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L259A53EA-9F63-48A5-AF6F-0E1644339C7A-75542-000148CF45FB3D3C",
				"nick": "zapzupnz",
				"description": "ah no, Paul Jennings, that's the one",
				"time": "5:10 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9C4D2298-9E61-46DA-862D-AC48F8FDC944-75542-000148CF9A110010",
				"nick": "frogor",
				"description": "I'm straight up Stephen King for my horror.",
				"time": "5:10 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF16978D8-82C6-4B60-B11F-281F95F303B8-75542-000148D280D3D9C6",
				"nick": "zapzupnz",
				"description": "but yes, Maurice Gleitzman too",
				"time": "5:11 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE5D9C6D6-3E99-4F94-BFF7-9FBE3BE3C53E-75542-000148D2F6C64695",
				"nick": "Wally",
				"description": "xD",
				"time": "5:11 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC72E84B9-DE6D-4189-B04E-B8966AFF6889-75542-000148DB228A0902",
				"nick": "Hauser",
				"description": "Remote host closed the connection",
				"time": "5:11 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Hauser@69-196-135-163.dsl.teksavvy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6E06845F-6B24-42D8-A6CE-D62D9789B250-75542-000148E63D00C687",
				"nick": "zapzupnz",
				"description": "Paul Jennings and his childrens stories about the impossible happening, and by the end of it someone had their head lopped off with an invisible bottle made of paper or something like that",
				"time": "5:12 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9309AE73-80E7-4A7A-AC58-81BB72F1C78B-75542-000148EC1883E7FD",
				"nick": "Hauser",
				"description": "",
				"time": "5:12 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Hauser@69-196-135-163.dsl.teksavvy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0E6AAFBE-B85D-4307-9BA4-2DDE239421A6-75542-000148EC8960A58E",
				"nick": "zapzupnz",
				"description": "we had to do close reading on those - it was hard to analyse something that makes no sense lol",
				"time": "5:12 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L667D8C2E-6C63-4EF5-986E-02FE906C6B31-75542-000148F7F21F9EEA",
				"nick": "DainHome",
				"description": "",
				"time": "5:13 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Dain@gai69-4-82-228-194-226.fbx.proxad.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD9F18A30-49EF-4085-BE72-07B9F407B589-75542-000148F7F3CF1A28",
				"nick": "DainHome",
				"description": "Changing host",
				"time": "5:13 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Dain@gai69-4-82-228-194-226.fbx.proxad.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8B0CC70D-1F2C-4997-A097-3EF9B7257831-75542-000148F7F3EDD6A6",
				"nick": "DainHome",
				"description": "",
				"time": "5:13 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Dain@wikipedia/daindwarf",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LEEB201D7-A688-4DE8-A1BB-47918E37A377-75542-000148FF7552EA97",
				"nick": "konfluenzpunkt",
				"description": "Remote host closed the connection",
				"time": "5:14 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~konfluenz@dslb-088-067-059-046.pools.arcor-ip.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LB378F0D9-8189-4D3B-A8F4-BA35581F11AF-75542-00014901717F4395",
				"nick": "sluther",
				"description": "",
				"time": "5:14 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sluther@99-171-101-157.lightspeed.irvnca.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD0BF0EA0-BB34-4DA4-BE16-3BCDD6110CDC-75542-0001491245FDC396",
				"nick": "thebigkiwi",
				"description": "Remote host closed the connection",
				"time": "5:15 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~thebigkiw@cm49.kappa250.maxonline.com.sg",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6EF33C13-77B8-44CF-88B4-5ABF0C8BA609-75542-00014919B2944DC0",
				"nick": "Wally",
				"description": "zapzupnz hence the around the twist TV series :P",
				"time": "5:16 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L47C81B44-6475-4841-9326-921A3C196399-75542-0001491B389EDB1D",
				"nick": "multiHYP",
				"description": "",
				"time": "5:16 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC7125B2E-B270-4BB3-AE0F-34E96A09F5B4-75542-00014925CA68AF96",
				"nick": "zapzupnz",
				"description": "ah now, i vaguely remember that",
				"time": "5:17 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L73290992-D8E3-4B09-B516-FA5F2DBA5A4F-75542-0001492C12DB4602",
				"nick": "doppiabeo",
				"description": "Ping timeout: 260 seconds",
				"time": "5:17 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~doppiabeo@217.202.42.222",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9EF47CB1-8931-4478-BD5A-565A73C79A28-75542-000149322C425003",
				"nick": "zapzupnz",
				"description": "the only australian kids tv programme i remember with any clarity was The Wayne Manifesto",
				"time": "5:17 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L77504D74-902B-4843-8753-3554BA177CC8-75542-00014933A6DC866F",
				"nick": "zapzupnz",
				"description": "and i only remember it because it had a creepy theme song",
				"time": "5:18 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "LB202DA45-71CF-402E-A9E0-B09A8AEC6AE3-75542-0001493DE7D3FA19",
				"nick": "psst",
				"description": "",
				"time": "5:18 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~psst@cpc13-shef11-2-0-cust584.barn.cable.virginmedia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0C030583-A4E3-4F26-B08B-A5715E358576-75542-0001494B8CB95140",
				"nick": "SpecR_",
				"description": "",
				"time": "5:19 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ellanos@190.187.40.112",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LA8A97834-BA49-4D19-BF71-A06D83F56DD6-75542-0001494BB804330A",
				"nick": "SpecR",
				"description": "Read error: Connection reset by peer",
				"time": "5:19 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~ellanos@190.187.40.112",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8BAA20DD-17A1-4CEF-AFDA-6F86E275BD72-75542-0001496071603F7C",
				"nick": "Missingno255",
				"description": "",
				"time": "5:21 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Missingno@adsl-68-125-35-142.dsl.irvnca.pacbell.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L829A67D2-9563-4629-8F48-744E30B6788F-75542-0001496079125456",
				"nick": "Missingno255",
				"description": "Changing host",
				"time": "5:21 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Missingno@adsl-68-125-35-142.dsl.irvnca.pacbell.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD1696403-9ACE-4E8C-8F99-EA42EDEA8B8C-75542-0001496079397986",
				"nick": "Missingno255",
				"description": "",
				"time": "5:21 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Missingno@unaffiliated/missingno255",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L83B4AB81-9CED-4408-8B10-35827634F513-75542-000149664743600F",
				"nick": "Lyle42",
				"description": "Quit: Quitting!",
				"time": "5:21 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Lyle42@c-69-141-142-184.hsd1.nj.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LCE4C97B8-2693-4658-9013-2F1D90C3EB56-75542-0001496D5E48D350",
				"nick": "zero_lapse",
				"description": "Quit: Computer has gone to sleep.",
				"time": "5:22 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~textual@77-57-217-246.dclient.hispeed.ch",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LBA2DF4CD-B8DF-441F-A0B3-CD2B1599325D-75542-0001497E42CB5C9E",
				"nick": "multiHYP",
				"description": "Quit: multiHYP",
				"time": "5:23 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L69FBAE54-B9EE-45B0-BF56-D3BFFE7906EE-75542-00014981A1D2C107",
				"nick": "stirlingsilver",
				"description": "Quit: Quit",
				"time": "5:23 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~stirlings@67-60-62-39.cpe.cableone.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L5200D00E-77F5-4BD9-B710-CD2D7BDAA5D2-75542-00014988AF296E64",
				"nick": "jfrisby",
				"description": "",
				"time": "5:24 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jfrisby@216.55.29.174",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3FAD4314-0A0C-4C47-B3C9-C7E76408FAB2-75542-000149982CEE5CB6",
				"nick": "`marianne`",
				"description": "Quit: This computer has gone to sleep",
				"time": "5:25 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~marianne@cpc1-clif8-2-0-cust963.12-4.cable.virginmedia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L02F15CAA-8F5C-48FB-AEFD-256AD68622ED-75542-0001499D0AFF2B50",
				"nick": "schmity",
				"description": "",
				"time": "5:25 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~schmity@ucb-np2-237.colorado.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LDF22EFFE-5009-4C92-8094-54606BDB1A23-75542-000149A65EAF2D27",
				"nick": "TheNavyBear",
				"description": "Quit: I Quit!",
				"time": "5:26 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Slave@unaffiliated/thenavybear",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3B7EAD4B-2A33-4104-A15C-309A689E6D15-75542-000149B06D0B24BE",
				"nick": "tgunr",
				"description": "Quit: Computer has gone to sleep.",
				"time": "5:26 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L5DE863FB-2E0F-4FA6-9585-948209C1A662-75542-000149BA852C79E7",
				"nick": "Segnale007",
				"description": "",
				"time": "5:27 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Segnale00@ppp-212-139.98-62.inwind.it",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD238CF01-34F9-46E1-A245-4CBD250415C0-75542-000149C7C6EE7CC5",
				"nick": "RichardP",
				"description": "Ping timeout: 258 seconds",
				"time": "5:28 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9BEFA0ED-D88A-48D4-BB1E-1A07E7F0EDF7-75542-000149D722B7F9FB",
				"nick": "Segnale007",
				"description": "Remote host closed the connection",
				"time": "5:29 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Segnale00@ppp-212-139.98-62.inwind.it",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L1F9450EC-26A7-40A0-81CC-AA49D2F914FC-75542-000149F7B42E327E",
				"nick": "rustymyers",
				"description": "Quit: Good lord, I'm tired.",
				"time": "5:32 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~rustymyer@c-98-235-170-33.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "LE89D06BE-5F68-471F-A260-87FA494F8197-75542-000149FC815B7598",
				"nick": "chiper",
				"description": "does a little dance",
				"time": "5:32 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA5D91316-7ABF-42D9-B605-420BCDCDC0B3-75542-00014A044AF541B7",
				"nick": "chiper",
				"description": "frogor: I've got the foundation for my style in place. &nbsp;I wrote a wrapper that dispatches every linkinus call in the api as an event on the document",
				"time": "5:32 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L465C6272-8CAD-4E31-A4E5-636EC90970E1-75542-00014A081D42C67C",
				"nick": "Gorroth",
				"description": "Ping timeout: 260 seconds",
				"time": "5:33 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~grimw@ool-4579069f.dyn.optonline.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4205DDD9-9F1A-4E28-9FBF-797B4F488B8A-75542-00014A0E250417B2",
				"nick": "chiper",
				"description": "at the moment all it's doing is spitting out a bunch of console messages, but it's a start",
				"time": "5:33 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE5F5BA05-6CA4-4EE8-82EA-A00B53203C41-75542-00014A11195F1ABB",
				"nick": "frogor",
				"description": "Coolies",
				"time": "5:33 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6EB49527-15A0-451B-A5F1-663D5FFCD6F9-75542-00014A1329420C59",
				"nick": "frogor",
				"description": "Now integrate WebGL.",
				"time": "5:34 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L58C92DC1-794E-481E-BBFA-D991CE6903B4-75542-00014A15116E8786",
				"nick": "CPng|N",
				"description": "Quit: Leaving.",
				"time": "5:34 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD67E63FD-002A-4D1F-B5B6-D4FC933AC80A-75542-00014A152130E800",
				"nick": "chiper",
				"description": "o.O for what?",
				"time": "5:34 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L579F34EB-CA9F-4439-81DA-693445C9DB33-75542-00014A155268876E",
				"nick": "frogor",
				"description": "And rotate your conversations.",
				"time": "5:34 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LCBD12495-B52B-456E-BB3D-09AE4F17B73D-75542-00014A1665140EEA",
				"nick": "Gorroth",
				"description": "",
				"time": "5:34 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~grimw@ool-4579069f.dyn.optonline.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD3364A29-12B6-476A-BBA9-8123C9FF9A38-75542-00014A16B50EE128",
				"nick": "MissionCritical",
				"description": "Ping timeout: 240 seconds",
				"time": "5:34 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~MissionCr@unaffiliated/missioncritical",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3ADB208C-56A5-4E55-93CF-BA3681EC244C-75542-00014A1865861738",
				"nick": "chiper",
				"description": "screw webgl, I can do that with a css transform",
				"time": "5:34 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L49077DAB-3692-4000-808C-4D4B539BE299-75542-00014A25A60DA171",
				"nick": "frogor",
				"description": "chiper: Well then don't rotate them, wrap them on a sphere.",
				"time": "5:35 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": true,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCD9CD420-E815-4DD1-9DDE-4CD50A4B0F90-75542-00014A27E1F7EC84",
				"nick": "chiper",
				"description": "heh",
				"time": "5:35 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L04A6B550-DEF5-4588-9945-AADF4167DB71-75542-00014A285660066E",
				"nick": "frogor",
				"description": "Did you see the Tron WebGL thing?",
				"time": "5:35 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1145B683-80E9-4B7A-AFE9-0A9EF1C10877-75542-00014A2919D0AF97",
				"nick": "chiper",
				"description": "naw",
				"time": "5:35 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3A3E9777-7971-4826-884E-4BA5F9ECADBA-75542-00014A32C69B277A",
				"nick": "frogor",
				"description": "chiper: http://cycleblob.com/",
				"time": "5:36 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": true,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L1B9F005B-115C-4BB8-B467-3B5DBCEF80A0-75542-00014A4137498B6C",
				"nick": "dekar_",
				"description": "Quit: This computer has gone to sleep",
				"time": "5:37 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~dekar@drms-4d0146cf.pool.mediaWays.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0C5002C6-8BA8-487F-A036-C8312F208570-75542-00014A4371A362C3",
				"nick": "drubies|mbp",
				"description": "",
				"time": "5:37 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~drubies|m@c-24-131-79-100.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB898E924-D5B0-4F16-8228-6B259B6AD9B2-75542-00014A4446D993CF",
				"nick": "chiper",
				"description": "interesting",
				"time": "5:37 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC7D75F7A-C8C5-4BBC-BAD6-8B7D15D37527-75542-00014A47D448CDCA",
				"nick": "PokeTehPenguin",
				"description": "Read error: Connection reset by peer",
				"time": "5:37 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Tux@c-71-193-201-220.hsd1.or.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L32608B76-E2FF-4F5A-B7FC-F1DC5C59EB1A-75542-00014A48FCB10466",
				"nick": "MissionCritical",
				"description": "",
				"time": "5:37 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~MissionCr@unaffiliated/missioncritical",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L2F4B49CC-3447-4889-9D1F-3A3AA84C492D-75542-00014A566700D61E",
				"nick": "gerrynjr",
				"description": "Quit: Bye!",
				"time": "5:38 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~gerrynjr@gentoo/user/gerrynjr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBD267CE5-64E5-401B-8FA7-81DB33C5649C-75542-00014A56A3118C91",
				"nick": "zapzupnz",
				"description": "tryin' it out in Safari",
				"time": "5:38 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L20C9C5D1-ABE0-44DD-81E4-D91BE987A4B2-75542-00014A5720BBBC82",
				"nick": "zapzupnz",
				"description": "it's fun",
				"time": "5:38 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LAB087455-52CF-4520-8370-A120746B984C-75542-00014A5A698ACEBF",
				"nick": "jacksonbierfeldt",
				"description": "",
				"time": "5:39 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jacksonbi@98-125-30-250.dyn.centurytel.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L63AE7AE7-1F24-46A6-BE96-EFA3109ABA2B-75542-00014A5C58D6A275",
				"nick": "adiabatic",
				"description": "Ping timeout: 248 seconds",
				"time": "5:39 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~adiabatic@pool-173-58-133-113.lsanca.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L92C2F23D-DF8D-45E3-AA73-3B4521B2D7C4-75542-00014A649462A35C",
				"nick": "jacksonbierfeldt",
				"description": "Is this the right place to get programming help for osx?",
				"time": "5:39 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jacksonbi@98-125-30-250.dyn.centurytel.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L33AD622B-8B15-4EE7-BAE0-F3656CA00D8F-75542-00014A64F186204D",
				"nick": "adiabatic",
				"description": "",
				"time": "5:39 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~adiabatic@pool-173-58-133-113.lsanca.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgModeChange",
				"id": "L0F4F3CA6-876C-4E47-A1E7-04045B4BC0B2-75542-00014A64F39D6079",
				"nick": "ChanServ",
				"description": "+o adiabatic",
				"time": "5:39 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "ChanServ@services.",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6DBEBFA8-F989-4AB8-ADD5-F99D821258A5-75542-00014A6E1F3DFF8D",
				"nick": "sfhawk",
				"description": "",
				"time": "5:40 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~hersson@unaffiliated/sfhawk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB5CE64FC-F3A8-438A-B818-7E10198F989E-75542-00014A6E7FEEA3E4",
				"nick": "hersson",
				"description": "Ping timeout: 248 seconds",
				"time": "5:40 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~hersson@unaffiliated/sfhawk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2761E58A-20F0-4977-BB00-BCFFB4FEEB5A-75542-00014A6F4924CE9E",
				"nick": "sholt",
				"description": "try #macdev",
				"time": "5:40 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sholt@adium/EarthMkII",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEC357CDC-3F0C-4601-AC12-F145252DA8D6-75542-00014A70784890FC",
				"nick": "jacksonbierfeldt",
				"description": "Thanks.",
				"time": "5:40 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jacksonbi@98-125-30-250.dyn.centurytel.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L118FAE1D-9EFD-4D05-88F4-1BC97BFBCD4F-75542-00014A743AF28EBE",
				"nick": "zapzupnz",
				"description": "And #macosxdev",
				"time": "5:40 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBD3DFFF4-79F6-4C14-A3D3-C07E6916F46D-75542-00014A7777B088E6",
				"nick": "zapzupnz",
				"description": "and if your question relates to Xcode and the tools rather than actual development, even consider #iphonedev",
				"time": "5:41 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L3372511B-6A94-44D0-9C66-13ACA0B98826-75542-00014A788A62CB34",
				"nick": "PokeTehPenguin",
				"description": "",
				"time": "5:41 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Tux@c-71-193-201-220.hsd1.or.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "L46DE65CF-63C9-4B4B-B834-E2F871EAD396-75542-00014A7BCA868AAB",
				"nick": "jacksonbierfeldt",
				"description": "",
				"time": "5:41 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jacksonbi@98-125-30-250.dyn.centurytel.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L847107D9-DA7D-4DD9-9BF9-FD826DFDF065-75542-00014A8218578C5A",
				"nick": "CuriosTiger",
				"description": "Remote host closed the connection",
				"time": "5:41 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~stian@mack.bigrig.org",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LEFA73552-4675-4B84-BA59-A5867778F493-75542-00014A839B4DB079",
				"nick": "CuriosTiger",
				"description": "",
				"time": "5:42 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~stian@mack.bigrig.org",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L216E3376-DFDF-46A3-A34A-72A0BCA87495-75542-00014A90EF48BABE",
				"nick": "Axman6",
				"description": "Ping timeout: 246 seconds",
				"time": "5:43 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Axman6@pdpc/supporter/student/Axman6",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0FD6D5B9-64EA-42D1-B4A5-61932B896F71-75542-00014A95E178518B",
				"nick": "kith_",
				"description": "",
				"time": "5:43 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~kith@port-92-193-56-15.dynamic.qsc.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD6F58A4F-86C6-47C1-9867-A1B45E33A84E-75542-00014A95E3193041",
				"nick": "kith_",
				"description": "Changing host",
				"time": "5:43 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~kith@port-92-193-56-15.dynamic.qsc.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L4F37BE07-DE2D-4116-A018-49743EF512A5-75542-00014A95E338963D",
				"nick": "kith_",
				"description": "",
				"time": "5:43 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~kith@unaffiliated/kith",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB58FA113-A43C-4990-9062-D291F55C1578-75542-00014A960339B61C",
				"nick": "Brisk",
				"description": "Quit: BSOD",
				"time": "5:43 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Brisk@bas1-ottawa11-1176121398.dsl.bell.ca",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LCEA3D346-5D62-4E4D-B4FA-2F0ABD66FC76-75542-00014A968B65D34A",
				"nick": "kith",
				"description": "Ping timeout: 276 seconds",
				"time": "5:43 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~kith@unaffiliated/kith",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LF9EA70E3-8828-496B-811A-3B838F535CC6-75542-00014A9B670044CE",
				"nick": "TPS",
				"description": "",
				"time": "5:43 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Schroeder@c-76-105-101-172.hsd1.ga.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L7B5F0165-EE16-4FB2-8775-A69D8AEAF3A3-75542-00014AA8E0939111",
				"nick": "freedevil",
				"description": "",
				"time": "5:44 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~evil@unaffiliated/freedevil",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L47175E9C-42A0-48FB-AA34-6F7664A98281-75542-00014AAD67938590",
				"nick": "Lyle42",
				"description": "",
				"time": "5:45 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Lyle42@c-69-141-142-184.hsd1.nj.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L7134F610-3901-40BD-BE26-AA886F283017-75542-00014AB3038642A0",
				"nick": "TheNavyBear",
				"description": "",
				"time": "5:45 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Slave@unaffiliated/thenavybear",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LEDA916A9-4F53-4FFE-AC95-E639E76128CD-75542-00014ADE82CC3CBB",
				"nick": "frogor",
				"description": "",
				"time": "5:48 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L60A5EB89-2EC1-4927-A051-97FDD849A0CA-75542-00014AFA7A29DB18",
				"nick": "Sky[x]",
				"description": "Ping timeout: 276 seconds",
				"time": "5:50 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~SkyB0x@tm.213.143.82.45.dc.telemach.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7AD19A79-10C1-4373-AEF9-C10DB9111BC1-75542-00014B043C81B71B",
				"nick": "r1pp3r",
				"description": "Quit: r1pp3r",
				"time": "5:51 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~r1pp3r@188-194-200-166-dynip.superkabel.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LE78BE6FA-1AAA-4CDE-9691-7133F9E0042B-75542-00014B1403F5A288",
				"nick": "jfrisby_",
				"description": "",
				"time": "5:52 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jfrisby@216.55.29.174",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L13A5C6BC-F4D6-4C5C-837D-2968C14A2F47-75542-00014B3CFD066CE3",
				"nick": "jfrisby",
				"description": "Ping timeout: 246 seconds",
				"time": "5:55 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~jfrisby@216.55.29.174",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L48D39B29-419C-42C0-AC02-F265D81C8286-75542-00014B62E480561F",
				"nick": "DainHome",
				"description": "Quit: Dain's default quit message",
				"time": "5:58 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Dain@wikipedia/daindwarf",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9F7AFBAC-6E23-4FB5-978F-73330DEEA83A-75542-00014B755BE143B6",
				"nick": "ThugAim",
				"description": "",
				"time": "5:59 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~textual@72.252.158.206",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LF21B6EC6-6E89-4F80-8372-7D8147723D9C-75542-00014B7944BF1B38",
				"nick": "ivanoats_",
				"description": "",
				"time": "5:59 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ivanoats@pdpc/supporter/active/ivanoats",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L13CA2832-72AF-4DF6-9872-9A22E6E617D2-75542-00014B854DCD0CFF",
				"nick": "ckrailo",
				"description": "Quit: Computer has gone to sleep.",
				"time": "6:00 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~ckrailo@208.86.167.249",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNotice",
				"id": "LD059416B-DC85-42CC-B2C7-7FFD5FA8B9FA-75542-000132874A8B2DD2",
				"nick": "anthony.freenode.net",
				"description": "*** Looking up your hostname...",
				"time": "10:22 AM",
				"nick_color": 0,
				"extra": "*",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNotice",
				"id": "LCC553D3A-CF33-44C0-AC52-517FCB83DF12-75542-000132874C1E86DC",
				"nick": "anthony.freenode.net",
				"description": "*** Checking Ident",
				"time": "10:22 AM",
				"nick_color": 0,
				"extra": "*",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNotice",
				"id": "L8C66D29A-7E8D-4134-BEC4-187C1DDB4DD2-75542-0001328763762C89",
				"nick": "anthony.freenode.net",
				"description": "*** Found your hostname",
				"time": "10:22 AM",
				"nick_color": 0,
				"extra": "*",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgRaw",
				"id": "L49F5A3C7-304B-43AA-A5DB-2CEE8C86A8FC-75542-0001328A5D47BE52",
				"nick": "",
				"description": "Highest connection count: 8452 (8451 clients) (343196 connections received)",
				"time": "10:22 AM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNotice",
				"id": "L10B81AAE-44AD-4F11-9CA0-09E9FD904B7D-75542-0001328A5C4D75DD",
				"nick": "anthony.freenode.net",
				"description": "*** No Ident response",
				"time": "10:22 AM",
				"nick_color": 0,
				"extra": "*",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNotice",
				"id": "LBE6CB2B3-FC69-4473-819E-B52C06C16D16-75542-0001328A67F4A042",
				"nick": "NickServ",
				"description": "This nickname is registered. Please choose a different nickname, or identify via <span style=\"font-weight:bold;display:inline\">/msg NickServ identify &lt;password&gt;</span>.",
				"time": "10:22 AM",
				"nick_color": "1",
				"extra": "chiper",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "NickServ@services.",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgTopicReply",
				"id": "L7AF34C6C-098A-4DCA-A3BB-8C21DAA03DF5-75542-0001328B4FC09F8D",
				"nick": "",
				"description": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/",
				"time": "10:22 AM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L2BE77D1E-3AF5-4F86-A6AF-769E4E6FA646-75542-0001328B4FA7F600",
				"nick": "chiper",
				"description": "",
				"time": "10:22 AM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgTopicDetailsReply",
				"id": "L3789632F-93F5-4455-A8FE-3BA23682FA73-75542-0001328B4FD59E06",
				"nick": "tbo",
				"description": "Dec 31, 1969 4:00:00 PM",
				"time": "10:22 AM",
				"nick_color": "4",
				"extra": "Mar 24, 2011 2:03:01 AM",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "bb4cr0sc8h@devon.fsck.us",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNotice",
				"id": "L6D6CB399-1DDB-4EE3-8A65-E802935487AB-75542-0001328B584EEFA2",
				"nick": "NickServ",
				"description": "You are now identified for <span style=\"font-weight:bold;display:inline\">chiper</span>.",
				"time": "10:22 AM",
				"nick_color": "1",
				"extra": "chiper",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "NickServ@services.",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB0A90D1D-E210-4E1B-97E3-870FB0BE9CA9-75542-0001329A7F30D985",
				"nick": "Ztil",
				"description": "Ping timeout: 260 seconds",
				"time": "10:23 AM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~textual@193.45.43.33",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L20A37233-3294-4631-B552-DB006E421069-75542-000132AB39EC550A",
				"nick": "remyo",
				"description": "",
				"time": "10:25 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9A39941E-6F20-48FA-85FA-A1B49D10971D-75542-000132B439A657E7",
				"nick": "ace0x2a",
				"description": "Quit: leaving",
				"time": "10:25 AM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~pb@p5B2AAEF4.dip.t-dialin.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L20F8D4FF-0A4B-46EA-A4CD-B323A25E9F8F-75542-000132D72E535951",
				"nick": "dekar_",
				"description": "",
				"time": "10:28 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~dekar@drms-4d0146cf.pool.mediaWays.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "L6B820E5E-3E01-4C7E-B36D-033ADF003825-75542-000132F74D8DBF4F",
				"nick": "markfletcher",
				"description": "",
				"time": "10:30 AM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~markfletc@h-66-166-218-70.chcgilgm.static.covad.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LF01CD8A5-BDD6-4882-85AE-3888FCE682E1-75542-000132F9F1A2AFA5",
				"nick": "gerryvdm",
				"description": "",
				"time": "10:30 AM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~gerryvdm@d5152C4CB.static.telenet.be",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9680F793-02BF-4817-B83E-C070732AD057-75542-000132F9F3DB0219",
				"nick": "gerryvdm",
				"description": "Changing host",
				"time": "10:30 AM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~gerryvdm@d5152C4CB.static.telenet.be",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L289AAE92-721B-480D-ACDC-1BF99B1FCCB9-75542-000132F9F400B1D2",
				"nick": "gerryvdm",
				"description": "",
				"time": "10:30 AM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~gerryvdm@unaffiliated/gerryvdm",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L20CF5254-0C95-496B-AD3D-B9687149BE81-75542-0001331E779B5AD9",
				"nick": "Calibellus",
				"description": "",
				"time": "10:33 AM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Calibellu@173-20-105-212.client.mchsi.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD8BCE1FA-7B79-4B2C-A3E4-4512754413AC-75542-00013322F76C066D",
				"nick": "WrightsCS",
				"description": "",
				"time": "10:33 AM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~WrightsCS@c-71-196-222-205.hsd1.co.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "LE2ED878B-30A2-47DE-8C98-36644B399052-75542-000133297CF9C3CE",
				"nick": "WrightsCS",
				"description": "",
				"time": "10:34 AM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~WrightsCS@c-71-196-222-205.hsd1.co.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L165093A0-0715-40C1-BECA-7E9FA28C11E1-75542-00013345959B1B1C",
				"nick": "cilly",
				"description": "",
				"time": "10:36 AM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LE9C44DE1-DD7D-4C42-ABCB-4EAC8C1CE0D5-75542-00013354A2A40962",
				"nick": "Diverdude",
				"description": "Read error: Operation timed out",
				"time": "10:37 AM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Diverdude@1709ds1-vbr.0.fullrate.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LAB7C0F30-EE1B-4056-8E3B-FE72C4217478-75542-0001336489E7BF3D",
				"nick": "CEnTR4L",
				"description": "Ping timeout: 252 seconds",
				"time": "10:38 AM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~hawkz@unaffiliated/centr4l",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L51E16EA3-1AAB-4DF2-9F75-C05E317D8FA5-75542-000133734FF940D0",
				"nick": "wolfman2000",
				"description": "",
				"time": "10:39 AM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~wolfman20@152-20-173-203.rev.uncw.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L2ABA828F-B57C-414E-9E8B-C156DCB93D63-75542-000133898BF5E4C0",
				"nick": "pertl",
				"description": "",
				"time": "10:40 AM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~pertl@82.113.106.30",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB556EE57-EDEA-4BF8-BE34-A7CD150B3C82-75542-0001338AAA9FFA65",
				"nick": "pertl",
				"description": "Client Quit",
				"time": "10:41 AM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~pertl@82.113.106.30",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3D1DF3C1-5D6C-4A86-BB78-1726AF6FB368-75542-00013392961851B6",
				"nick": "MrUnagi",
				"description": "Quit: Colloquy for iPad - http://colloquy.mobi",
				"time": "10:41 AM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~mrunagi@166.137.12.157",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L1912076B-149C-43DD-8395-D82BEA2CCBA8-75542-000133A2B9C03AFD",
				"nick": "narfnarfnarf",
				"description": "",
				"time": "10:42 AM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~narf@ix.ifi.uzh.ch",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L772C3E4F-6E9B-41B1-BEC2-551F6EA3B869-75542-000133ADEE38845D",
				"nick": "CEnTR4L",
				"description": "",
				"time": "10:43 AM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~hawkz@unaffiliated/centr4l",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LAF70EDC0-B07D-47C1-BF90-87340520245A-75542-000133DBBAFAAE3F",
				"nick": "Rich_Morin",
				"description": "",
				"time": "10:46 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LADF4AFC8-68DB-46B0-8437-19AEC3070BEC-75542-000133DDEB38B14D",
				"nick": "cryptic0",
				"description": "",
				"time": "10:47 AM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~cryptic0@tfsvchhatre.tamu.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L5E77783B-222D-4103-A8D6-ACDE16D14501-75542-000133EC180575B8",
				"nick": "vulc4n",
				"description": "",
				"time": "10:48 AM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~vlcn@64.9.157.157",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LDE7C19CA-CFF8-4CB7-A0A9-08073F773245-75542-000133F4AFBDB8B6",
				"nick": "konfluenzpunkt",
				"description": "",
				"time": "10:48 AM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~konfluenz@dslb-088-067-059-046.pools.arcor-ip.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L68ACE506-7DE6-4822-936E-F53E8F7C2C92-75542-000133F69607CE9D",
				"nick": "MarKsaitis",
				"description": "",
				"time": "10:48 AM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~MarKsaiti@cpc7-pool12-2-0-cust219.15-1.cable.virginmedia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3542E3BF-1B9B-4452-81CB-A1066247E8FB-75542-00013407FAE68B91",
				"nick": "Rich_Morin",
				"description": "I'm using a JavaScript method (system.files.fileExistsAtPath) in PackageMaker to determine whether a directory exists in one of two possible places. So, I end up calling it twice, which is lame (and brittle, if a third location appears).",
				"time": "10:50 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L95672E4C-99F9-4703-94F3-AA827E15B554-75542-0001340DA1FB2227",
				"nick": "Rich_Morin",
				"description": "I found out about this method in a blog entry, but I can't find an API description that would indicate what other system.files might exist (eg, a glob method). Help?",
				"time": "10:50 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDE51FE95-9C1F-4228-933C-594E0BAA8CC7-75542-0001341977B623F0",
				"nick": "Rich_Morin",
				"description": "'m using a JavaScript method (system.files.fileExistsAtPath) in Apple's PackageMaker to determine whether a directory exists in one of two possible places. So, I end up calling it twice, which is lame (and brittle, if a third location appears).",
				"time": "10:51 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDA07FCA3-07D6-4AC3-9809-AB2EA8DA3EDD-75542-0001341B77CB7A08",
				"nick": "Rich_Morin",
				"description": "I found out about this method in a blog entry, but I can't find an API description that would indicate what other system.files might exist (eg, a glob method). Help?",
				"time": "10:51 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBEEDB9E7-14CA-49B5-9E68-6E2FBAB627E6-75542-0001341F7A902F03",
				"nick": "Rich_Morin",
				"description": "sorry for the repost - asleep...",
				"time": "10:51 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L125E0570-9D68-4BDF-B606-A557DE9C7AE0-75542-0001342D7DB49992",
				"nick": "remyo",
				"description": "Quit: remyo",
				"time": "10:52 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L82D6551F-ED72-4409-BBE7-EF3A81A6BF78-75542-0001343FAEC950FA",
				"nick": "Diverdude",
				"description": "",
				"time": "10:54 AM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Diverdude@1709ds1-vbr.0.fullrate.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0B11D477-65E7-42A0-83F6-18C7D0476179-75542-0001345E3FEF3EA9",
				"nick": "eobet",
				"description": "",
				"time": "10:56 AM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~eobet@blood.clot.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD34B395E-F5E8-4646-9742-E4A4480D53B6-75542-000134601E6494C9",
				"nick": "RichardP",
				"description": "Rich_Morin: add all the possible locations into an array, and loop through the array to check each - thats pretty much the only way",
				"time": "10:56 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LADE8D8D7-9F15-405F-B60C-0EC44EA86FCE-75542-0001346A50E29280",
				"nick": "vulc4n",
				"description": "Ping timeout: 240 seconds",
				"time": "10:57 AM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~vlcn@64.9.157.157",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1CB0B769-3769-4EC5-8F7A-7F30C4558D6C-75542-0001347786660F96",
				"nick": "Rich_Morin",
				"description": "That doesn't help with the brittleness, because I still need to know in advance what the possible names ARE. &nbsp;Is there a call that will tell me what names are in a directory?",
				"time": "10:58 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD5CAED04-6EDA-418F-AD40-96F267136B74-75542-00013493D2AAF6E1",
				"nick": "RichardP",
				"description": "Rich_Morin: so basically you want to search the entire filesystem for this directory?",
				"time": "11:00 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0CC13526-5CF8-4F72-A293-6FBEDF762F36-75542-0001349A06978BA1",
				"nick": "Rich_Morin",
				"description": "No, it's not that bad. :)",
				"time": "11:00 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7A04D4B8-4B74-4400-BFA1-39AA698E7CC0-75542-000134A063373C60",
				"nick": "RichardP",
				"description": "it sounds as if thats what you want to do - you dont want to know the possible locations in advance, but you want to know if it exists...",
				"time": "11:00 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA4564FFC-627E-44E2-AFB9-EA920DDA9B6C-75542-000134A321211C40",
				"nick": "Rich_Morin",
				"description": "Hang on a sec.",
				"time": "11:01 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L40351D49-4BD4-472D-9B91-8379650A3F1E-75542-000134A44C5D4960",
				"nick": "bosie",
				"description": "Quit: bosie",
				"time": "11:01 AM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~bosie@85-127-217-220.dynamic.xdsl-line.inode.at",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LFA55DA77-E011-43A1-8A54-FBFBA545DA95-75542-000134A4C87E6AB1",
				"nick": "donnib",
				"description": "",
				"time": "11:01 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L16BE1AAD-4F90-4765-A15A-4830F19F31B8-75542-000134A937260FDF",
				"nick": "donnib",
				"description": "i have a ipod with leopard snow on it which i made for boot, i have used it to install on my mac mini and my macbook pro but on my imac i cannot boot from it, can somebody help me ?",
				"time": "11:01 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6CEA8C9D-0817-4E8C-AAC1-4C2CC2C54135-75542-000134AB5DBB42FB",
				"nick": "donnib",
				"description": "i mean the ipd shows up but when i click on it the imac hangs and after a while it shows a denied icon",
				"time": "11:01 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L060B6EED-2E43-4E84-A55C-0BA4F57B0F1F-75542-000134B190E1C8C9",
				"nick": "RichardP",
				"description": "donnib: where did the SL image come from?",
				"time": "11:02 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6B293AFF-64A7-458E-B09C-3F7E11D5D440-75542-000134BAA2357B65",
				"nick": "donnib",
				"description": "one i made from the DVD",
				"time": "11:02 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC98F0CA0-FF6E-4302-9093-15D9451C69FD-75542-000134BCD6E58B02",
				"nick": "RichardP",
				"description": "what dvd?",
				"time": "11:02 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LE772CB31-91A5-4BDE-B66B-C2C4FD26DF2B-75542-000134BE130385AC",
				"nick": "vulc4n",
				"description": "",
				"time": "11:03 AM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~vlcn@64.9.157.157",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L21BD844F-26EB-4484-B686-A3626DC813E0-75542-000134BE9B77DE05",
				"nick": "donnib",
				"description": "snow from my mac book",
				"time": "11:03 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFD4F5AD3-A080-42BF-83CA-7DBAC735033C-75542-000134BF4509F41C",
				"nick": "donnib",
				"description": "pro",
				"time": "11:03 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8E1EB2CD-34C4-4B01-84CB-F3831C74E26D-75542-000134C01FA6C9E5",
				"nick": "donnib",
				"description": "maybe i can't do that ?",
				"time": "11:03 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5A482A23-0F63-4CEF-9D8F-0FF3F2682950-75542-000134C72BA2D8A6",
				"nick": "Rich_Morin",
				"description": "RichardP: Google SketchUp names their plugins directory as \"/Library/Application Support/Google SketchUp V/SketchUp/plugins\", where V is (say) 7 or 8. If I could list the entries in \"/Library/Application Support/\" and examine them, I could find anything that matches the appropriate pattern.",
				"time": "11:03 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5E1072DE-DAB7-444C-8903-8FE85D3B6608-75542-000134C8265C34EB",
				"nick": "RichardP",
				"description": "not guaranteed to work then - OEM versions are closely linked to the model they ship with, the fact that you got it to work on something else is a bonus",
				"time": "11:03 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L15DCF6BE-E3B5-4BB8-875F-5F5C13A98B0F-75542-000134D3D02A7EFF",
				"nick": "RichardP",
				"description": "Rich_Morin: i see what you mean, unfortunately i cant help :/ &nbsp;tried #macdev or #macosxdev?",
				"time": "11:04 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L68039F65-53E4-4762-B9B2-F9F0EFCC5BF2-75542-000134DBDD6C9EDF",
				"nick": "KraMer",
				"description": "",
				"time": "11:05 AM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~mark@adsl-70-240-195-182.dsl.hstntx.swbell.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L157227E0-F64F-48DB-8329-95FF20AE9E79-75542-000134DCD712D9CB",
				"nick": "Rich_Morin",
				"description": "macosxdev was totally unresponsive when I posted there",
				"time": "11:05 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L763B4B05-086B-4278-A90F-2FA8D258286B-75542-000134E1677E1DBF",
				"nick": "RichardP",
				"description": "heh, i dont doubt that",
				"time": "11:05 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L72CFD756-D273-45DD-AE70-A6117F9BC49F-75542-000134E3146263CF",
				"nick": "simplicity-",
				"description": "",
				"time": "11:05 AM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~simpli@unaffiliated/simplicity-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC7A33CC8-6EAE-41CC-A53F-EB0EEB7A980B-75542-000134E478323D34",
				"nick": "Rich_Morin",
				"description": "I'll try macdev, tho - tnx",
				"time": "11:05 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD4FA3817-D568-4D1A-81BE-7721C15E55F3-75542-000134E81FC794F2",
				"nick": "RichardP",
				"description": "when did you post there? &nbsp;im idle in there and i dont see anything from you",
				"time": "11:06 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8905C7F3-1DC2-42AB-9F8D-609C1C5B4049-75542-000134EC82095955",
				"nick": "FUJIoNO",
				"description": "",
				"time": "11:06 AM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~FUJIoNO@14-42-215.ftth.xms.internl.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L26389308-4E93-4A28-B7D4-7955BC3784F9-75542-000134EC91667FA7",
				"nick": "FUJIoNO",
				"description": "# Appears as MIKE",
				"time": "11:06 AM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~FUJIoNO@14-42-215.ftth.xms.internl.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L234B5208-D801-494F-8309-1BEDB6089A90-75542-000134F22C009B1F",
				"nick": "simplicity-",
				"description": "Client Quit",
				"time": "11:06 AM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~simpli@unaffiliated/simplicity-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC3FB6626-8242-44EE-B231-FBDD7FCF2530-75542-000134F7AE87569D",
				"nick": "RichardP",
				"description": "FUJIoNO: is that a script error?",
				"time": "11:07 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L96DE9F24-507C-4686-B9EC-DA7510D27331-75542-000134FA57F51217",
				"nick": "zero_lapse",
				"description": "",
				"time": "11:07 AM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~textual@77-57-217-246.dclient.hispeed.ch",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC78E7562-AD6E-459D-BE57-F55C6F526EC1-75542-000134FFC0AFCED6",
				"nick": "Rich_Morin",
				"description": "RichardP: a few days ago",
				"time": "11:07 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6610CB34-3139-478B-854A-2707FD78E929-75542-0001351C8BCACCC9",
				"nick": "adiabatic",
				"description": "",
				"time": "11:09 AM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~adiabatic@pool-173-58-133-113.lsanca.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgModeChange",
				"id": "LA8E8634D-98D3-47B3-98A0-EB2067BAA522-75542-0001351C8D523375",
				"nick": "ChanServ",
				"description": "+o adiabatic",
				"time": "11:09 AM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "ChanServ@services.",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L09562D5F-6FC5-4BB6-B83C-6D2854FD06DD-75542-0001352796F855F5",
				"nick": "thelostpatrol",
				"description": "Ping timeout: 276 seconds",
				"time": "11:10 AM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~none@CPE001b63a1f657-CM001ac35df5a2.cpe.net.cable.rogers.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LA680C7B9-9E04-4C77-9680-F4F83FC27B72-75542-0001352EB9D81958",
				"nick": "thelostpatrol",
				"description": "",
				"time": "11:11 AM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~none@CPE001b63a1f657-CM001ac35df5a2.cpe.net.cable.rogers.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L16829507-F411-42B8-83C9-DC62231798AB-75542-000135328184EA55",
				"nick": "donnib",
				"description": "RichardP: i just looked at the dvd, it says retail",
				"time": "11:11 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6522A89C-DE81-4CDD-9C45-2FF532AFE6A1-75542-00013534FCA9AFFA",
				"nick": "donnib",
				"description": "so i guess it a general one i have",
				"time": "11:11 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L650DE5AC-31DB-484F-BC8C-C04B21B46488-75542-00013535EA92DA1A",
				"nick": "donnib",
				"description": "that should work",
				"time": "11:11 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L1EC4C39B-8CFB-4D39-9389-3F5CABA4060D-75542-00013540AAB74FE0",
				"nick": "simplicity-",
				"description": "",
				"time": "11:12 AM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~simpli@unaffiliated/simplicity-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L35F81FED-A533-4327-9EE2-AD5E178E3E2A-75542-00013546F87C2949",
				"nick": "Sky[x]",
				"description": "",
				"time": "11:12 AM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~SkyB0x@tm.213.143.82.45.dc.telemach.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6DF06576-FA0F-40DD-A454-47864DCE5E7B-75542-0001354E7EC45BDD",
				"nick": "C\\A",
				"description": "",
				"time": "11:13 AM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~hawkz@unaffiliated/centr4l",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC3986596-A7A8-442E-9BCE-849B621E16FF-75542-0001355FD875D15A",
				"nick": "CEnTR4L",
				"description": "Ping timeout: 246 seconds",
				"time": "11:14 AM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~hawkz@unaffiliated/centr4l",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L698D843C-B7E7-436C-8A68-639767341331-75542-00013566FE8706DF",
				"nick": "crypto",
				"description": "",
				"time": "11:15 AM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "U2FsdGVkX1@massive.tresgeek.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L7F596321-EBB8-499C-BE7B-755C8C12A6E9-75542-0001356D0955D66B",
				"nick": "crypto",
				"description": "Guest8370",
				"time": "11:15 AM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "U2FsdGVkX1@massive.tresgeek.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L22C89A90-AEDB-4A3E-B0C4-022AC71B83D7-75542-0001356FCDFBA4A9",
				"nick": "zero_lapse",
				"description": "hi everyone",
				"time": "11:15 AM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~textual@77-57-217-246.dclient.hispeed.ch",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L38E00187-9E76-4AA0-9DCA-A5738A447E4A-75542-000135760BE10C64",
				"nick": "zero_lapse",
				"description": "anyone experiencing ultra high temps on the new i7 pros?",
				"time": "11:16 AM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~textual@77-57-217-246.dclient.hispeed.ch",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L05406A6C-E0BD-4F2C-8571-23AE32FC5AB6-75542-0001357E938E7C98",
				"nick": "RaceCondition",
				"description": "",
				"time": "11:16 AM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~erik@82.131.63.59.cable.starman.ee",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBB78D22D-8DF3-4F37-AABE-07A1B4DB3B5D-75542-00013580F386DC86",
				"nick": "CPng|N",
				"description": "yep. well, on my 2010 one",
				"time": "11:17 AM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1903587A-DB11-4380-918A-C0A6352D857B-75542-00013582C5647FC0",
				"nick": "RaceCondition",
				"description": "how can I record whatever audio is being emitted by the sound card?",
				"time": "11:17 AM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~erik@82.131.63.59.cable.starman.ee",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L20571E74-6509-4A72-B4AC-A9A5F27993ED-75542-00013582F87A66A4",
				"nick": "CPng|N",
				"description": "the i7 is just hot, plain and simple",
				"time": "11:17 AM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L644FFF66-D7AE-4A01-B2D8-2048AD476D76-75542-00013587754001DB",
				"nick": "CPng|N",
				"description": "RaceCondition: &nbsp;look at some software by Rogue Amoeba",
				"time": "11:17 AM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L29CBCD53-F48E-40A8-975A-44626A449E5A-75542-0001358A32E269D9",
				"nick": "RaceCondition",
				"description": "CPng|N: will do, thanks",
				"time": "11:17 AM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~erik@82.131.63.59.cable.starman.ee",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LF7D1371E-7567-4D17-905E-15DD00ABEBB8-75542-00013595B41ABFB3",
				"nick": "cilly",
				"description": "Quit: Computer has gone to sleep",
				"time": "11:18 AM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7524160A-D351-4732-8C97-98D48560E4DF-75542-0001359D1A3DC433",
				"nick": "adiabatic",
				"description": "I need a lunch.",
				"time": "11:19 AM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~adiabatic@pool-173-58-133-113.lsanca.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8DCC52DD-055E-46DE-BB96-100C2891B2D3-75542-000135A810F71F08",
				"nick": "suigeneris",
				"description": "",
				"time": "11:19 AM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~iego@212.253.85.253",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LE50A18B4-24B6-4340-A31C-98CC670323CB-75542-000135A814101725",
				"nick": "suigeneris",
				"description": "Changing host",
				"time": "11:19 AM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~iego@212.253.85.253",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LA06932F5-B660-46F5-B69F-B723904D546F-75542-000135A8142E0AA8",
				"nick": "suigeneris",
				"description": "",
				"time": "11:19 AM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~iego@unaffiliated/kartagis",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L206C5F2C-9ECD-4AB0-9BA4-B79F0EE56D69-75542-000135B00E2A5578",
				"nick": "wheeler_32",
				"description": "",
				"time": "11:20 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~wheeler_3@wads-4-231-218.resnet.mtu.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L873DE92E-A07F-4274-8FE7-F222A3559F1B-75542-000135B4B6E8AA89",
				"nick": "LaraCloud",
				"description": "",
				"time": "11:20 AM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~u512@gateway/web/irccloud.com/x-mgcjlrnuroceqlmz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L7C6129CC-8465-4BC6-93F5-DEC5F3389071-75542-000135BD5021141C",
				"nick": "cilly",
				"description": "",
				"time": "11:21 AM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "L9DCA48E2-6A10-4058-BDF4-EA00FA68C06E-75542-000135C2D8C9FD19",
				"nick": "LaraCloud",
				"description": "",
				"time": "11:21 AM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~u512@gateway/web/irccloud.com/x-mgcjlrnuroceqlmz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L086F45A2-59E5-4344-940F-AA8180BCA5B4-75542-000135E2FB21F98B",
				"nick": "Guest8370",
				"description": "Quit: leaving",
				"time": "11:24 AM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "U2FsdGVkX1@massive.tresgeek.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L7C64C8E9-870D-4709-BDB5-B03B3F3C429F-75542-000135E5DB333698",
				"nick": "gabesubdo",
				"description": "",
				"time": "11:24 AM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~gabriel@unaffiliated/gabesubdo",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3A1946EE-BD4B-46A8-827F-318C462C1421-75542-000135E97EF8D4C9",
				"nick": "mikejones",
				"description": "Quit: Bye!",
				"time": "11:24 AM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~MikeJ1971@109.156.72.104",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L75E9F873-D93F-4D25-AF76-C2A8D7658CD9-75542-000135F08BC99581",
				"nick": "thespider",
				"description": "",
				"time": "11:25 AM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rustymyer@client-75-102-86-79.mobility-up.psu.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LF1D34591-2255-4670-8A23-ED4E3A14B440-75542-0001360D1B47FB32",
				"nick": "Sky[x]",
				"description": "Ping timeout: 276 seconds",
				"time": "11:27 AM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~SkyB0x@tm.213.143.82.45.dc.telemach.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LBB114000-AB98-420B-9272-A0946F2F641F-75542-00013613012640D0",
				"nick": "FUJIoNO",
				"description": "Ping timeout: 240 seconds",
				"time": "11:27 AM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~FUJIoNO@14-42-215.ftth.xms.internl.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LA846F150-9228-4C1B-95D8-0A27C7FFFEC8-75542-00013615F79257AE",
				"nick": "TheFriscoFainter",
				"description": "Quit: TheFriscoFainter",
				"time": "11:27 AM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~TFF@cs27047009.pp.htv.fi",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L0793FA3F-C0A7-46AD-A809-D434CF6A71A5-75542-00013619DCB55772",
				"nick": "[1]dk00",
				"description": "Quit: &nbsp;TSR",
				"time": "11:27 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "dk00@CPE0050f2796b85-CM0011aefd328e.cpe.net.cable.rogers.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LA4362FB9-B83F-46AB-A4C0-2E0B48E0EE36-75542-0001361F472B6DBB",
				"nick": "KomiaPoika",
				"description": "Ping timeout: 276 seconds",
				"time": "11:28 AM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~prkl@91.86.11.185",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LAE57A35E-F878-4981-9671-94726B1AE174-75542-000136224426EFED",
				"nick": "rustymyers",
				"description": "Ping timeout: 252 seconds",
				"time": "11:28 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~rustymyer@chm018.educ.psu.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L6CC99A36-08E2-4128-B0A3-2E1D5A346BCE-75542-0001362C250DCE87",
				"nick": "thespider",
				"description": "Ping timeout: 246 seconds",
				"time": "11:29 AM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~rustymyer@client-75-102-86-79.mobility-up.psu.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L36FF3422-5600-42A0-86B1-7BEFD68E3B1A-75542-0001363198D1ECA1",
				"nick": "KomiaPoika",
				"description": "",
				"time": "11:29 AM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~prkl@91.86.27.118",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L14E5566F-307A-4340-A862-8F426D44A5A1-75542-0001364D53E0540E",
				"nick": "impy",
				"description": "",
				"time": "11:31 AM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~impy@91.182.220.165",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L44B846B7-90DF-4EE8-A639-F1EF6FBD4FBD-75542-00013655C15CC949",
				"nick": "nitrospectide",
				"description": "Ping timeout: 276 seconds",
				"time": "11:32 AM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~nitrospec@nj-76-1-237-252.dhcp.embarqhsd.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LBE9A90F5-C414-400D-80CA-158EEBE3D682-75542-000136884002A584",
				"nick": "Avi0",
				"description": "Remote host closed the connection",
				"time": "11:35 AM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Avi0@c122-107-128-37.eburwd5.vic.optusnet.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD17984E1-C9A3-42C3-BF94-109AAEFA7565-75542-0001368F44781647",
				"nick": "nitrospectide",
				"description": "",
				"time": "11:36 AM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~nitrospec@nj-76-1-237-252.dhcp.embarqhsd.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L8FE07803-099B-4567-8E29-E3F309F94683-75542-000136F5A9A8364C",
				"nick": "shuaib",
				"description": "Ping timeout: 246 seconds",
				"time": "11:43 AM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~shuaib@unaffiliated/shuaib",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LDE458165-BA11-4244-8F13-8A1C3BA7707E-75542-00013700DF8878ED",
				"nick": "donnib",
				"description": "Quit: donnib",
				"time": "11:44 AM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~donnib@0x555281d0.adsl.cybercity.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LAD78052F-592B-4704-8F8A-47742540564C-75542-0001370E1C86F86A",
				"nick": "tobNoOne",
				"description": "Ping timeout: 246 seconds",
				"time": "11:45 AM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~tobNoOne@81-234-149-47-no94.tbcn.telia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LF39D621D-8229-4D88-B58E-10611A46564F-75542-0001370E1EDFD006",
				"nick": "russkey",
				"description": "Ping timeout: 246 seconds",
				"time": "11:45 AM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Adium@70-90-31-254-BusName-pa.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LE4461463-206A-40A2-9C20-7614007C52D3-75542-00013713C002EB13",
				"nick": "contingo",
				"description": "",
				"time": "11:45 AM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~contingo@swong.plus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L83F3408A-BFBD-41BC-9835-F0EE94EFFC68-75542-00013725E8B7C156",
				"nick": "tobNoOne",
				"description": "",
				"time": "11:47 AM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tobNoOne@81-234-149-47-no94.tbcn.telia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF07D065F-8693-4D72-8A45-4F47F8A9CF51-75542-000137303AC5CC52",
				"nick": "Nitax",
				"description": "anyone around running an SSD in a MacBook Pro?",
				"time": "11:47 AM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Nitax@nc6521221.cns.vt.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7E07B989-4C17-45A4-AEFB-C665C30212B4-75542-0001373FD3B72F92",
				"nick": "Nitax",
				"description": "I was thinking about dropping one into my MBP5,5 but wasn't sure what the best drive would be",
				"time": "11:49 AM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Nitax@nc6521221.cns.vt.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LDA195946-5273-4C08-A8E4-74FC71081B8C-75542-0001375B2C897F53",
				"nick": "russkey",
				"description": "",
				"time": "11:50 AM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Adium@70-90-31-254-BusName-pa.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L10EC349D-90CA-4DE8-BE6D-89DCD046A4A1-75542-0001378D221EC5FE",
				"nick": "atmosx_onmac",
				"description": "Quit: leaving",
				"time": "11:54 AM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~atma@46.12.134.89",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LE1CF2B55-154E-4A44-BC78-23EB1C386722-75542-00013792B36C9B5B",
				"nick": "atmosx",
				"description": "",
				"time": "11:54 AM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~osx@46.12.134.89.dsl.dyn.forthnet.gr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LF49BD3FE-E5CB-465A-98B6-CBDBE9215F60-75542-000137966CB315D9",
				"nick": "cryptic0",
				"description": "Remote host closed the connection",
				"time": "11:55 AM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~cryptic0@tfsvchhatre.tamu.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L45A5E3C2-0E92-418E-8CAB-BD60B3BF19C9-75542-000137AC8246C987",
				"nick": "remyo",
				"description": "",
				"time": "11:56 AM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L703F7AB7-2B88-40B4-9BCC-2C3EE85076A7-75542-000137C7918AF78B",
				"nick": "MartyD",
				"description": "",
				"time": "11:58 AM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~martyd@unaffiliated/martyd",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L26D0D716-36EB-4D23-9818-920CC4AEEF5B-75542-000137D66CB81216",
				"nick": "tgunr",
				"description": "",
				"time": "11:59 AM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L8B92CBD5-7364-4922-ACCF-33EB76194E9D-75542-000137DAEA1AEA6B",
				"nick": "tschundeee",
				"description": "Quit: tschundeee",
				"time": "12:00 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~anonymous@HSI-KBW-085-216-123-190.hsi.kabelbw.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L541D888D-93E6-4F73-AF82-D3060EEE5046-75542-000137F2550CAD67",
				"nick": "Diverdude",
				"description": "Read error: Operation timed out",
				"time": "12:01 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Diverdude@1709ds1-vbr.0.fullrate.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LE0F4CA0E-5E26-48C6-9898-4EC81302C6EC-75542-000137FA747D4184",
				"nick": "Flowerbauer",
				"description": "",
				"time": "12:02 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~kablooie@85.181.144.24",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LAB14D480-C283-49C7-BDE0-03570F098D2D-75542-0001380156F9F7CD",
				"nick": "r1pp3r",
				"description": "Read error: Connection reset by peer",
				"time": "12:02 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~r1pp3r@188-194-200-166-dynip.superkabel.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L515ACCC1-2896-47ED-9C99-78892C56C10D-75542-00013823B08FBD32",
				"nick": "Sky[x]",
				"description": "",
				"time": "12:05 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~SkyB0x@tm.213.143.82.45.dc.telemach.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L6BBBDF67-1DF4-470E-811F-5906D0BB0BFC-75542-0001382E0FD35A89",
				"nick": "LeNsTR",
				"description": "LeNsTR|off",
				"time": "12:06 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~lenstr@unaffiliated/lenstr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA4D674B0-BC0E-436E-BDA7-386E2E13C56A-75542-0001383F0488015E",
				"nick": "remyo",
				"description": "OS X's default behavior when hitting command f in finder is to search your entire Mac. Is there a way to make it's default behavior to search the directory you're currently in? ",
				"time": "12:07 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L2C38683D-EA85-4FE4-BA35-E752E0F4E11B-75542-0001383FC9BAB8E5",
				"nick": "mike",
				"description": "",
				"time": "12:07 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~none@CPE001b63a1f657-CM001ac35df5a2.cpe.net.cable.rogers.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L60F1E2A5-9B19-463C-B9B8-27B02F7E3E79-75542-00013845AFE968DD",
				"nick": "mike",
				"description": "Guest27647",
				"time": "12:07 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~none@CPE001b63a1f657-CM001ac35df5a2.cpe.net.cable.rogers.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L08A86051-B64A-4CA9-AD83-B16162C9EADD-75542-00013847DDA360E3",
				"nick": "krabbe",
				"description": "Krabbe",
				"time": "12:07 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Krabbe2@77.37.11.207",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA044FB15-872A-4D20-BE51-236F915097D1-75542-0001384D95590798",
				"nick": "adiabatic",
				"description": "remyo: that's not what's happening here…",
				"time": "12:08 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~adiabatic@pool-173-58-133-113.lsanca.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L586E2990-8441-4D9F-83CD-1F0A411E4136-75542-00013850974A3E9B",
				"nick": "thelostpatrol",
				"description": "Ping timeout: 252 seconds",
				"time": "12:08 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~none@CPE001b63a1f657-CM001ac35df5a2.cpe.net.cable.rogers.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LB977E595-8971-4C08-B07E-A9BE6C3D40B1-75542-00013859CAE4F9CD",
				"nick": "multiHYP",
				"description": "",
				"time": "12:09 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFC83C820-9852-4BD9-A38D-1432F5F1872E-75542-0001385B52D94A95",
				"nick": "multiHYP",
				"description": "hi guys,",
				"time": "12:09 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD522376B-E582-4386-B8B5-E137C3C5758E-75542-0001385B64FA3C73",
				"nick": "remyo",
				"description": "adiabatic: Never mind, I found it. It was Finder &gt; Preferences &gt; Advanced &gt; When Performing a Search ",
				"time": "12:09 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L530FF382-812B-4E01-8B6E-0754B8D42F5C-75542-0001385ED91299A2",
				"nick": "reffle|",
				"description": "",
				"time": "12:09 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~reffle@cpc1-amer3-2-0-cust240.15-2.cable.virginmedia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8DBE1A27-4E02-40FF-AB2F-FD2689682B54-75542-00013860C903E96A",
				"nick": "multiHYP",
				"description": "can anybody see any errors in this: http://pastebin.com/WCXvwgdz that would cause lines , 8 and 9 to have no effect?",
				"time": "12:09 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LED0471CA-5608-497F-89C7-41A9498FCA8A-75542-0001386467DBD1B7",
				"nick": "IcanCU",
				"description": "Quit: IcanCU",
				"time": "12:09 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~icancu@s5597f581.adsl.wanadoo.nl",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L27F60418-AD84-44B7-BDBC-B72B3C5201AE-75542-00013868C2F9C409",
				"nick": "LeNsTR|off",
				"description": "LeNsTR",
				"time": "12:10 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~lenstr@unaffiliated/lenstr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L838A60C1-C666-41CE-A0E7-C7A757E4DBB9-75542-0001386A0F427643",
				"nick": "multiHYP",
				"description": "i execute that as root on linux server, but no environment variable is set except the first one line#4...",
				"time": "12:10 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5C1E8FF0-74D8-4308-A057-2624FC04777A-75542-0001386DAF043F1A",
				"nick": "adiabatic",
				"description": "multiHYP: You're appending properly on line 4. You're not appending properly on either 8 or 9.",
				"time": "12:10 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~adiabatic@pool-173-58-133-113.lsanca.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L06CBB468-2769-4073-8991-334C9BC481D6-75542-00013876A02988B3",
				"nick": "adiabatic",
				"description": "(holler if that explanation doesn't make sense)",
				"time": "12:11 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~adiabatic@pool-173-58-133-113.lsanca.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7BD3C79A-7B5A-451A-AB74-0D513F3A699F-75542-0001387D1844EA4B",
				"nick": "tgunr",
				"description": "Ping timeout: 276 seconds",
				"time": "12:11 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L18F465D0-A921-4DD5-823C-DD5BC0301EF6-75542-000138802F0D7D88",
				"nick": "tgunr",
				"description": "",
				"time": "12:11 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6E8DA06D-4334-45F6-B257-E233EDA27CE1-75542-00013880E3E403A6",
				"nick": "multiHYP",
				"description": "thanks, i found it, source is required",
				"time": "12:11 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6C84DF71-DE6C-42E8-BFBB-7450B4937EDC-75542-000138837E347AD5",
				"nick": "simplicity-",
				"description": "Say i wanted to disable the \"Pinch Open &amp; Close\" trackpad settings but only for one select application. Would that be possible?",
				"time": "12:12 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~simpli@unaffiliated/simplicity-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2101F486-B6C4-4520-A5C0-5F111657054A-75542-0001388B50F38583",
				"nick": "CPng|N",
				"description": "remove the / from the end of the path for ROOTfolder, if you didnt' already figure that out",
				"time": "12:12 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L53A7DAFC-8C1D-4D00-8FB6-A1A7DEC15D85-75542-000138905FABF015",
				"nick": "CPng|N",
				"description": "simplicity-: &nbsp;perhaps with something like BetterTouchTool",
				"time": "12:13 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L05D980F7-317E-4651-89B6-1E6313BB0A5C-75542-0001389090FF6F7F",
				"nick": "eykosioux",
				"description": "",
				"time": "12:13 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~eykosioux@5ac904f0.bb.sky.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LDD28A15F-8E72-4FF9-885D-0910A33AD6CF-75542-00013897C256134F",
				"nick": "nitrospectide",
				"description": "Quit: nitrospectide",
				"time": "12:13 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~nitrospec@nj-76-1-237-252.dhcp.embarqhsd.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE5294DE6-701F-40C7-B8D2-86C4F773C25F-75542-000138AC0E8512D6",
				"nick": "CPng|N",
				"description": "speaking of BTT, the author just wrote:",
				"time": "12:15 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L26DE1310-9DCD-4611-8AFA-AB55BBDB6EF2-75542-000138AC3F6C75F5",
				"nick": "CPng|N",
				"description": "My new OCZ Vertex 2 SSD just broke (after 15 days of use… I should have listened to those comments at Amazon). Unfortunately I’m currently travelling and have no replacement HD / Installdiscs etc..",
				"time": "12:15 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L789B0288-1D51-47BD-9566-44921AB94DBD-75542-000138AD6E04041A",
				"nick": "CPng|N",
				"description": "Nitax: &nbsp;^ ^ ^",
				"time": "12:15 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCFB7B3C1-A699-4B05-88C6-BCE262BC2F07-75542-000138B4E8BD851A",
				"nick": "Nitax",
				"description": "hmmm",
				"time": "12:15 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Nitax@nc6521221.cns.vt.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5C48926C-6CD4-4AA5-B172-3220B389D926-75542-000138B6E6F461C7",
				"nick": "Nitax",
				"description": "that was the one I was looking at too. ",
				"time": "12:15 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Nitax@nc6521221.cns.vt.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LF0CAB5D0-0103-40D7-AB70-AAD213CD0B6A-75542-000138CB7713DE6E",
				"nick": "wolfman2000",
				"description": "Remote host closed the connection",
				"time": "12:17 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~wolfman20@152-20-173-203.rev.uncw.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L93353122-20B0-43ED-8B14-B6CE94C89C10-75542-000138CCB51B5C7C",
				"nick": "tgunr",
				"description": "Read error: Connection reset by peer",
				"time": "12:17 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "LC1A35679-1702-41F7-9987-8ACA8A561491-75542-000138CDECE92B1B",
				"nick": "eykosioux",
				"description": "",
				"time": "12:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~eykosioux@5ac904f0.bb.sky.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LA63BDD65-9C66-4045-B722-BBD9D64EC5A1-75542-000138CE487F5599",
				"nick": "otherside",
				"description": "Quit: Psm 119:83 我好像烟薰的皮袋。却不忘记你的律例。",
				"time": "12:17 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~otherside@146.9.31.31",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LDF1196D9-D066-41A8-BEBE-A98938E5E2FC-75542-000138D208CA591B",
				"nick": "sponix",
				"description": "",
				"time": "12:17 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sponix@99-194-230-191.dyn.centurytel.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4BEE2825-FF2F-4830-8C8F-B8FEA6DE9DBF-75542-000138D45503CB58",
				"nick": "jkyle",
				"description": "1/2 the time I unplug my phone I get that \"improperly disconnected\" warning. whether itunes says I can or not, whether I explicitly eject the iphone or not &gt;.&gt;",
				"time": "12:17 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@cpe-76-90-1-71.socal.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LF2D41134-3028-4635-BD4A-D19C4EA05B04-75542-000138D6E97A41D2",
				"nick": "tgunr",
				"description": "",
				"time": "12:18 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6BC32DDF-0D5F-4CBB-B714-864A06BE0CF1-75542-000138DC2F1CCAAA",
				"nick": "Diverdude",
				"description": "",
				"time": "12:18 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Diverdude@1709ds1-vbr.0.fullrate.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LDD3A95FB-3D5B-4B59-905E-3E5FEC1A7F6D-75542-000138E0D61DD9F9",
				"nick": "zhensun",
				"description": "",
				"time": "12:18 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sun@146.9.31.31",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LF0888306-498D-419B-89E1-5662617F227F-75542-000138E37D6A5BAF",
				"nick": "narfnarfnarf",
				"description": "Quit: narfnarfnarf",
				"time": "12:19 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~narf@ix.ifi.uzh.ch",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L0D748E4A-38F4-4517-9AFD-3537E0AB578A-75542-000138E92FCFD63B",
				"nick": "empity`",
				"description": "Quit: ERC Version 5.3 (IRC client for Emacs)",
				"time": "12:19 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~user@ip1-201.halifax.RWTH-Aachen.DE",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0444AAB2-D0BE-4C6D-A0AA-742A0361ECA1-75542-000138EDC171D1D9",
				"nick": "empity`",
				"description": "",
				"time": "12:19 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~user@ip1-201.halifax.RWTH-Aachen.DE",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3DCA11A7-0A3B-415E-A565-57E7C5A4948D-75542-000138EFC8B6DFB5",
				"nick": "tgunr",
				"description": "Client Quit",
				"time": "12:19 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L3C54C480-BBB3-4F47-9AAE-235282B1822E-75542-000138F346850009",
				"nick": "galaxywatcher",
				"description": "",
				"time": "12:20 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~galaxywat@pdpc/supporter/active/galaxywatcher",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LE81DBF5B-71BB-4CAC-886A-AA162BBDFE56-75542-000138FE6206C17A",
				"nick": "remyo",
				"description": "Quit: remyo",
				"time": "12:20 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L93A29AF6-4F1C-44BF-B762-5A150829123C-75542-00013946EDB1FE45",
				"nick": "tobNoOne",
				"description": "Quit: Computer has gone to sleep",
				"time": "12:26 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~tobNoOne@81-234-149-47-no94.tbcn.telia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "L479C5C5D-55F4-4CD7-8C3C-7BB4B14E94FC-75542-000139536200BC7B",
				"nick": "Rich_Morin",
				"description": "",
				"time": "12:27 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rdm@cfcl.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LB4386AE0-1859-4302-8BBA-C91A67E42DF2-75542-0001395D12FF7FD8",
				"nick": "tgunr",
				"description": "",
				"time": "12:27 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L4A8F7BE7-75F8-435E-8609-3AEDF5A9739F-75542-00013970B0799389",
				"nick": "zhensun",
				"description": "Quit: WeeChat 0.3.2",
				"time": "12:29 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~sun@146.9.31.31",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LACE401DB-83DC-4680-B62E-28C2AF88D54F-75542-00013977A5930693",
				"nick": "otherside",
				"description": "",
				"time": "12:29 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~otherside@146.9.31.31",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L499E97F5-2CFF-4FD2-80DC-3B5B23B26DF4-75542-00013977A72F1D92",
				"nick": "otherside",
				"description": "Client Quit",
				"time": "12:29 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~otherside@146.9.31.31",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L5F8EFDD4-ABF3-4D45-A933-8308B7200869-75542-00013990C2968231",
				"nick": "multiHYP",
				"description": "Quit: multiHYP",
				"time": "12:31 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LB14189D4-0EDC-4754-A3EA-9EC7A2462366-75542-000139CC6EA7F006",
				"nick": "tgunr_",
				"description": "",
				"time": "12:35 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9593B689-A020-4C38-9935-FF9CB9110EFA-75542-000139DCEDA0DDA8",
				"nick": "pertl",
				"description": "",
				"time": "12:36 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~pertl@p578bb42c.dip0.t-ipconnect.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L8AF30685-59AE-4020-AA3B-BAED3DD465EA-75542-000139F1A4A6E8A5",
				"nick": "tgunr",
				"description": "Ping timeout: 248 seconds",
				"time": "12:38 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L1FBF9F10-ED41-4BE9-B1A0-D81238ACCE20-75542-000139F1BBA2B2FE",
				"nick": "eurodata",
				"description": "Remote host closed the connection",
				"time": "12:38 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~eurodata@240.80-203-35.nextgentel.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L22AF5E17-8025-4BE9-BA91-9FAB5654BF66-75542-00013A0A27E06359",
				"nick": "tgunr_",
				"description": "Read error: Connection reset by peer",
				"time": "12:40 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L92A42919-75FC-4C4F-9AB9-62EDB5F8B804-75542-00013A0A4800CE64",
				"nick": "drubies|mbp",
				"description": "Read error: Connection reset by peer",
				"time": "12:40 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~drubies|m@70-89-224-2-BusName-panjde.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L4D3F529F-FB2E-4C75-8B2B-7D14977651FA-75542-00013A10CDD6543C",
				"nick": "drubies|mbp",
				"description": "",
				"time": "12:40 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~drubies|m@70-89-224-2-BusName-panjde.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LFDF0D45E-0C29-4A5E-9619-1156344CA31C-75542-00013A178843A413",
				"nick": "russkey",
				"description": "Ping timeout: 246 seconds",
				"time": "12:41 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Adium@70-90-31-254-BusName-pa.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9BB5BDB9-CFAC-46D1-815A-CB991BB35460-75542-00013A1E606CDB9A",
				"nick": "tgunr",
				"description": "",
				"time": "12:41 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L1AF7C85D-C451-4B86-8D85-9F81F4DDAA0C-75542-00013A587D008498",
				"nick": "rustymyers",
				"description": "",
				"time": "12:45 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rustymyer@c-98-235-170-33.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0B068EDF-5319-458C-B23F-D8FC28F5FFB2-75542-00013A5FA6AAEAE8",
				"nick": "shuaib",
				"description": "",
				"time": "12:46 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~shuaib@unaffiliated/shuaib",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L4EEA1694-DB89-4B4D-A175-CCD94380EF50-75542-00013A60DF98884F",
				"nick": "russkey",
				"description": "",
				"time": "12:46 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Adium@70-90-31-254-BusName-pa.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L769674B8-6589-470B-9936-A61745DB7D30-75542-00013A957FB1A5D0",
				"nick": "tschundeee",
				"description": "",
				"time": "12:50 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~anonymous@HSI-KBW-085-216-123-190.hsi.kabelbw.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L60C7288A-8835-4C70-81F4-BB4059A2C865-75542-00013AF0CE65FF9D",
				"nick": "remyo",
				"description": "",
				"time": "12:56 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L60753619-58DA-46B0-A44E-18FFF48524F6-75542-00013AF0D080DE49",
				"nick": "sharkhat",
				"description": "CPng|N: &nbsp;bummer my ocz vertex 2 is running perfeclty",
				"time": "12:56 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sharkhat@2620:0:e50:1015:222:41ff:fe2b:ffbb",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L82DD5C30-B302-43CE-ACA1-3CAFDDEEAE82-75542-00013AF5C2464D2C",
				"nick": "sharkhat",
				"description": "beings that they are the largest by volume makers of consumer ssds, you will get some doas..",
				"time": "12:57 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sharkhat@2620:0:e50:1015:222:41ff:fe2b:ffbb",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB7F8081B-0487-4B37-AB8D-54BEFC3EBEDC-75542-00013AF8FEDAE68A",
				"nick": "sharkhat",
				"description": "and other issues",
				"time": "12:57 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sharkhat@2620:0:e50:1015:222:41ff:fe2b:ffbb",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L03AA7982-967D-4A3E-820C-B577DD1ADD5B-75542-00013B1ACBECF707",
				"nick": "Nitax",
				"description": "yeah I have read a number of positive things about them too",
				"time": "12:59 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Nitax@nc6521221.cns.vt.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LC50A2512-B5D5-4AF6-8E7C-049D88761FCB-75542-00013B1C20E8063C",
				"nick": "chocobanana",
				"description": "",
				"time": "12:59 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L40034D4C-3E4C-4DFD-9A1E-1437E19366CA-75542-00013B1D5EEDCAEF",
				"nick": "chocobanana",
				"description": "hi everyone!!!",
				"time": "12:59 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L15554D37-4CA9-44D5-B9BB-BAFCA4FFEC11-75542-00013B3A64744135",
				"nick": "britishseapower",
				"description": "",
				"time": "1:01 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~billy@5ad35113.bb.sky.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8DB44EB3-F4B0-41CD-8B07-37E72B84C598-75542-00013B3AEA6F3F11",
				"nick": "rorx",
				"description": "hello",
				"time": "1:01 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rorx@cypher.truestep.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L496ACF96-B561-4750-916F-7E913AE44D94-75542-00013B5134A6811E",
				"nick": "LeNsTR",
				"description": "LeNsTR|off",
				"time": "1:03 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~lenstr@unaffiliated/lenstr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LACD805B8-FCF0-4948-AA3C-8BD3BBB8B8D8-75542-00013B7E62D844B6",
				"nick": "doppiabeo",
				"description": "",
				"time": "1:06 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~doppiabeo@217.201.97.128",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9E5D4351-B981-4784-B7F8-68E2FD84194F-75542-00013B8C8AD95E50",
				"nick": "CPng|N",
				"description": "hmm. well just wanted to point it out",
				"time": "1:07 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB247CD1F-C22D-4A6E-A8B9-1250266D7FF2-75542-00013B8F45CD8138",
				"nick": "CPng|N",
				"description": "as he mentioned reading several issues on amazon",
				"time": "1:07 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LC946B692-9A3D-4B0A-817A-55126095046F-75542-00013B908076CD9A",
				"nick": "NorwayGeek",
				"description": "",
				"time": "1:08 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Alex@15.255.34.95.customer.cdi.no",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LCDCBC0CF-297A-4BD9-BA42-240A8C1CAC1F-75542-00013BB3DAC22700",
				"nick": "tL_",
				"description": "Quit: This computer has gone to sleep",
				"time": "1:10 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~tL@unaffiliated/tl-/x-5475428",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L4F17D32F-5769-48D9-9467-3A755F8D2C87-75542-00013BD82490CBA3",
				"nick": "britishseapower",
				"description": "Quit: I'm off, tata",
				"time": "1:13 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~billy@5ad35113.bb.sky.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LCA7FD0B9-D782-4F35-9628-9A0FCE176AA4-75542-00013BE47FC6E940",
				"nick": "NavyBear",
				"description": "Quit: I Quit!",
				"time": "1:14 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Slave@unaffiliated/thenavybear",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L72B9A25D-45F6-43D1-9234-CE369FB4D722-75542-00013BF9B2DDAB42",
				"nick": "LeNsTR|off",
				"description": "LeNsTR",
				"time": "1:15 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~lenstr@unaffiliated/lenstr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LDF9CD807-3260-4DDF-A54E-7905DECB4F31-75542-00013BFFC6502F4C",
				"nick": "jen_",
				"description": "",
				"time": "1:16 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jen_@pool-96-242-34-133.nwrknj.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LF952BEB8-1A02-48C7-91CF-2B06A00A0F7D-75542-00013BFFCFC8C043",
				"nick": "cilly",
				"description": "Disconnected by services",
				"time": "1:16 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L00162451-773B-40D3-8377-820B62C1DBD2-75542-00013C00D368CA30",
				"nick": "cillybabe",
				"description": "",
				"time": "1:16 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L3900439D-FB9D-4798-9FE6-BDDFA8E746D7-75542-00013C06AC0536E7",
				"nick": "LeNsTR",
				"description": "LeNsTR|off",
				"time": "1:16 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~lenstr@unaffiliated/lenstr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L28CBA53D-EE1F-498A-9B99-0CC835416D86-75542-00013C0D5FDBCA1F",
				"nick": "Horsecow",
				"description": "",
				"time": "1:17 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~The@adsl-76-211-228-109.dsl.pltn13.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFB7CF5B9-191C-4A7C-B9C9-7AC65649775D-75542-00013C0F909962D9",
				"nick": "jen_",
				"description": "My default application to open PDF is Adobe Reader - how do I get the Adobe PDF icon to be the default icon for pdf files on my DESKTOP?",
				"time": "1:17 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jen_@pool-96-242-34-133.nwrknj.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LFBC3A8C4-4F4C-4B44-9E8D-DB80ADEC1FB3-75542-00013C172E6A5F0A",
				"nick": "heliostatic",
				"description": "",
				"time": "1:17 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~heliostat@nat-204-14-239-211-sfo.net.salesforce.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD6456A71-A67A-4EC4-8D52-3B4111B16FF0-75542-00013C27B6C4286B",
				"nick": "Horsecow",
				"description": "Client Quit",
				"time": "1:18 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~The@adsl-76-211-228-109.dsl.pltn13.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD21F662A-5BDD-437C-B4F4-F4D9144D704D-75542-00013C4D613B44E5",
				"nick": "ryaxnb",
				"description": "",
				"time": "1:21 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ryaxnb@dsl-63-249-87-215.dhcp.cruzio.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LA340BB1C-1318-4D28-95E6-BF009B2619DE-75542-00013C5705A2F935",
				"nick": "jfrisby",
				"description": "",
				"time": "1:22 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jfrisby@216.55.29.174",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC4784C67-5422-40EF-B462-A9259AB9EE32-75542-00013C7EB62E2B33",
				"nick": "chocobanana",
				"description": "jen_: only for files on the desktop or everywhere?",
				"time": "1:25 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFFB1CDAE-CE2C-48DE-9F3F-CB0605444993-75542-00013C9785B475CE",
				"nick": "jen_",
				"description": "chocobanana: well, &nbsp;I'd like the pdf icon to be represent everywhere...same for a safari file.",
				"time": "1:26 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jen_@pool-96-242-34-133.nwrknj.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6F01537B-5DFB-4025-A65F-995B0678626D-75542-00013C9792E62517",
				"nick": "CPng|N1",
				"description": "",
				"time": "1:26 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L2537520C-ACE1-40D6-80F6-2E75639CF04E-75542-00013CB01B20D8D7",
				"nick": "CPng|N",
				"description": "Ping timeout: 240 seconds",
				"time": "1:28 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L83A570C0-07F4-4A1A-94FA-13975E97B17B-75542-00013CB959589182",
				"nick": "remyo",
				"description": "Quit: remyo",
				"time": "1:29 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6C1FE55D-870D-4962-A564-BD7DAF687783-75542-00013CBAF7B2D4B8",
				"nick": "chocobanana",
				"description": "jen_: http://www.macworld.com/article/61358/2007/12/iconpreviewgone.html",
				"time": "1:29 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC4DE1677-A6E0-40E4-8836-66943A553C98-75542-00013CC32FAFD287",
				"nick": "chocobanana",
				"description": "if I understood well, you don't want to see previews in icons, right?",
				"time": "1:30 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L83F17006-26FD-45D1-98A9-F97789CD2C57-75542-00013CC811BE43EA",
				"nick": "CPng|N1",
				"description": "Client Quit",
				"time": "1:30 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L74C81F78-A3A9-4531-8E10-7596CACEE862-75542-00013CD41DF9BA9F",
				"nick": "nandemonai",
				"description": "Quit: zZzZz",
				"time": "1:31 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~nandemona@unaffiliated/nandemonai",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L274112B7-DE82-4039-A039-B324E66567A4-75542-00013CD8FCB44CA7",
				"nick": "jen_",
				"description": "oh dang, I had it checked off. &nbsp;I DO want to see the icons. &nbsp;Now I see pdf but safari is just a @ with a http at the bottom. &nbsp;I need to get that icon...",
				"time": "1:31 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jen_@pool-96-242-34-133.nwrknj.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3D40F6A7-5460-4FE6-AE17-A08166DE8D8E-75542-00013CD943D38D2E",
				"nick": "jen_",
				"description": "thanks.",
				"time": "1:31 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jen_@pool-96-242-34-133.nwrknj.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L370FE51F-3F0F-42B5-AA1E-F9ED1A59CD4D-75542-00013CFFB0C76CA7",
				"nick": "CPng|N",
				"description": "",
				"time": "1:34 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFAFC75AA-8730-4C8C-AAEA-D638D75F8DB7-75542-00013D04E1417C18",
				"nick": "chocobanana",
				"description": "jen_: this might work, but no guarantees :P",
				"time": "1:34 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDE28BDC6-26F8-4B19-B391-5CF5EDA595CF-75542-00013D07ED025A7F",
				"nick": "chocobanana",
				"description": "http://forums.macrumors.com/showthread.php?t=1016673",
				"time": "1:34 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8A06488D-57D2-4BC7-A40F-120622F5B6DE-75542-00013D0FF41B6A90",
				"nick": "chocobanana",
				"description": "go back in the first instructions and follow those in the second link",
				"time": "1:35 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LBE6A2617-5379-4410-A9ED-D4335B4CE901-75542-00013D12FDC2F971",
				"nick": "gerryvdm",
				"description": "Quit: Linkinus - http://linkinus.com",
				"time": "1:35 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~gerryvdm@unaffiliated/gerryvdm",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L10C42410-6C46-413D-8AFA-A24C9A52B835-75542-00013D16BB414C95",
				"nick": "Wally",
				"description": "",
				"time": "1:36 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "LE3ADC631-9C1B-4386-8FF2-09B508F61A20-75542-00013D278F7D472E",
				"nick": "roygbiv",
				"description": "",
				"time": "1:37 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~None@pdpc/supporter/active/roygbiv",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L89C8FFF2-1FE7-4AB2-B1FD-5A0A472228FA-75542-00013D27DEC288B1",
				"nick": "jen_",
				"description": "thanks..",
				"time": "1:37 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jen_@pool-96-242-34-133.nwrknj.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L1438B614-7EAE-4C19-809B-9C1F415A3EF1-75542-00013D28B703E0C8",
				"nick": "jen_",
				"description": "Quit: jen_",
				"time": "1:37 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~jen_@pool-96-242-34-133.nwrknj.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L34AB5BFC-521D-4664-9126-58DDD8548291-75542-00013D34A3BF302E",
				"nick": "cillybabe",
				"description": "Remote host closed the connection",
				"time": "1:38 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA63238F9-003A-4745-A0F7-B16A68F07358-75542-00013D39396221FF",
				"nick": "ncow",
				"description": "wow heres a twist on kidnapping/random cases: kidnappers demand $1.5 million (US), get it, and return what was left of the baby after they cooked and had eaten it.",
				"time": "1:38 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDDA3A358-12D9-4F43-BF92-CEC3A08D2D26-75542-00013D3F21A66A7C",
				"nick": "Wally",
				"description": ":/",
				"time": "1:38 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L07CDA2C2-B0F8-4DA5-B049-63832EB1C0E4-75542-00013D4603FF383C",
				"nick": "Wally",
				"description": "thats.. not very nice.",
				"time": "1:39 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0E7CC099-F8D7-4BA4-90EA-585BBB82DDD9-75542-00013D50495C2DFB",
				"nick": "ncow",
				"description": "yeah it's horrible. hard to believe anyone could do that",
				"time": "1:40 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LFA160288-715B-4ACD-91FE-32935F21B0DB-75542-00013D72E52BD367",
				"nick": "JeZ-|-Lee_",
				"description": "Quit: Leaving",
				"time": "1:42 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~JeZ-|-Lee@ool-44c30858.dyn.optonline.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9010092C-6E82-4BF5-9E6E-C21664315945-75542-00013D907285A2EF",
				"nick": "JeZ-|-Lee",
				"description": "",
				"time": "1:44 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~JeZ-|-Lee@ool-44c30858.dyn.optonline.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0E5D4A8F-045C-4F30-9FAF-4AFB8657EABF-75542-00013D978AF143F6",
				"nick": "Segnale007",
				"description": "",
				"time": "1:45 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Segnale00@ppp-212-139.98-62.inwind.it",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L194440D8-D095-4DDA-A785-48AA88AC8711-75542-00013D9E22BD32E9",
				"nick": "Diverdude",
				"description": "Read error: Operation timed out",
				"time": "1:45 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Diverdude@1709ds1-vbr.0.fullrate.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LA94150B2-FA14-42F5-A5B2-F8A203FD5354-75542-00013DAB09075F97",
				"nick": "tL_",
				"description": "",
				"time": "1:46 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tL@host109-156-26-204.range109-156.btcentralplus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L12F36385-4E7E-4FBF-9465-9242277AE808-75542-00013DAB0C73FC0A",
				"nick": "tL_",
				"description": "Changing host",
				"time": "1:46 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~tL@host109-156-26-204.range109-156.btcentralplus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L44519FED-21F4-4831-8282-4F86CA474E95-75542-00013DAB0C94F22A",
				"nick": "tL_",
				"description": "",
				"time": "1:46 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tL@unaffiliated/tl-/x-5475428",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L4D580F12-CB28-46BF-8D51-1B72E301F1EB-75542-00013DAFDB043CB6",
				"nick": "josephjaz",
				"description": "",
				"time": "1:46 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~josephjaz@174-17-230-203.phnx.qwest.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LC70A5601-03AD-4304-88A7-BE88C31E4B4F-75542-00013DB32881FE89",
				"nick": "turkchgo",
				"description": "",
				"time": "1:47 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~trbldwine@adam.ur.northwestern.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L53CC5574-4983-49EF-A03B-4FA91DB3A70B-75542-00013DB73D908D71",
				"nick": "tL_",
				"description": "Remote host closed the connection",
				"time": "1:47 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~tL@unaffiliated/tl-/x-5475428",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD84EA3D8-F54F-4C12-9F63-CF052FFF8BDE-75542-00013DBFE7CAA7F8",
				"nick": "teclo",
				"description": "",
				"time": "1:48 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "42@unaffiliated/teclo",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LA9AE3D8C-83AA-457E-9AAE-858FCCA09F9D-75542-00013DC332FDA022",
				"nick": "mmw",
				"description": "",
				"time": "1:48 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~mmw@91.179.35.45",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0B783EA9-3B0C-4DED-8658-6B36737D7E77-75542-00013DC482E3EBFF",
				"nick": "josephjaz",
				"description": "Hello all, I'm Joseph. I had an airport extreme question to trouble you kind folks with. ",
				"time": "1:48 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~josephjaz@174-17-230-203.phnx.qwest.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L183B2059-61F0-4FB3-948A-F19038878CC4-75542-00013DC7ED682A33",
				"nick": "remyo",
				"description": "",
				"time": "1:48 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L8F247EE7-BD09-41DF-AECD-B19B3512E053-75542-00013DCAAE7F4649",
				"nick": "remyo",
				"description": "Client Quit",
				"time": "1:48 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~remyo@dsl-dynamic-206-74-181-43.skybest.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L071BB38F-8DF4-44B2-A874-821E5DD44927-75542-00013DD8BFCF49DE",
				"nick": "kall",
				"description": "Read error: Connection timed out",
				"time": "1:49 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~kall@dslb-178-000-107-180.pools.arcor-ip.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L677E0B4D-4CDE-4DA0-909E-8B4FAB2DAB8A-75542-00013DE5C32A740C",
				"nick": "sharkhat",
				"description": "i've had two models",
				"time": "1:50 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sharkhat@2620:0:e50:1015:222:41ff:fe2b:ffbb",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4023467C-89ED-4BA6-A9A1-4B0C1D6107AE-75542-00013DE7A4BF32BE",
				"nick": "sharkhat",
				"description": "whats the question?",
				"time": "1:50 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sharkhat@2620:0:e50:1015:222:41ff:fe2b:ffbb",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCE3A0D49-E203-40F8-82A4-15B2348E9756-75542-00013DEC17B201A5",
				"nick": "sharkhat",
				"description": "yes, i've sent 400 dollars on apple routers in 4 years.. ",
				"time": "1:51 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sharkhat@2620:0:e50:1015:222:41ff:fe2b:ffbb",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBF34DDAC-F8C4-4A6A-9429-E89DE516E00E-75542-00013DEC8FBF3816",
				"nick": "sharkhat",
				"description": ":(",
				"time": "1:51 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sharkhat@2620:0:e50:1015:222:41ff:fe2b:ffbb",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L298846AD-F06E-4B64-A642-07C697E2CF7A-75542-00013DEE5BF28FAE",
				"nick": "kall",
				"description": "",
				"time": "1:51 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~kall@dslb-178-000-107-180.pools.arcor-ip.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L2EE3344D-BA9F-4484-8242-87B7CD8AE72B-75542-00013DFBEB929C8A",
				"nick": "shiira",
				"description": "Remote host closed the connection",
				"time": "1:52 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~mac@agp64.neoplus.adsl.tpnet.pl",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LC3965B44-8E68-4C0B-8116-56A09694DC43-75542-00013E01A7F587D3",
				"nick": "kooliow",
				"description": "",
				"time": "1:52 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~iirc@195.91.55.210",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L599E9AAD-F626-4B22-8E46-EA4AE451FA7B-75542-00013E02E5456412",
				"nick": "kooliow",
				"description": "Remote host closed the connection",
				"time": "1:52 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~iirc@195.91.55.210",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD88F6A92-161A-4EF7-A432-333BBC6D3615-75542-00013E033E14BC77",
				"nick": "josephjaz",
				"description": "I have the g hockey alien one. ",
				"time": "1:52 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~josephjaz@174-17-230-203.phnx.qwest.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LE61410B2-B17E-4602-A4F6-EDA1D1F89218-75542-00013E083D552D26",
				"nick": "empity`",
				"description": "Ping timeout: 276 seconds",
				"time": "1:53 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~user@ip1-201.halifax.RWTH-Aachen.DE",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L21569EEE-9273-43CF-A68B-132742848B16-75542-00013E0CD73A89B3",
				"nick": "josephjaz",
				"description": "It won't show up in the wireless or airport utility and no matter how much I reset only the middle light comes on solidly. ",
				"time": "1:53 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~josephjaz@174-17-230-203.phnx.qwest.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LA2764351-DEB7-40F6-B4AF-2D8FB2DCFFBE-75542-00013E1A2325A2BD",
				"nick": "simplicity-",
				"description": "Quit: simplicity-",
				"time": "1:54 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~simpli@unaffiliated/simplicity-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9A4024E9-A843-4F59-B068-B2713BE0268D-75542-00013E1EC9E0E7E6",
				"nick": "madmax",
				"description": "Quit: reboot",
				"time": "1:54 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~madmax@static-ip-85-25-172-23.inaddr.intergenia.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "L7C789E0F-3146-4DCB-8D89-2A5593C5928B-75542-00013E35435FA091",
				"nick": "Wally",
				"description": "never knew automator was so.. powerful lol",
				"time": "1:56 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LFC337A0E-0E06-4715-8563-7F2AD4210019-75542-00013E3C53B0E517",
				"nick": "oxoocoffee",
				"description": "Quit: oxoocoffee",
				"time": "1:57 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~oxoocoffe@96.24.29.99",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC4333BEB-B55F-40EF-8F51-08756390AE99-75542-00013E3DF8421B6F",
				"nick": "Juo",
				"description": "Quit: Juo",
				"time": "1:57 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Juo@unaffiliated/juo",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3DE12D1C-2A14-4B05-83B4-006A2B8031C2-75542-00013E41A877C5C3",
				"nick": "rustymyers",
				"description": "Remote host closed the connection",
				"time": "1:57 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~rustymyer@c-98-235-170-33.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LC4AF5913-5EE6-4BB8-B268-E45E71BC6285-75542-00013E430BEE3636",
				"nick": "rustymyers",
				"description": "",
				"time": "1:57 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rustymyer@c-98-235-170-33.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L987C5EA2-B245-47EC-A128-24BC5576BEC4-75542-00013E4999560D59",
				"nick": "Adrian26",
				"description": "",
				"time": "1:58 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~adrian@c-76-111-191-42.hsd1.wv.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC609017A-4334-4190-A2BA-11251B11469A-75542-00013E4B7EAE6B52",
				"nick": "sharkhat",
				"description": "thats beyond me i only know about the square ones",
				"time": "1:58 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sharkhat@2620:0:e50:1015:222:41ff:fe2b:ffbb",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L70438E71-0D61-47EC-9EFB-3ADC7BF995AE-75542-00013E52FBFFDA07",
				"nick": "HunterZero",
				"description": "Read error: Connection reset by peer",
				"time": "1:58 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~HunterZer@c-24-5-127-115.hsd1.ca.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L04A7C026-9C32-485F-8DCC-A728542F3D64-75542-00013E536B2436B6",
				"nick": "HunterZe_",
				"description": "",
				"time": "1:58 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~HunterZer@c-24-5-127-115.hsd1.ca.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9C34765D-0CF1-4D7E-A03D-8815F08DF39C-75542-00013E5722197EA5",
				"nick": "josephjaz",
				"description": "Yeah. I want to save to get the dual band square one. Heavenly. ",
				"time": "1:58 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~josephjaz@174-17-230-203.phnx.qwest.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L50B3A8C1-13AC-4397-9D15-B3A1FCF23893-75542-00013E583897E8A9",
				"nick": "chiper",
				"description": "huh... &nbsp;I was wondering why I hadn't see any activity in this channel since 10:30. &nbsp;click on the window and suddenly linkinus updated",
				"time": "1:59 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L617B304E-B046-402E-A7C3-97596BC130D3-75542-00013E62B1206E48",
				"nick": "newbold",
				"description": "heh",
				"time": "1:59 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4870370E-6BC1-46C5-865A-5637A2248D4D-75542-00013E63A371EF57",
				"nick": "newbold",
				"description": "it's magic!",
				"time": "1:59 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L1D31F2EB-CBCB-4D8B-BC99-8B21093F536E-75542-00013E63DBDEEDC6",
				"nick": "Brisk",
				"description": "",
				"time": "1:59 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Brisk@bas1-ottawa11-1176121398.dsl.bell.ca",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L41C0CFD7-4CA8-42DA-B5F6-BBB099782CB1-75542-00013E694A90E877",
				"nick": "atmosx",
				"description": "linkinus?",
				"time": "2:00 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~osx@46.12.134.89.dsl.dyn.forthnet.gr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L4DED68F8-6088-460D-8B12-7FAE56BCCE54-75542-00013E6E9A85FCBB",
				"nick": "lundmark",
				"description": "",
				"time": "2:00 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~lundmark@h70n1c1o1036.bredband.skanova.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L667A0D20-D15C-4821-ABE6-293D32A483F1-75542-00013E70BD257AFE",
				"nick": "Wally",
				"description": "atmosx: IRC client",
				"time": "2:00 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L79016083-40A3-4AAB-AA15-CD9155D469F1-75542-00013E72C62D88B4",
				"nick": "atmosx",
				"description": "oh",
				"time": "2:00 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~osx@46.12.134.89.dsl.dyn.forthnet.gr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA91612BE-0BCC-49EE-881D-64085FB9BD93-75542-00013E72EE55F838",
				"nick": "atmosx",
				"description": "right",
				"time": "2:00 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~osx@46.12.134.89.dsl.dyn.forthnet.gr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L11FDD3D1-FB78-4675-8C5E-4119ACE5A6AF-75542-00013E77709E321B",
				"nick": "russkey",
				"description": "Quit: Leaving.",
				"time": "2:01 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Adium@70-90-31-254-BusName-pa.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC1650CAE-12DE-4EAE-9359-D4DBF2C3C7F0-75542-00013E77B84A4D3E",
				"nick": "Wally",
				"description": "best one by far IMHO",
				"time": "2:01 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7F4E5A3C-CED6-4087-81B7-9D52C242FB92-75542-00013E81B881E8F5",
				"nick": "chiper",
				"description": "that's a heavily argued topic. &nbsp;it does everything I want an irc client to do",
				"time": "2:02 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "L3C802DE1-3AEF-4B50-835D-6E002ED49C59-75542-00013E81CC730A6E",
				"nick": "josephjaz",
				"description": "",
				"time": "2:02 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~josephjaz@174-17-230-203.phnx.qwest.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L86AA7578-F599-4379-A714-F22981E32DBD-75542-00013E877164FF88",
				"nick": "Diverdude",
				"description": "",
				"time": "2:02 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Diverdude@1709ds1-vbr.0.fullrate.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L31908319-4556-4384-8302-A126D30E5B65-75542-00013E8C132046DC",
				"nick": "Berzerker",
				"description": "Wally: you haven't used Textual",
				"time": "2:02 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L63889CA8-7EF7-41EE-A0C0-5E31027DB1B2-75542-00013E8C8331E189",
				"nick": "CPng|N1",
				"description": "",
				"time": "2:02 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDA7E89A4-629A-4B5C-A9AB-B7C0480EC927-75542-00013E8D31050BF6",
				"nick": "Berzerker",
				"description": "atmosx: Textual &gt; Linkinus",
				"time": "2:02 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBF7F9399-E47F-440C-98EB-C29F172E5B0F-75542-00013E8DF00CF9B3",
				"nick": "newbold",
				"description": "so I got this credit card in the mail today, which I got because of the awesome 0% APR on balance transfers for 21 months",
				"time": "2:02 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L87E36DFD-EF00-4F85-84B1-A6FC5C2538A9-75542-00013E90FAB6B020",
				"nick": "newbold",
				"description": "but now that I have it, I suddenly feel an urge to go to the Apple store",
				"time": "2:03 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L11ADBE96-5571-4DFE-B826-11EEE3652F54-75542-00013E925F5CD41F",
				"nick": "chiper",
				"description": "newbold: citibank?",
				"time": "2:03 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE25DE601-ABF6-4BB9-8B5C-D02533EDA27C-75542-00013E934981CB06",
				"nick": "newbold",
				"description": "chiper: yeah!",
				"time": "2:03 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": true,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF8E44AC6-BB48-4210-9327-C1254E656091-75542-00013E95AE4C5355",
				"nick": "newbold",
				"description": "the Diamond Preferred Select Your Majesty is Awesome Card",
				"time": "2:03 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4E7A994B-7E9F-455E-886A-B73A5A1A9219-75542-00013E95D379D51C",
				"nick": "chiper",
				"description": "mint.com showed me the same offer",
				"time": "2:03 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L00788001-C100-4318-AC7C-0571E03BE4BD-75542-00013E965B6F7322",
				"nick": "newbold",
				"description": "or whatever it's called",
				"time": "2:03 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDE7D0BCA-E186-4EB0-8A17-C2A03C13C0A0-75542-00013E9799D7EF64",
				"nick": "newbold",
				"description": "yeah mint is how I learned of it",
				"time": "2:03 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9CDBFE1E-536E-4E45-ABEA-3FD3DAD108F9-75542-00013E982C35B36B",
				"nick": "newbold",
				"description": "heh awesome",
				"time": "2:03 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L37BF0E04-3F73-4ACC-AC8C-7D118146237A-75542-00013E989A1EA7A2",
				"nick": "newbold",
				"description": "small world",
				"time": "2:03 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF22382F6-F21F-4F44-A6FA-C65A977879CD-75542-00013E9973DAE3AE",
				"nick": "Berzerker",
				"description": "make sure you don't go over or pay late",
				"time": "2:03 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA16BA871-577B-4737-BDDE-0EB2C6EAEFF3-75542-00013E9AC95CB28E",
				"nick": "Berzerker",
				"description": "you'll get slammed with ridiculous interest",
				"time": "2:03 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L143F1838-6D61-4520-8518-E786A79B7FA8-75542-00013E9CB4F4855B",
				"nick": "newbold",
				"description": "anyway, it's sitting right here on my desk, and now all I can think of is MACBOOKAIRTIMECAPSULEIPAD2",
				"time": "2:03 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD9D525CD-7B9A-4265-98DC-C8B9D9982C50-75542-00013E9DEF5DAE06",
				"nick": "sygnous|mbp",
				"description": "Quit: sygnous|mbp",
				"time": "2:04 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~sygnous|m@unaffiliated/malikeye",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LA4C4FD39-C9FB-4153-B431-0F05F2757049-75542-00013E9E1326B6E0",
				"nick": "CPng|N",
				"description": "Read error: Connection reset by peer",
				"time": "2:04 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAC8BB87A-83A0-4B6C-A02B-519267B6DC85-75542-00013E9E90A0581B",
				"nick": "Berzerker",
				"description": "that's always the catch with those offers",
				"time": "2:04 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2E2EE962-43AA-45DE-A830-B72CBFA75AAF-75542-00013E9ED19CADE1",
				"nick": "chiper",
				"description": "but we just finished paying off all our credit cards",
				"time": "2:04 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC0DFADE1-6E96-4113-A428-FAC76CD4D38E-75542-00013EA12F8B8CD0",
				"nick": "Wally",
				"description": "Berzerker not a fan",
				"time": "2:04 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE4694019-1E2D-4F11-A848-281445D59741-75542-00013EA1A4B6A258",
				"nick": "chocobanana",
				"description": "lol",
				"time": "2:04 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAF29188D-5C38-457F-9E66-F0414C8423D4-75542-00013EA3618AC8FC",
				"nick": "newbold",
				"description": "I only have one left and was going to eliminate it quickly after transferring the balance",
				"time": "2:04 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "L818A0540-6367-4167-B037-5D49CF75C03E-75542-00013EA3DDC6A160",
				"nick": "Wally",
				"description": "goes back to playng Pokemon Red :P",
				"time": "2:04 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBE1023AC-1629-4F15-817C-7A4DDD608089-75542-00013EA57F70DF7F",
				"nick": "Berzerker",
				"description": "Wally: more user-friendly features for IRC, less of a memory hog",
				"time": "2:04 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3E42E8F1-8C1E-48D4-8604-22A291EF0980-75542-00013EA5C0DEDDDA",
				"nick": "chocobanana",
				"description": "I hope I can stay clean and never get a credit card",
				"time": "2:04 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4ED9EFE7-3905-4519-B238-BAEB7A74C640-75542-00013EA6AE5F6A63",
				"nick": "Berzerker",
				"description": "better themes",
				"time": "2:04 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L060C216C-1A0A-4511-AD57-174C6180C3C3-75542-00013EA8B07984DF",
				"nick": "Wally",
				"description": "Themes schmemes",
				"time": "2:04 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4CA21A30-9686-463C-AF38-A80C9FC83816-75542-00013EAA7618BD02",
				"nick": "Berzerker",
				"description": "lol",
				"time": "2:04 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LECE1A8E5-4F8E-4FCD-8D39-6A8D91E4AD99-75542-00013EAB2466A579",
				"nick": "chiper",
				"description": "better themes is entirely subjective, the themes are just html and css",
				"time": "2:04 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L40B60F4E-A165-4A43-AA28-AF1F12EA8600-75542-00013EADA833F194",
				"nick": "Wally",
				"description": "chocobanana I have a creditcard... However I don't use it.. I opt for debit.",
				"time": "2:05 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L4EF737D9-9486-4C2B-9C71-23AA70A85896-75542-00013EAFF6CB7B27",
				"nick": "HunterZe_",
				"description": "Read error: Connection reset by peer",
				"time": "2:05 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~HunterZer@c-24-5-127-115.hsd1.ca.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L6FD5BD99-9E84-49BB-99DA-4E26370D3932-75542-00013EB0C67BFA5E",
				"nick": "dust--",
				"description": "Ping timeout: 246 seconds",
				"time": "2:05 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "dust--@quepasa.netfrag.org",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEB3D5C12-8263-4FED-B7BC-440961169263-75542-00013EB19DE3D677",
				"nick": "chiper",
				"description": "and I bet textual uses the same webview engine, so the themes can be used in both",
				"time": "2:05 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L57450089-26F2-4E70-80AC-974E8AE386C1-75542-00013EB3FC71247D",
				"nick": "chiper",
				"description": "yup, it does",
				"time": "2:05 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF413F8E1-9973-4523-9FC2-61CF87D87796-75542-00013EB4F358F93C",
				"nick": "chocobanana",
				"description": "Wally: that's fine too, as long as I don't have to pay an annual fee for the card",
				"time": "2:05 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L71592D28-8575-48D9-9CE6-71AB79E52112-75542-00013EB5AD48308D",
				"nick": "Guest28704",
				"description": "Ping timeout: 246 seconds",
				"time": "2:05 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~bunny@static.88-198-98-194.clients.your-server.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LAD352E27-4D10-4D17-AF41-DD6F22E8A1BE-75542-00013EB6BF3B9C27",
				"nick": "McMAGIC--",
				"description": "Ping timeout: 246 seconds",
				"time": "2:05 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "debian-tor@gateway/tor-sasl/mcmagic--",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAFB399E5-7E6B-4181-A3EE-0D2A881203C7-75542-00013EB773EC7721",
				"nick": "Wally",
				"description": "thats the only issue",
				"time": "2:05 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L4E705E5C-A5AE-4B22-B76E-86A7B3BD0884-75542-00013EB862345073",
				"nick": "HunterZero",
				"description": "",
				"time": "2:05 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~HunterZer@c-24-5-127-115.hsd1.ca.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L209F9A7C-7EF0-442A-A80F-A83ABBF4E26D-75542-00013EBA87999CDD",
				"nick": "eobet",
				"description": "Ping timeout: 246 seconds",
				"time": "2:06 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~eobet@blood.clot.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5F19A6BD-AF64-45A8-9103-FD8E51C52F30-75542-00013EBA9E127763",
				"nick": "Wally",
				"description": "but $35 a year isn't that bad for $2000 advance..",
				"time": "2:06 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L85A930BC-93CE-40B5-A983-D5BA1C70F8CF-75542-00013EBBA2CD1932",
				"nick": "MrUnagi",
				"description": "",
				"time": "2:06 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~mrunagi@184-211-14-187.pools.spcsdns.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAC64B086-21A1-47D1-A10E-28B96C7F6CA5-75542-00013EBC79A6B5BC",
				"nick": "chocobanana",
				"description": "I already have to pay the debit card, you see? :S",
				"time": "2:06 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA5D6FB9D-1D8C-46BD-AC04-31DD61F21379-75542-00013EBD8993C8B7",
				"nick": "Wally",
				"description": "ah",
				"time": "2:06 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L957AAF89-DB02-420C-8439-F54BCFEDAAA8-75542-00013EBF6B2A6307",
				"nick": "Gallomimia",
				"description": "Ping timeout: 246 seconds",
				"time": "2:06 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Gallomimi@S0106002129694bfa.vs.shawcable.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD5031E68-4E27-48AE-B52A-E3243FAD4B43-75542-00013EBF6DB197B5",
				"nick": "artgoeshere",
				"description": "Ping timeout: 246 seconds",
				"time": "2:06 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~jgillman@pony.feralhosting.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9929AD64-4545-4E14-84C8-8B61B9E8650A-75542-00013EBF6DCDC14D",
				"nick": "matx",
				"description": "Ping timeout: 246 seconds",
				"time": "2:06 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~matx@host86-168-25-30.range86-168.btcentralplus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE3002D35-9D49-4B6C-8F20-C313CA071251-75542-00013EBF972AD1B5",
				"nick": "Wally",
				"description": "ANZ dont' charge me for the debit card",
				"time": "2:06 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5D3A5676-9A15-4C18-B87D-7643A56066E6-75542-00013EC08375F0FD",
				"nick": "chocobanana",
				"description": "nah, when I don't have, I prefer to save",
				"time": "2:06 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDC719342-4CA5-4030-8840-3DDE1AC6260C-75542-00013EC0E114CAAD",
				"nick": "chiper",
				"description": "in fact it looks like it defaults to the exact same theme I'm using in linkinus...",
				"time": "2:06 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC865ADF9-376F-44B7-9F9B-CC6B54190302-75542-00013EC2FD220452",
				"nick": "MrUnagi",
				"description": "I love my iPad car mount",
				"time": "2:06 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~mrunagi@184-211-14-187.pools.spcsdns.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7FF2ED6A-FB16-4F4D-9F5D-73D08C4778F7-75542-00013EC35DC64754",
				"nick": "Kovensky",
				"description": "Ping timeout: 260 seconds",
				"time": "2:06 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~kovensky@abraxo.bluebottle.net.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L13BAD154-F102-4D4F-8AA0-BFF99B6B52D5-75542-00013EC39E260B0D",
				"nick": "Wally",
				"description": "damn pidgey nearly killed me :(",
				"time": "2:06 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LA0F89042-4A83-402A-8DCF-678161B31B9F-75542-00013ECB0AB97117",
				"nick": "Kovensky",
				"description": "",
				"time": "2:07 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~kovensky@abraxo.bluebottle.net.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF56E5136-DE17-4323-90F1-6B25A06FD5BF-75542-00013ECBC2D08576",
				"nick": "chiper",
				"description": "... and I just realized that linkinus overwrote my custom theme...",
				"time": "2:07 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4F6AD7F2-8451-4144-BD9A-567B319D7722-75542-00013ECC655D3E0A",
				"nick": "chocobanana",
				"description": "my previous bank also didn't explicitly charge for the debit card but the total yearly cost was higher than what I have now",
				"time": "2:07 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L1F85E6FB-0F04-435C-9A4F-90487267D7B4-75542-00013ECDDD1C8834",
				"nick": "eobet",
				"description": "",
				"time": "2:07 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~eobet@blood.clot.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LDD1C855B-FB4D-4291-9405-90DCB5B1054B-75542-00013ECF3873B541",
				"nick": "bunnywabbit_",
				"description": "",
				"time": "2:07 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~bunny@static.88-198-98-194.clients.your-server.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "LEB1916A6-8C1E-466F-8145-7642BEE20FFE-75542-00013ECF83134C10",
				"nick": "chiper",
				"description": "fires up timemachine",
				"time": "2:07 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD8D6874A-8493-4D46-9E2A-F5D4D0C12577-75542-00013ED03269F659",
				"nick": "matx",
				"description": "",
				"time": "2:07 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~matx@host86-168-25-30.range86-168.btcentralplus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L82290F31-9FCF-4081-870B-0131740E9502-75542-00013ED113DDCB1B",
				"nick": "dust--",
				"description": "",
				"time": "2:07 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "dust--@quepasa.netfrag.org",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF4FFE187-45EC-4132-B78A-B44E8A854BC4-75542-00013ED438A4EB6F",
				"nick": "newbold",
				"description": "13\" MacBook Air, it's calling me",
				"time": "2:07 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "LC03235FB-9E52-4A7C-8A33-7A32747C8B11-75542-00013ED54D94C36B",
				"nick": "bunnywabbit_",
				"description": "Guest94448",
				"time": "2:08 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~bunny@static.88-198-98-194.clients.your-server.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA9B23468-C8D9-46EA-BBEE-EF54BEB65592-75542-00013ED5FEB7EB50",
				"nick": "newbold",
				"description": "GRRR MUST RESIST",
				"time": "2:08 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LED938EF6-67AF-4FA2-8BB6-7231D93CD880-75542-00013ED81A4F90EE",
				"nick": "tgunr",
				"description": "Quit: Computer has gone to sleep.",
				"time": "2:08 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCCCD8354-6F1D-422B-A400-D2E16FEAA7B4-75542-00013ED8C15A2804",
				"nick": "Wally",
				"description": "yeah.. banks are greedy",
				"time": "2:08 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L36B545D0-9418-4B7F-80DD-53CF18497E10-75542-00013EE03AD73B78",
				"nick": "chocobanana",
				"description": "banks probably have a lot of shares from Apple! :D",
				"time": "2:08 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L51978A51-FEE2-4A17-8326-8CE24D90A05C-75542-00013EE21187561B",
				"nick": "Wally",
				"description": "lol",
				"time": "2:08 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LEB93D5B0-47AC-40CF-ADD8-A219F02F3F4D-75542-00013EE22CF365EB",
				"nick": "suigeneris",
				"description": "Quit: Leaving",
				"time": "2:08 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~iego@unaffiliated/kartagis",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L7F1A2597-54EE-4B27-A97B-ED2025D42561-75542-00013EE42CAA1B9E",
				"nick": "Gallomimia",
				"description": "",
				"time": "2:09 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Gallomimi@S0106002129694bfa.vs.shawcable.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L82A002F3-F73F-4D04-B2BC-326970A0C353-75542-00013EE8A571B1CC",
				"nick": "chocobanana",
				"description": "Steve may have shares from banks too...",
				"time": "2:09 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC07E4F04-6256-42C4-A245-2F36B9A774A3-75542-00013EFB715DB1E2",
				"nick": "newbold",
				"description": "can the memory be upgraded in these new MBAs? why do they all default to 2 GB?",
				"time": "2:10 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAE89C827-4866-4886-AFBD-4CFFA47C8EEC-75542-00013EFEBF8B615E",
				"nick": "chocobanana",
				"description": "newbold: it may help to resist the fact that MBAs will probably get processor updates in the near term...",
				"time": "2:10 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7AA4D5C1-547E-40CA-9FFF-051EF9F19BFE-75542-00013F0230F69629",
				"nick": "newbold",
				"description": ":(",
				"time": "2:11 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6EAB5DF3-C253-4DFE-9B93-04ACFE688974-75542-00013F02FDAE6144",
				"nick": "chocobanana",
				"description": ":D",
				"time": "2:11 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0002FB9B-89BA-4A52-ADB1-39CA4D43FFE1-75542-00013F04C6097CF2",
				"nick": "newbold",
				"description": "how near?",
				"time": "2:11 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB5C41FFF-410E-4731-8C1E-8059F4143051-75542-00013F08EBC74C37",
				"nick": "chocobanana",
				"description": "and by then you may have changed your life and you might even not be interested in splurging! :P",
				"time": "2:11 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LFB2F85E5-57E9-4081-B6FB-440C90956E4F-75542-00013F0A041DF738",
				"nick": "McMAGIC--",
				"description": "",
				"time": "2:11 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "debian-tor@gateway/tor-sasl/mcmagic--",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1A678743-477E-4C5F-BA4B-46458CE0E992-75542-00013F0A53D06405",
				"nick": "chocobanana",
				"description": "no clue...",
				"time": "2:11 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5F3A2736-1F84-404B-A802-52589AA6294F-75542-00013F0A5A6F7722",
				"nick": "Wally",
				"description": "They'll be getting i7",
				"time": "2:11 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L255E9324-1B28-4AE6-B191-77121FCA2298-75542-00013F0B5DCFA028",
				"nick": "Wally",
				"description": ":P",
				"time": "2:11 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L14B4B32F-479E-4A43-9325-148F6126F9B9-75542-00013F0BB1AF322D",
				"nick": "newbold",
				"description": "wut",
				"time": "2:11 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0B4B732C-E5DE-47E0-A62D-DD355C167A94-75542-00013F0C5F43B258",
				"nick": "newbold",
				"description": "LIES",
				"time": "2:11 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB9C0D5D0-76F7-4076-88F0-C6F06512967B-75542-00013F0E21B9E01F",
				"nick": "chocobanana",
				"description": "i7 with 6mb of cache!",
				"time": "2:12 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L49E1668C-4697-4EDF-9D8B-A7C715236DB8-75542-00013F107ADFEFB2",
				"nick": "newbold",
				"description": "LIIIEEESS",
				"time": "2:12 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L83F88456-1079-4A1D-9190-674A221463AD-75542-00013F1192FE6ED3",
				"nick": "newbold",
				"description": "I might get the 11\"",
				"time": "2:12 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L81BF5366-30EB-454B-B087-AA6CFC47EF04-75542-00013F148DFDF8E1",
				"nick": "chocobanana",
				"description": "will mostly likely have those i7s too",
				"time": "2:12 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEFD86470-546C-44DC-A365-9B10EA065DDF-75542-00013F158BBD486E",
				"nick": "newbold",
				"description": "it'll be a fun challenge to live in 64GB",
				"time": "2:12 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8E405EC8-3D3E-4A22-B135-E269336E55A4-75542-00013F17B372C38E",
				"nick": "chocobanana",
				"description": "and SSD upgrades...",
				"time": "2:12 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LC708842E-39B5-4C30-8F80-DD80C36CD52C-75542-00013F193B7938D5",
				"nick": "joako_",
				"description": "",
				"time": "2:12 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~joako@opensuse/member/joak0",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4EF4BA0E-96D1-4784-A792-D77820791814-75542-00013F1A09F062E8",
				"nick": "Wally",
				"description": "chocobanana nah the 11\" Will have i10",
				"time": "2:12 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L95F852A6-F869-430A-B922-93823D51BBC3-75542-00013F1A523AED7D",
				"nick": "shauno",
				"description": "that's a pretty sick definition of fun :/",
				"time": "2:12 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~soneil@pdpc/supporter/professional/shauno",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LDB9AE980-9215-49CB-8886-4C7621DD3B8A-75542-00013F1A781501C7",
				"nick": "madmax",
				"description": "",
				"time": "2:12 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~madmax@static-ip-85-25-172-23.inaddr.intergenia.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5A4CC39D-3502-487E-820E-444F83C01E03-75542-00013F1C20BFE8A1",
				"nick": "Wally",
				"description": "I wouldn't mind ARM processors",
				"time": "2:13 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5BF126E6-FBA4-4A54-9184-52467B272D7B-75542-00013F1CDC62EF9A",
				"nick": "newbold",
				"description": "given enough time, everything will be way better than it is today",
				"time": "2:13 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7616688A-FC79-417B-945C-61474D083FEC-75542-00013F1D7C48EA27",
				"nick": "Wally",
				"description": "I wish Apple would hurry up",
				"time": "2:13 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5C2648E6-83A7-4445-B6FF-CE582483B51D-75542-00013F1DF8B06FAA",
				"nick": "Wally",
				"description": ":P",
				"time": "2:13 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9B76D1F1-08C8-4376-854D-5A4E852B07AB-75542-00013F1E24CD449A",
				"nick": "artgoeshere",
				"description": "",
				"time": "2:13 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jgillman@pony.feralhosting.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7BC4C9AA-B4EC-4CB4-AEE9-4DCF7654F88D-75542-00013F22A86768F0",
				"nick": "Branes",
				"description": "sooner they get rid of that intel rubbish, the better",
				"time": "2:13 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD61B1B63-CE40-4D1B-A6ED-22D28054E8E2-75542-00013F230FA1904D",
				"nick": "Wally",
				"description": "then ALL the Macs will be air sized and the air will be obliverated",
				"time": "2:13 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB622C8DF-D4A5-48ED-BDC1-345E6F42A41C-75542-00013F23234DCEC3",
				"nick": "newbold",
				"description": "I have a perfectly good white MacBook, but man I want an air so badly it's almost paralyzing",
				"time": "2:13 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDEF11A9D-A529-43DD-83FC-98E2CE117BF6-75542-00013F2588E96AEB",
				"nick": "Wally",
				"description": "I knew I'd attract your attention branes :P",
				"time": "2:13 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L87517D92-6B48-4EE3-9A45-35C10A97F873-75542-00013F27496801C3",
				"nick": "Wally",
				"description": "newbold you don't need one though?",
				"time": "2:13 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFB24FA0C-807F-4810-BDB7-45F75ABB00C9-75542-00013F29BC1A0C89",
				"nick": "chocobanana",
				"description": "well, Apple is about to launch the groom of iOS… they will soon marry and bring… \"the fourth big shift in Apple\" -&gt; the move to ARM!!!",
				"time": "2:14 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L702AD1A2-763F-4A26-9900-7A4EC5A8E1D1-75542-00013F2A3B98EFD8",
				"nick": "newbold",
				"description": "Wally: no, certainly don't need it",
				"time": "2:14 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8E9C3F96-70E5-4A46-B8F7-4430F35EDDC9-75542-00013F2AC98075D5",
				"nick": "Branes",
				"description": "timing, wal. just happened to be glancing past.",
				"time": "2:14 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8339E06F-C17A-4CF4-8D40-B3D6F4396742-75542-00013F2DF0C9A8B6",
				"nick": "chocobanana",
				"description": "in Macs at least",
				"time": "2:14 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA34CCD3E-1957-4655-8A8F-9EC6FCBA968B-75542-00013F2E44677C7A",
				"nick": "newbold",
				"description": "Wally: I could try to convince myself by saying that it'd be better for traveling",
				"time": "2:14 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L05C11CD3-86D2-4F81-9FCB-B2C0425C42A2-75542-00013F2FB3315BA0",
				"nick": "Branes",
				"description": "chocobanana: More true than you realise.",
				"time": "2:14 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9630035C-FCBC-4205-9B97-5B71D183904A-75542-00013F312D221E5C",
				"nick": "Wally",
				"description": "newbold do you travel much?",
				"time": "2:14 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFA912832-1535-43E3-A4F3-E0AFD054650D-75542-00013F32AD0FC0D5",
				"nick": "newbold",
				"description": "Wally: a few times a year",
				"time": "2:14 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF1627A24-A95E-4B6D-B03B-955DD4D99A6D-75542-00013F33682619B3",
				"nick": "newbold",
				"description": "so, no, not too much",
				"time": "2:14 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L866E2733-7FAE-4C7B-A61B-7A24B3CF2F70-75542-00013F3459F8AD63",
				"nick": "Wally",
				"description": "I travel 4 hours a day to work and back.. and i'm quite content with my 13\" MBP",
				"time": "2:14 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LE7010B4C-E814-4E6C-9386-F3F0752AE93D-75542-00013F3511E03CD1",
				"nick": "Berzerker",
				"description": "Quit: Textual IRC Client: http://www.textualapp.com/",
				"time": "2:14 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3825915C-F2A1-49D2-973F-006FEEDF2130-75542-00013F35C9ADB33A",
				"nick": "Wally",
				"description": "Well thats not enough!",
				"time": "2:14 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L42422040-523F-4BEF-8C7D-776D49AE4440-75542-00013F36C942239D",
				"nick": "newbold",
				"description": "yeah I know :P",
				"time": "2:14 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3B6618EF-A2B7-485B-86C4-E15AB77CF183-75542-00013F3A83C98B86",
				"nick": "Wally",
				"description": "Via Plane?",
				"time": "2:15 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF74BC018-DEF6-44B1-B4D7-BF0650066A73-75542-00013F3A856805C3",
				"nick": "newbold",
				"description": "there's something appealing about the size and the SSD",
				"time": "2:15 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC1D40264-9B75-4BB8-8644-29C10B4A8B7A-75542-00013F3B27DC2B73",
				"nick": "newbold",
				"description": "yeah",
				"time": "2:15 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L63141846-E5B0-4B51-81B5-A5753C46CA64-75542-00013F3CDC62760D",
				"nick": "newbold",
				"description": "I have to fly to boston in a week",
				"time": "2:15 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEA79B8BF-5FB9-4B10-BE15-935EC0B5BA75-75542-00013F3FEEFE7ABB",
				"nick": "Wally",
				"description": " Yes Yes I know the 11\" is cute and all",
				"time": "2:15 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0807C58F-38F8-4757-8B6B-E623885DEE68-75542-00013F41963E9FF4",
				"nick": "Wally",
				"description": "wouldn't you be more content with an iPad though?",
				"time": "2:15 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L394D9157-E2AE-428B-98FB-9BC7330BB1F3-75542-00013F42997C2F74",
				"nick": "chocobanana",
				"description": "Branes: I do realize pretty well, not just joking. As soon as someone starts saying that ARM is not only outperforming in battery life but also in raw power, give it 1/2-1 year and Apple pulls the trigger",
				"time": "2:15 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEBF5518A-E603-4C6E-8E0F-2C5B1145E5F7-75542-00013F429E27D1FD",
				"nick": "newbold",
				"description": "it's adorable",
				"time": "2:15 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L5C1513B8-E7A5-47B7-98BE-CCB3DF2F8DA4-75542-00013F43A15D847F",
				"nick": "Berzerker",
				"description": "",
				"time": "2:15 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L57A6D90F-3510-4581-9773-618A9223941B-75542-00013F44E58694B1",
				"nick": "Wally",
				"description": "I want an iPad.. but i'm not buying one because I dont see it fits into my lifestyle so much ATM",
				"time": "2:15 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC2372652-6745-4555-A327-8A78DA7ABBFF-75542-00013F484900A05E",
				"nick": "newbold",
				"description": "Wally: I have an original iPad, which I love",
				"time": "2:16 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L2855AF2C-84E0-4177-94D9-7AB35BAE2003-75542-00013F4878602F5E",
				"nick": "ratskrad",
				"description": "Remote host closed the connection",
				"time": "2:16 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Adium@S0106002436a1d345.vs.shawcable.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAA9BA53B-E110-4C71-9281-5A2A04660622-75542-00013F496ACC6543",
				"nick": "Wally",
				"description": "24 hour battery life on MacBook Pros",
				"time": "2:16 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4AC583F9-6448-4521-9213-67CA3E6F5386-75542-00013F49C5A28BF5",
				"nick": "newbold",
				"description": "but it's not ideal for coding :P",
				"time": "2:16 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9F406861-2DFF-46CA-A65B-196749BA3DEE-75542-00013F4C1DBD00DB",
				"nick": "Wally",
				"description": "ah you code a bit..",
				"time": "2:16 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L27882789-5096-4854-9A33-1C3090CAEEDD-75542-00013F4D285BC89B",
				"nick": "Berzerker",
				"description": "Client Quit",
				"time": "2:16 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L59795094-E039-48EA-B992-C5029E67D591-75542-00013F4D79FD660D",
				"nick": "Wally",
				"description": "Yes, I have an MacBook Pro 13\" / iPad and OpenPandora + PSP for gaming",
				"time": "2:16 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC1A05BBE-D764-47F7-80D7-61A06EE66455-75542-00013F4F4D919F75",
				"nick": "Wally",
				"description": "PSP is hardly used these days as I hate being locked down",
				"time": "2:16 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LED848474-BBE1-4335-9DF7-ED2A5B996003-75542-00013F5129A7AE7C",
				"nick": "Branes",
				"description": "chocobanana: It already does, and 64-bit ARMs are seeding ... and Apple have been working on their own for the last year and a bit (ahead of the curve, as usual). Expect an announcement at WWDC in June.",
				"time": "2:16 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9852D66C-CF33-4736-896F-8D90F1F4B49E-75542-00013F5273FA1894",
				"nick": "Wally",
				"description": "I said iPad didn't I lol I mean't iPhone 4",
				"time": "2:16 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L03083862-2023-4972-82CE-2639A3D17A7F-75542-00013F59C4B9EC03",
				"nick": "chocobanana",
				"description": "Branes: I read some article that one of the reasons why Apple was, at some point, forcing devs to use Apple tools was to make sure that 3rd party apps are easy to port (proof is now you have the Mac App Store with a lot of original iOS stuff)",
				"time": "2:17 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5DEE1617-A994-4FE3-B85D-1AE366BE6AD1-75542-00013F59D1313BEF",
				"nick": "Wally",
				"description": "I hope apple kills the superdrive too",
				"time": "2:17 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L78DF966B-C23A-4A47-8DEA-42D731AA019E-75542-00013F62AB7B3B31",
				"nick": "Branes",
				"description": "10.7 is the last OSX, choco.",
				"time": "2:18 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA8868830-C27B-4B62-B094-A3A6EB3F7F2A-75542-00013F65AFDB9908",
				"nick": "Wally",
				"description": "I wonder whats the next big step for Apple",
				"time": "2:18 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L10AB1A1F-EF68-4736-8BBF-4F9EECBFA7E4-75542-00013F66883B03D6",
				"nick": "chocobanana",
				"description": "Branes: that will be interesting",
				"time": "2:18 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LECB57758-3B9E-4049-A8DC-E4709E28F79E-75542-00013F67F969A64A",
				"nick": "Berzerker",
				"description": "",
				"time": "2:18 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Berz@unaffiliated/berzerker",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF3FAD223-60EE-408D-9852-18F8A2A825CE-75542-00013F69A6A32F19",
				"nick": "Branes",
				"description": "Then everything will be iOS.",
				"time": "2:18 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L40165E97-2D0D-41D4-85FE-29673FE692EE-75542-00013F6C1B754732",
				"nick": "thespider",
				"description": "",
				"time": "2:18 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rustymyer@c-98-235-170-33.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE30DDE22-FFD3-4FD0-BD47-7436A2C41C43-75542-00013F6D789912C1",
				"nick": "Branes",
				"description": "Three types, iOS Desktop, iOS Portable, and iOS Embedded.",
				"time": "2:18 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5886E8DC-8FC1-40FA-B925-00BAE33E87D1-75542-00013F6E24030D3D",
				"nick": "chocobanana",
				"description": "Branes: can very well be true.",
				"time": "2:18 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBDEE03F6-0BBE-440B-A497-818A7DFB8238-75542-00013F6F5EE28732",
				"nick": "Wally",
				"description": "Sounds about right",
				"time": "2:19 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7B3F9E5D-9C3D-4402-B59A-AC787AF470CF-75542-00013F72448AB992",
				"nick": "DagoRed",
				"description": "Quit: FOOD and other preparatory stuff for my interview.",
				"time": "2:19 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~dago@64-121-236-126.c3-0.eas-ubr3.atw-eas.pa.cable.rcn.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L78F41726-44DD-47CD-B587-BBFBA0856909-75542-00013F7450727547",
				"nick": "chocobanana",
				"description": "seamless transition of your work/entertainment/you_name_it between devices",
				"time": "2:19 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1045B945-43AF-4B27-8A4C-3634AD30CED4-75542-00013F79902AA9DF",
				"nick": "Wally",
				"description": "Aren't intel working with ARM?",
				"time": "2:19 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L13FB2FD2-4A2A-4966-B097-F677CF375EC5-75542-00013F7B3964359F",
				"nick": "chocobanana",
				"description": "with the help of that shiny new massive datacenter it is building too",
				"time": "2:19 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L679003C9-F492-4B93-8A8C-389AC191FD5E-75542-00013F7C96EE937A",
				"nick": "jkyle",
				"description": "that's a bunch of nonsense lol. If such inanity happened, I'd be forced to move back to linux &gt;.&lt;",
				"time": "2:19 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@cpe-76-90-1-71.socal.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD74AFACD-EDE1-4E50-865C-7D218F5CD06C-75542-00013F84BEBC6C30",
				"nick": "jkyle",
				"description": "and dual boot windows to fill in the gaps....the horror",
				"time": "2:20 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@cpe-76-90-1-71.socal.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L17B5423B-9ACF-4A6A-9922-DE4E9380F28C-75542-00013F86771D6939",
				"nick": "ivanoats",
				"description": "",
				"time": "2:20 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ivanoats@pdpc/supporter/active/ivanoats",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5A2BE2C3-5675-46D3-BF73-3BA6621A36E3-75542-00013F86E3F10274",
				"nick": "chocobanana",
				"description": "lol",
				"time": "2:20 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBAE38BCB-72EA-4A0E-A296-D0C4EED0A295-75542-00013F884CD3C6F2",
				"nick": "Branes",
				"description": "It's not nonsense, kyle. You'll still be able to do in iOS Desktop what you can in Mac OS X today.",
				"time": "2:20 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "L42FFC1B7-70F0-4198-A87D-B8E63E0D45C9-75542-00013F88693CD0E4",
				"nick": "jkyle",
				"description": "",
				"time": "2:20 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@cpe-76-90-1-71.socal.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L38D065D7-9F6A-45F0-94ED-C614377A0388-75542-00013F895FF8C623",
				"nick": "jkyle",
				"description": "",
				"time": "2:20 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@cpe-76-90-1-71.socal.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L46592E91-4DC0-4D0C-BFE0-9CC0FCE44B11-75542-00013F8C9E673E60",
				"nick": "Branes",
				"description": "Oh, no dualboot. That'll be eliminated with the ARM based machines.",
				"time": "2:21 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L97BC752E-DC81-4F40-BA39-3FFCAAE91A05-75542-00013F8F72DD4582",
				"nick": "Wally",
				"description": "Wouldn't it be called iOS Mac?",
				"time": "2:21 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2780632E-5621-41F1-BA72-F32DC12D166E-75542-00013F8FA592DBA9",
				"nick": "chocobanana",
				"description": "let's see. I wonder how annoying/much time it will take to get over things like reverse scrolling...",
				"time": "2:21 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L51641212-4D33-415F-88D2-6071EB17C597-75542-00013F914B6B84EB",
				"nick": "KomiaPoika",
				"description": "Read error: Operation timed out",
				"time": "2:21 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~prkl@91.86.27.118",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7E88ACD9-CC36-46BB-AC37-511970DBC37B-75542-00013F9153CB7B76",
				"nick": "jkyle",
				"description": "so iOS will be unix based, have a terminal, etc",
				"time": "2:21 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@cpe-76-90-1-71.socal.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L57CBE401-70EF-4F7C-A5E6-299DADFF1F96-75542-00013F918D07F4E9",
				"nick": "Wally",
				"description": "Reverse Scrolling is a PITA",
				"time": "2:21 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L671A6E4C-1C78-4B69-BBE6-E0B91185018A-75542-00013F93006835AB",
				"nick": "chocobanana",
				"description": "iOS_Book",
				"time": "2:21 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB48CF0FB-BFFB-41FE-A50E-6B204ED5E630-75542-00013F931CFD36C4",
				"nick": "ritsuka",
				"description": "Quit: ritsuka",
				"time": "2:21 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Ritsuka@95.234.245.163",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L19E24459-636A-43A1-91A4-36DF5700BE8F-75542-00013F93B8BBB666",
				"nick": "tgunr",
				"description": "",
				"time": "2:21 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L6B167213-4311-4F96-9BAE-69017A85FB0D-75542-00013F93F0D0F3BE",
				"nick": "Nitax",
				"description": "Quit: Nitax",
				"time": "2:21 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Nitax@nc6521221.cns.vt.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L63BA5539-CF52-4B21-83FB-7DE54E1166CF-75542-00013F947A8FD4AE",
				"nick": "chocobanana",
				"description": "iOS_Pro",
				"time": "2:21 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9FEB6F9A-DD63-4AC1-B5CA-9799112112ED-75542-00013F94BC53F468",
				"nick": "Wally",
				"description": "It'd be pointless killing off the Mac part",
				"time": "2:21 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L32D6B179-E142-454C-9225-0DD8B83E7B4C-75542-00013F94E4A54CED",
				"nick": "KomiaPoika",
				"description": "",
				"time": "2:21 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~prkl@91.86.27.118",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L04F6F114-EDCF-4E19-A258-58DE5D499BBE-75542-00013F95854413B4",
				"nick": "newbold",
				"description": "this credit card is burning a hole in my pocket",
				"time": "2:21 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L84D7F63A-449D-4EAB-9AE3-F02BAAA7F3B2-75542-00013F96CCB1CABF",
				"nick": "Wally",
				"description": "or Mac OS",
				"time": "2:21 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCA964CD2-8F58-47C3-8ED8-66DF5D2119A9-75542-00013F986A8D01FB",
				"nick": "chocobanana",
				"description": "i_iOS haha",
				"time": "2:21 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L23D6F338-C6B0-4CD3-B122-38B0C8807B19-75542-00013F9B68E5A34C",
				"nick": "Wally",
				"description": "Eye OS",
				"time": "2:22 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "L718F4324-5EA8-4183-85C1-1D74086D1982-75542-00013FA25C858583",
				"nick": "fluitfries",
				"description": "\"Leaving...\"",
				"time": "2:22 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~fluitfrie@c-24-34-135-16.hsd1.vt.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L30FB4FE6-1F5C-4A8A-9E3F-C643F83ECFB0-75542-00013FA350276C19",
				"nick": "rustymyers",
				"description": "Ping timeout: 252 seconds",
				"time": "2:22 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~rustymyer@c-98-235-170-33.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "LBD6B9942-32AF-4A9F-9500-A23C9122E2E5-75542-00013FA356E3CFEE",
				"nick": "thespider",
				"description": "rustymyers",
				"time": "2:22 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~rustymyer@c-98-235-170-33.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6DFF2028-D61A-444E-ADDA-817D2F197AA2-75542-00013FA35FBAECD0",
				"nick": "jkyle",
				"description": "doesn't seem like it makes any sense, why go ARM when they just flipped intel? not to mention ARM isn't necessarily the best desktop/laptop processor",
				"time": "2:22 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@cpe-76-90-1-71.socal.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1508C9DD-09FE-487E-B4B1-A2C9C3F7FDA5-75542-00013FA5F44B5092",
				"nick": "chocobanana",
				"description": "Wally: it will be a smooth transition, I'm sure they'll work their magic and make it painless for you",
				"time": "2:22 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L349653A2-E7FA-430E-B3FE-D0AB6A7BDC41-75542-00013FA8D0FE66F1",
				"nick": "Segnale007",
				"description": "Remote host closed the connection",
				"time": "2:23 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Segnale00@ppp-212-139.98-62.inwind.it",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L772E497F-9836-4C7F-925C-1A93138EAE35-75542-00013FA94F019FD1",
				"nick": "Wally",
				"description": "chocobanana I agree.",
				"time": "2:23 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB3CF3E55-801A-4DDE-A36A-7478E40D7741-75542-00013FAC6F70972A",
				"nick": "Wally",
				"description": "they'll even take advantage of emulating x86 Mac apps to start with",
				"time": "2:23 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9A7FA357-03FE-469B-8227-ABB2CD0CE708-75542-00013FAD83CF5927",
				"nick": "jkyle",
				"description": "I don't see the benefit for apple or for users",
				"time": "2:23 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@cpe-76-90-1-71.socal.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8AC36E65-FD80-47A8-A92F-4ED258EDCB9E-75542-00013FB0A47D87FD",
				"nick": "chocobanana",
				"description": "jkyle: 6 years already passed, no? How long did PPC last?",
				"time": "2:23 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9B011571-9F43-4B04-85D9-FC234F0FB071-75542-00013FB1E4B24CAE",
				"nick": "Wally",
				"description": "Was gunna say",
				"time": "2:23 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L73337899-E5D4-44F1-9816-53C3E716D749-75542-00013FB40001DF88",
				"nick": "Wally",
				"description": "68k didn't last long",
				"time": "2:23 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L4462C7D7-E59C-4B3B-A8DA-8ED721C9CECB-75542-00013FB4AD0EB1B6",
				"nick": "khiroc",
				"description": "Remote host closed the connection",
				"time": "2:23 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~khiroc@i220-108-21-36.s02.a001.ap.plala.or.jp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L34C86297-CE09-4F3A-BC83-F3D7A4493A72-75542-00013FB7830A1086",
				"nick": "Wally",
				"description": "Apple always knows what the best for their users is",
				"time": "2:24 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC2C50EE4-8203-427C-A6A6-EC5A47ACA81B-75542-00013FBC769858BB",
				"nick": "chocobanana",
				"description": "damn, I get the feeling that being in the XXI century makes a lot of time pass faster (signs of aging...)",
				"time": "2:24 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA4C9992C-F40E-4114-BE42-D79490FF7DD4-75542-00013FBEC23A99E6",
				"nick": "Wally",
				"description": "The price of SSD drives isn't dropping fast enough!",
				"time": "2:24 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L724CBDF1-89EC-4C07-88DD-F65646DDCFFA-75542-00013FC4128D5A71",
				"nick": "jkyle",
				"description": "Changing host",
				"time": "2:25 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~krunk-@cpe-76-90-1-71.socal.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L810A0CAD-50AE-4E97-8F55-FBFE89AA1732-75542-00013FC414AA6C57",
				"nick": "jkyle",
				"description": "",
				"time": "2:25 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgModeChange",
				"id": "L21AC91A4-856A-4BCC-BA59-0F8ACEC57752-75542-00013FC41535A1E7",
				"nick": "ChanServ",
				"description": "+o jkyle",
				"time": "2:25 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "ChanServ@services.",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2AFA612C-613F-4B69-83F3-E4CE04471A7A-75542-00013FC6C5330B2C",
				"nick": "chocobanana",
				"description": "Wally: unfortunately, that's why my HDD upgrade was still a mechanical 7200rpm :(",
				"time": "2:25 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC89B0930-E4C6-4878-8C9E-95CCBBA625C7-75542-00013FC93D2E99B9",
				"nick": "Branes",
				"description": "jkyle, if what my worm inside the big Apple tells me holds true, then the multicore ARMs he's been working with can out-compute a Xeon on one-tenth the power consumption, if that.",
				"time": "2:25 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC364C5AB-8419-47DE-A4FF-A8346DBDAB4E-75542-00013FCC6F55A2FD",
				"nick": "MrUnagi",
				"description": "Quit: Colloquy for iPad - http://colloquy.mobi",
				"time": "2:25 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~mrunagi@184-211-14-187.pools.spcsdns.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0F631F36-EF3D-4E87-A6C7-AB195FAF9B8A-75542-00013FD0AA68ED13",
				"nick": "chocobanana",
				"description": "I was hoping to have a 13\" uber MacBook with 512Gb SSD and quad-core processor this year...",
				"time": "2:25 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF8CE55B6-3AC1-439E-AFD4-344A5714CB4B-75542-00013FD2B15275BA",
				"nick": "Wally",
				"description": "chocobanana yeah.. same",
				"time": "2:26 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDFB3436F-D249-4A4F-A180-27278AA5E461-75542-00013FD628689909",
				"nick": "Wally",
				"description": "When 512GB gets to $200 - $300 AUD then i'll think about it",
				"time": "2:26 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L44156163-05A4-4B2C-8C14-23A1134CFC2C-75542-00013FD79C9E418E",
				"nick": "Wally",
				"description": "but $1k.. forget it xD",
				"time": "2:26 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L25B68111-46E6-4D66-AB58-CE6DAE147547-75542-00013FDA47054DB2",
				"nick": "chocobanana",
				"description": "plain silly indeed",
				"time": "2:26 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L219406A3-6677-4791-80B8-222172E904A7-75542-00013FDB7FE24A70",
				"nick": "jkyle",
				"description": "I could see them toying with ARM on laptops for power reasons, but I don't see the reason to use iOS. iOS is completely centered around touchscreen silliness",
				"time": "2:26 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2111508D-F519-4701-9747-4F0FD273BB55-75542-00013FDC1EA896F5",
				"nick": "chocobanana",
				"description": "but the speed...",
				"time": "2:26 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1118F248-3112-4FB8-B4B4-D0A4975E6F88-75542-00013FDCF1C2BADB",
				"nick": "Wally",
				"description": "yeah",
				"time": "2:26 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDEC7E5D3-BA44-4052-9F05-AA0B4ECC325F-75542-00013FDE85211B9C",
				"nick": "Branes",
				"description": "jkyle: It's worth remembering that the *only* thing Apple cares about is their OS, and that they have a thirty-plus year history of changing hardware to suit their software. Remember, \"think different\" isn't just a marketing slogan, it signifies the entire company's arse-about way of doing things.",
				"time": "2:26 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L320E4625-12D7-44F9-A8EF-05818EB1C833-75542-00013FE1140A5EA4",
				"nick": "Wally",
				"description": "jkyle: it'll only be the name thats changing sheeze",
				"time": "2:27 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6F925E55-817B-4BEA-A913-8F2FEFF83634-75542-00013FE15F5D063B",
				"nick": "chocobanana",
				"description": "ARM is just outing designs targeting servers...",
				"time": "2:27 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L592EF50E-BEDC-4727-B7AD-69976CC2E57A-75542-00013FEB5C012230",
				"nick": "chocobanana",
				"description": "Branes: and they're pretty good at convincing customers about that too",
				"time": "2:27 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L27C2550B-A59F-41F4-9CA2-BEFE495CAEF0-75542-00013FEDEB8719EA",
				"nick": "joako_",
				"description": "Talking about that my Finder just crashed :(",
				"time": "2:28 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~joako@opensuse/member/joak0",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBB86EA3C-AFCD-42A7-A1C5-426DDC1A2153-75542-00013FF427AF9F36",
				"nick": "Branes",
				"description": "And there's a *lot* more to iOS than touch-screen silliness, it's a whole new set of frameworks, and a whole new way of doing things.",
				"time": "2:28 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L96EDBD31-40F1-4E45-9FDD-BA3704E2D297-75542-00013FFC037D53FA",
				"nick": "chocobanana",
				"description": "iOS will mark the revival of… the iBook!",
				"time": "2:29 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1B6B43D8-72A3-4F60-B102-4BA647F7C3A3-75542-000140042E9CCC40",
				"nick": "Branes",
				"description": "And as I've no doubt told you before, there's still a good two years' worth of hard work revamping the OSX frameworks to the iOS spec so it can become iOS Desktop.",
				"time": "2:29 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA45D8F1B-E3D5-495C-9DED-C0E7DCB7B048-75542-00014006492C23DB",
				"nick": "Wally",
				"description": "The internet is our server :P",
				"time": "2:29 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB147B67D-8440-4211-BB4E-AAD1C369A9A5-75542-000140064ABFD484",
				"nick": "Wally",
				"description": "LETS ALL GET IN A CLOUD AND DANCE",
				"time": "2:29 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L96BDF40A-9792-4EFC-B410-A9BB26F77E17-75542-000140064CE20569",
				"nick": "vlcn",
				"description": "Ping timeout: 276 seconds",
				"time": "2:29 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~vlcn@c-71-207-114-23.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC726B9B4-6A54-4BC7-AA7E-276386CE597D-75542-0001400B4051F35C",
				"nick": "Wally",
				"description": "I must renew MobileMe today",
				"time": "2:30 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L2E62475E-628F-4273-B748-717E70BBF4CB-75542-0001400B9F90D773",
				"nick": "vlcn",
				"description": "",
				"time": "2:30 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~vlcn@c-71-207-114-23.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3B00608C-E0AB-4EDD-B5BD-68143A6B5858-75542-0001400EB0A05F55",
				"nick": "Branes",
				"description": "That's why Lion will be the last, it's a transition OS.",
				"time": "2:30 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8101C29F-CBD8-48EF-BE04-017F904D45E6-75542-00014012BE176671",
				"nick": "chocobanana",
				"description": "Branes: yeah, and the ARM transition won't be a problem except perhaps for… Adobe?",
				"time": "2:30 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA3548CBD-8BB8-41D7-A690-BA64FDCE86F5-75542-0001401A5EEAA99E",
				"nick": "Branes",
				"description": "Pff, anything that doesn't use DLLs is a problem for Adobe.",
				"time": "2:31 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rinpoche@60-240-61-130.tpgi.com.au",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3DEDF86B-F516-4FC5-97B8-A6492C332C03-75542-0001401B0915CC0D",
				"nick": "Wally",
				"description": "Read error: Connection reset by peer",
				"time": "2:31 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L457B71AE-8BA2-4605-A967-58308ECC3608-75542-0001401BACE25677",
				"nick": "chocobanana",
				"description": "lol",
				"time": "2:31 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAB171713-A35F-4BBC-87A7-C1D073005DFE-75542-0001401DFC66736D",
				"nick": "jkyle",
				"description": "chocobanana: or all major software really. I bet adobe would literally just drop down on the floor and throw a temper tantrum. They _just_ got 64 bit cocoa native",
				"time": "2:31 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L36F89527-E863-4D7F-82AC-BFF43B449E21-75542-0001401FEB3007F5",
				"nick": "vulc4n",
				"description": "Ping timeout: 276 seconds",
				"time": "2:31 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~vlcn@64.9.157.157",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4D23931E-DCC3-4615-A6C1-A34A9D7DB650-75542-00014026B3FD6FA9",
				"nick": "chocobanana",
				"description": "jkyle: is that will apps were was it only with Photoshop and the video apps?",
				"time": "2:32 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6DE1491B-6840-4287-881C-6E09A1DC3922-75542-000140275CCE5F9A",
				"nick": "jkyle",
				"description": "If I recall, apple purchases make or break adobe",
				"time": "2:32 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L428FDB9B-A30C-4237-9881-F55947222304-75542-0001402901F8913C",
				"nick": "drudge",
				"description": "Ping timeout: 276 seconds",
				"time": "2:32 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~drudge@beyond.conceited.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD8E7A634-2325-460A-B662-23AE34C8AAF3-75542-0001402A57603AC0",
				"nick": "chocobanana",
				"description": "*were = or",
				"time": "2:32 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB8B2F7BA-CD7B-4A1E-8324-70821DC91014-75542-00014034DF607222",
				"nick": "chocobanana",
				"description": "half of the Creative Suite users have it on a Mac",
				"time": "2:33 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD43B601D-4BC9-4A82-B611-65418C29D935-75542-000140420CC52A9C",
				"nick": "chocobanana",
				"description": "seems to me that they took long to make (a few of?) their apps Cocoa",
				"time": "2:34 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L4DFCE990-A781-4F6A-A967-013A5D706785-75542-00014043008CF565",
				"nick": "drudge",
				"description": "",
				"time": "2:34 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~drudge@beyond.conceited.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3E4249E7-2286-4ED6-8064-B82A3925A26F-75542-000140450890AB88",
				"nick": "jkyle",
				"description": "it's the only reason apple can get away with things like no flash on the iphone without suffering anymore consequences than a couple of adobe blog rants",
				"time": "2:34 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LE99EF52B-C915-4472-91F1-99F0B3B765CD-75542-00014047EBBE9F33",
				"nick": "STjurny",
				"description": "",
				"time": "2:34 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~STjurny@ip4-95-82-151-138.cust.nbox.cz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD2B0072B-A171-41B9-864F-0F711D520A1B-75542-0001404A6A02699E",
				"nick": "jkyle",
				"description": "they took a while, but adobe is a massive code base",
				"time": "2:34 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8426F55A-35BD-4618-88AE-3CC24319B765-75542-0001404E5130488D",
				"nick": "Chillance",
				"description": "",
				"time": "2:34 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L71A5ECD8-73F5-4255-8C80-CFF6AB35E39D-75542-00014053271EBE60",
				"nick": "TheNavyBear",
				"description": "WOW! Stellarium 0.10.6 (with all star files loaded) takes about 3 mins to startup on an iBook G4 (1.2 Ghz, 1.25 GB RAM)",
				"time": "2:35 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Slave@unaffiliated/thenavybear",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6424C35A-7A6B-4ACC-B125-87DD965DDFE6-75542-0001405371DF1F63",
				"nick": "Chillance",
				"description": "ok, so what utility in MacOSX can I use to examine a standard HID gamepad controller?",
				"time": "2:35 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5D1B8381-B75A-4E9E-AEE7-4CCC6A8BDDBE-75542-000140598BDF2205",
				"nick": "jkyle",
				"description": "define examine?",
				"time": "2:35 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L297F0967-A566-4064-B6F3-C391DE35F26E-75542-0001405C0D2D242B",
				"nick": "TheNavyBear",
				"description": "system profiler",
				"time": "2:35 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Slave@unaffiliated/thenavybear",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCD76761A-5C76-4FF5-9290-A53F189377A8-75542-0001405E61A7CC2A",
				"nick": "Chillance",
				"description": "button press, analog axis",
				"time": "2:36 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB8DC7D95-131C-4DA8-867B-8B02C33A75F6-75542-00014065138C0DEF",
				"nick": "jkyle",
				"description": "Chillance: if it doesn't have a driver, you'd need to write one ",
				"time": "2:36 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4CDF9C86-5C16-4A46-B968-9E3CEAF5584C-75542-00014067A35DD5F5",
				"nick": "chocobanana",
				"description": "Chillance: a game?",
				"time": "2:36 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9061FCEB-126F-4D95-8151-9372BB52EAE2-75542-000140685D49494F",
				"nick": "jkyle",
				"description": "Chillance: there's the usb probe for instrospection into the connected devices",
				"time": "2:36 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6702588B-C002-45DB-8471-C6D76FA8CBAF-75542-000140780995538B",
				"nick": "chocobanana",
				"description": "shouldn't a standard HID peripheral just work?",
				"time": "2:37 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L797816E9-12E3-4C83-8CB7-3509E05A0EA5-75542-0001407BD69E42FA",
				"nick": "jkyle",
				"description": "most of these joysticks present themselves like a standard key board that generates standard keyboard events. In which case, dtrace or an key event monitor would work fine",
				"time": "2:38 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L18FF54B3-A0FF-4AFF-961F-FA914C2026A7-75542-0001407D18891F5F",
				"nick": "chocobanana",
				"description": "though I don't know how generic game controllers can be",
				"time": "2:38 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L172E354D-76CC-438D-AEAC-EEEB0A283D5E-75542-000140814B7A7A33",
				"nick": "chocobanana",
				"description": "jkyle: but there's an analog input there...",
				"time": "2:38 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBF94D0B9-4F8F-4F28-AE42-F0FE0B056F9F-75542-00014084F59C37D9",
				"nick": "Chillance",
				"description": "in windows there is a nice viewer for standard USB devices",
				"time": "2:38 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1CBA41E1-4FC2-44A6-8AD1-3D9F24546494-75542-000140897FB44F80",
				"nick": "Chillance",
				"description": "and in Ubuntu I can use jtest",
				"time": "2:39 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L392B82C0-D647-46C9-B02F-91B01754E0CC-75542-0001408A196F7C0D",
				"nick": "FUJIoNO",
				"description": "",
				"time": "2:39 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~FUJIoNO@14-42-215.ftth.xms.internl.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L74010DE4-0C98-43EC-89D1-A4495E950640-75542-0001408A255B1A73",
				"nick": "FUJIoNO",
				"description": "# Appears as MIKE",
				"time": "2:39 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~FUJIoNO@14-42-215.ftth.xms.internl.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE071235D-21EC-4179-BFA1-1384DDC09FB0-75542-0001408A458C4078",
				"nick": "FUJIoNO",
				"description": "(#G110E910M1) &lt;Chr&gt;",
				"time": "2:39 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~FUJIoNO@14-42-215.ftth.xms.internl.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L31B4EC7D-8FD9-4090-9822-01072867CF37-75542-0001408D32809DA8",
				"nick": "chocobanana",
				"description": "Chillance: http://www.macupdate.com/app/mac/16231/joystick-and-gamepad-tester/",
				"time": "2:39 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4C195372-74F1-4AFD-8118-B687535DB417-75542-0001408D7F31FFFE",
				"nick": "chocobanana",
				"description": "lol",
				"time": "2:39 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L4C14C4F0-3B8A-40C7-B1B1-771122FCFB30-75542-0001408D9B7806E9",
				"nick": "mmw",
				"description": "Quit: Bye!",
				"time": "2:39 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~mmw@91.179.35.45",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA0D14868-4032-43E1-A58F-B7F04A5C73FC-75542-0001408E8CE5C446",
				"nick": "jkyle",
				"description": "Chillance: plese see USB Prober and see if that suits your needs",
				"time": "2:39 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8804E58E-D6BE-49D7-8A41-ACD469219482-75542-0001409764E3075C",
				"nick": "geezer",
				"description": "",
				"time": "2:40 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~geezer@a181-114.24online.fi",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L72C678AC-2208-4E90-BC93-AEE9992A6AC5-75542-0001409FD482846D",
				"nick": "Chillance",
				"description": "chocobanana, wow, not even free",
				"time": "2:40 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3CF8228A-BA64-495A-890B-00FA11408927-75542-000140A26D0F65EA",
				"nick": "jfrisby",
				"description": "Quit: Computer has gone to sleep.",
				"time": "2:41 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~jfrisby@216.55.29.174",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L556591F2-9107-4BAF-8ED5-4ED4E0CB296C-75542-000140A535A9B7C1",
				"nick": "chocobanana",
				"description": "yeah...",
				"time": "2:41 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6E910E53-0B35-4FC3-9C44-6E0E2306C754-75542-000140AE5DDBB877",
				"nick": "cilly",
				"description": "",
				"time": "2:41 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "LD3C22A6E-72F1-49C3-8E34-C68258FD14E2-75542-000140B33C4480E2",
				"nick": "STjurny",
				"description": "",
				"time": "2:42 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~STjurny@ip4-95-82-151-138.cust.nbox.cz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L2CEF412C-8107-4634-A4EB-5F0CB5D09C1D-75542-000140B6229C1CD2",
				"nick": "ivanoats",
				"description": "Quit: ivanoats",
				"time": "2:42 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~ivanoats@pdpc/supporter/active/ivanoats",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LAD529568-514B-412A-99BE-E8E3D8F719E3-75542-000140BBD2945A19",
				"nick": "drubies|mbp",
				"description": "Remote host closed the connection",
				"time": "2:42 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~drubies|m@70-89-224-2-BusName-panjde.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5E891187-3C8B-4540-9D71-FD6C029E72FD-75542-000140CAF7F753BC",
				"nick": "joako_",
				"description": "All I know is if I have to jailbreak my Mac I won't buy any more.",
				"time": "2:43 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~joako@opensuse/member/joak0",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2834A7B7-7583-481D-ACAB-C72D1D323497-75542-000140D062E03D16",
				"nick": "jkyle",
				"description": "joako_: exactly",
				"time": "2:44 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L86AD1121-685E-41EF-9CA5-E246E083742C-75542-000140D8C90829FE",
				"nick": "joako_",
				"description": "I just had to send some photos in an email and copied them off my iPhone using AFP. Why isn't this standard??",
				"time": "2:44 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~joako@opensuse/member/joak0",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LA4605CEC-305B-4335-8C37-5B3737023BBF-75542-000140E48D96E42B",
				"nick": "ivanoats",
				"description": "",
				"time": "2:45 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ivanoats@pdpc/supporter/active/ivanoats",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L16A49F44-E2A8-4D08-A88D-F3E6A25B005E-75542-0001410165EE52D6",
				"nick": "geezer",
				"description": "Quit: Colloquy for iPad - http://colloquy.mobi",
				"time": "2:47 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~geezer@a181-114.24online.fi",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFF0C5B94-C99A-42C1-B79B-10E871E4451E-75542-00014127743C9F90",
				"nick": "necromancer",
				"description": "does ~/Applications function like ~/bin on UNIX systems?",
				"time": "2:50 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tubbo@pool-108-16-121-76.phlapa.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC7746146-CB81-46E7-B608-67D3DB179009-75542-0001412CE01C99A4",
				"nick": "atmosx",
				"description": "yeah kindof",
				"time": "2:50 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~osx@46.12.134.89.dsl.dyn.forthnet.gr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDF6D65DC-C36A-4FDE-A17D-372AA6E7E888-75542-0001412DA00D54B8",
				"nick": "necromancer",
				"description": "(talking about intended use here, not practical use)",
				"time": "2:50 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tubbo@pool-108-16-121-76.phlapa.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4B4A96BD-D48D-4FE2-A629-7F528032C708-75542-0001412FA04206B9",
				"nick": "atmosx",
				"description": "yes then",
				"time": "2:51 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~osx@46.12.134.89.dsl.dyn.forthnet.gr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB8FC5181-16ED-46E1-BCA1-D745812B4500-75542-000141305810433A",
				"nick": "necromancer",
				"description": "okay",
				"time": "2:51 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tubbo@pool-108-16-121-76.phlapa.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L28745767-83FB-4BA6-9C32-7F2417FE31FD-75542-00014132CECBA1B0",
				"nick": "atmosx",
				"description": "that's y you have to /Applictions and $HOME/Applications",
				"time": "2:51 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~osx@46.12.134.89.dsl.dyn.forthnet.gr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L6ECB36FE-B2D2-43F2-AA74-7F007CBAD120-75542-000141509DE5D034",
				"nick": "heliostatic",
				"description": "Remote host closed the connection",
				"time": "2:53 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~heliostat@nat-204-14-239-211-sfo.net.salesforce.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L5E0AF82B-9F97-4B40-83D3-1DAB7FCD9616-75542-0001415E7CD98D50",
				"nick": "NorwayGeek",
				"description": "Quit: Computer has gone to sleep.",
				"time": "2:54 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Alex@15.255.34.95.customer.cdi.no",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L6D10CDCD-EE3B-48A8-B92A-70219D75C160-75542-0001415FB20EE634",
				"nick": "logicall",
				"description": "Quit: Leaving",
				"time": "2:54 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~logical@89.103.167.91",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L059746A9-6F36-4E5D-9585-784C2361FCCE-75542-0001416174B34625",
				"nick": "joako_",
				"description": "Quit: Leaving",
				"time": "2:54 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~joako@opensuse/member/joak0",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L71979251-2C81-43D8-86D3-12997DAE6519-75542-0001416C9B0A75CA",
				"nick": "Chillance",
				"description": "my god.. well, that USB Prober and Joystick and Gamepad tester didn't help at all",
				"time": "2:55 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LF8E71099-8D21-4885-B108-08ECEFE549FC-75542-000141757C4749BA",
				"nick": "Sia-",
				"description": "",
				"time": "2:56 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Sia-@unaffiliated/desian",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LDFB20443-9477-436B-93DB-607BA1B31C6F-75542-00014176CD71E3C1",
				"nick": "heliostatic",
				"description": "",
				"time": "2:56 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~heliostat@204.14.239.221",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L56A9B18A-B8A8-49FE-8D66-DC051D5A9A94-75542-00014189E376EBAB",
				"nick": "joffe",
				"description": "",
				"time": "2:57 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~jelly@c6129BF51.dhcp.bluecom.no",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB5DCE560-3D60-499A-9097-EA2AC1AE4B18-75542-0001418C1EB0B64C",
				"nick": "stirlingsilver",
				"description": "Quit: Computer has gone to sleep",
				"time": "2:57 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~stirlings@67-60-62-39.cpe.cableone.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "LC739D649-FDCC-48DA-84D4-1AFBA7E0F62A-75542-0001418D8F4AA3EA",
				"nick": "FUJIoNO",
				"description": "",
				"time": "2:57 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~FUJIoNO@14-42-215.ftth.xms.internl.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD1384C8A-378A-4733-A39E-F2A61E9A5F21-75542-000141EC2357F1D3",
				"nick": "MarKsaitis",
				"description": "Quit: Leaving",
				"time": "3:04 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~MarKsaiti@cpc7-pool12-2-0-cust219.15-1.cable.virginmedia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD9174F8E-C861-4CA4-9463-B29957ECB2E4-75542-000141ED8B07E2AE",
				"nick": "russkey",
				"description": "",
				"time": "3:04 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Adium@ool-18bb0ebd.dyn.optonline.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD30300E7-7377-44CD-919E-F317BA349583-75542-000141F987830A26",
				"nick": "chocobanana",
				"description": "Chillance: you can always download PureData or MaxMSP and find a patch for testing that, although I can't say this would be the most elegant solution",
				"time": "3:05 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF9630DC9-BE56-4D24-9423-A1DB53646E2F-75542-000141FF42AFA09A",
				"nick": "chocobanana",
				"description": "the 1st is free and open-source, the 2nd had a 30 day trial",
				"time": "3:05 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA41EBE93-0471-4B84-A271-83B9A2125FA2-75542-0001420044C13EF8",
				"nick": "chocobanana",
				"description": "*has",
				"time": "3:06 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L4C4B33F8-B8DC-47E9-AA10-DD7135CA39D8-75542-000142021B06B6C9",
				"nick": "Psy",
				"description": "Quit: [self setHasLeftComputer:YES];",
				"time": "3:06 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Psy@96.45.198.150",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L09EA3657-99C8-4CEA-B551-C6A823ED99BE-75542-0001420C254B26F7",
				"nick": "ivanoats",
				"description": "Quit: ivanoats",
				"time": "3:06 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~ivanoats@pdpc/supporter/active/ivanoats",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7A54E0B0-7164-4E2B-83CB-DEB0C9E1CDE6-75542-000142112CD67652",
				"nick": "jkyle",
				"description": "but I don't think they're saying that. they're just saying they're going to rename the os or something",
				"time": "3:07 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD1568C55-5E24-4FAC-809C-97EB0CB15F40-75542-00014211DD5B615C",
				"nick": "jkyle",
				"description": "oops",
				"time": "3:07 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~krunk-@unaffiliated/krunk-",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF0EB5269-3137-45BF-BF37-E5F47D968359-75542-00014213AE2F080D",
				"nick": "Chillance",
				"description": "ok, will check that out",
				"time": "3:07 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF1B885C7-5D6C-4852-8432-7CC7F7574839-75542-00014218DD603D49",
				"nick": "necromancer",
				"description": "Chillance: pd should be fine for your case. i'm pretty sure you only need maxmsp if you're working with media (audio, video, etc.)",
				"time": "3:07 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tubbo@pool-108-16-121-76.phlapa.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L21C2FEA4-7716-44A1-8A61-08511C8E8131-75542-00014228BB153C95",
				"nick": "chocobanana",
				"description": "it's all a matter of if you find the right patch first for PureData or Max",
				"time": "3:08 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LA8E104E6-9EBD-495D-A7DA-2ADFE498074B-75542-0001422A8C4E789D",
				"nick": "dlyneswork",
				"description": "Quit: Leaving",
				"time": "3:09 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~dlynes@216.185.79.50",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5C1A6AFB-2D4D-497F-98EB-18BA02E35545-75542-0001422D510FF61D",
				"nick": "Chillance",
				"description": "patch?",
				"time": "3:09 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD9E0A349-782E-47BF-8551-D39140B9EC27-75542-00014230AD032EFF",
				"nick": "chocobanana",
				"description": "patch = software app running inside those two programs",
				"time": "3:09 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6FB48221-A8A0-4E82-9CC0-E5154BFB2FB2-75542-000142310BE58CB1",
				"nick": "DarkM",
				"description": "",
				"time": "3:09 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~DarkM@81-64-47-60.rev.numericable.fr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFDE1979D-4EB7-4AD2-B6E5-3EDA74C72BD8-75542-00014233267D23B6",
				"nick": "Chillance",
				"description": "its a standard HID gamepad ",
				"time": "3:09 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE4E47265-CFA1-4064-A141-7871CB1B0733-75542-0001423C44C3BEF2",
				"nick": "chocobanana",
				"description": "it's called patch because these are environments for doing visual programming, you connect function objects with patch cords :D",
				"time": "3:10 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0489000D-0F67-42CC-972C-AD8C8AB663E2-75542-000142405A43B93E",
				"nick": "chocobanana",
				"description": "Chillance: what are you testing the gamepad for, btw?",
				"time": "3:10 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L1301C826-8579-4F8B-B865-1A1EF248ACE1-75542-00014245EBCB25FF",
				"nick": "ec|detached",
				"description": "elliottcable",
				"time": "3:11 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~ec@ec2-174-129-205-205.compute-1.amazonaws.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD3FECD0F-A6CA-46D4-B73A-F7AD433092AA-75542-0001424D95489E15",
				"nick": "Chillance",
				"description": "well",
				"time": "3:11 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L16A7EFE9-8287-43CA-9518-433E956C076E-75542-000142544A8B2DFA",
				"nick": "Chillance",
				"description": "I have made this USB device using and AVR, and just want to see that it sends the commands correctly",
				"time": "3:12 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC4885C79-9A58-4879-97D4-9AE561777EA5-75542-00014255A86D7110",
				"nick": "Chillance",
				"description": "*an AVR",
				"time": "3:12 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L65DCF8DD-CA91-46F0-9102-7E8F192FC62A-75542-0001425BF25F1A6E",
				"nick": "chocobanana",
				"description": "oh cool, Arduino?",
				"time": "3:12 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDC7D88C4-F262-477F-863B-40998575DCB5-75542-0001425D2DB2FBB6",
				"nick": "Chillance",
				"description": "I bet it works, but I have no way of checking it in Mac OS",
				"time": "3:12 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE2980B02-0DDD-4F88-A8FE-4EDEE5ED24DB-75542-000142624AB2FB2C",
				"nick": "Chillance",
				"description": "nope, my own PCB made hehe",
				"time": "3:13 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L277DB7AB-5755-45CB-AEFF-02D3A37C68CA-75542-000142632B158232",
				"nick": "chocobanana",
				"description": "uuuuhhh",
				"time": "3:13 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5BEAC486-3D6C-4433-AEAE-61F9213406C0-75542-0001427242396840",
				"nick": "Chillance",
				"description": "http://treadgaming.blogspot.com/ :) sorry about the cheap plug :)",
				"time": "3:14 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L143977AA-4DEC-469A-A93A-42CDF47AA184-75542-000142732615238D",
				"nick": "chocobanana",
				"description": "hmmm, in that case, you can use PureData and write your own driver inside a patch using a Serial comport object and then forward the inputs's data to some numerical output boxes",
				"time": "3:14 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1A3E76D3-CDF2-4772-A641-9F9B3839B7C6-75542-0001427C9B6E7922",
				"nick": "chocobanana",
				"description": "Chillance: did you design that from scratch or it's based on an existing design?",
				"time": "3:14 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L222BB73C-62EB-49B8-A02E-AD97BBDF655C-75542-0001427DCF30812A",
				"nick": "Chillance",
				"description": "well, as someone mentioned before, its identifying itself as a standard HID device.. so it shouldnt be that complicated.. but maybe it is in MacOS..",
				"time": "3:15 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4FD46E52-E6AA-47ED-B400-A9A6C0CEE2D2-75542-0001428AB0770BED",
				"nick": "Chillance",
				"description": "I followed data sheets ",
				"time": "3:15 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L39078CFF-AEC1-4B59-B641-0F6A7213D115-75542-0001428D7F1BE39D",
				"nick": "kall",
				"description": "Ping timeout: 246 seconds",
				"time": "3:16 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~kall@dslb-178-000-107-180.pools.arcor-ip.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L603FA39B-FE24-4CBF-8731-64A370EEC95D-75542-0001428EDFF9C026",
				"nick": "LeNsTR|off",
				"description": "LeNsTR",
				"time": "3:16 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~lenstr@unaffiliated/lenstr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L52E3F0C3-0409-438A-9468-4FDA0A597CF2-75542-0001428FAF84FF39",
				"nick": "chocobanana",
				"description": "are you gonna sell them?",
				"time": "3:16 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF7AB613E-15B6-4231-89CB-C8CF5C5755E4-75542-00014292967B6394",
				"nick": "Chillance",
				"description": "sure, if enough are interested :)",
				"time": "3:16 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L12BDB61B-F77E-482C-96DB-60BDED905A07-75542-0001429A0B3E389B",
				"nick": "pertl",
				"description": "Quit: sys64738",
				"time": "3:17 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~pertl@p578bb42c.dip0.t-ipconnect.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD8035739-2D10-4F35-A5C4-DD7A24173BA5-75542-0001429ACBA7FC5F",
				"nick": "Chillance",
				"description": "Im currently waiting for my 3D printer, so I can do the enclosure for it",
				"time": "3:17 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L26522AFD-7E65-43C9-9B5F-B0EB1C0B4F0E-75542-0001429BD55C3E28",
				"nick": "Chillance",
				"description": ":)",
				"time": "3:17 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L543D4A73-1A6D-4A38-AE7C-021D621BEDA8-75542-0001429EB2CC9A94",
				"nick": "DainHome",
				"description": "Quit: Dain's default quit message",
				"time": "3:17 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Dain@wikipedia/daindwarf",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L6BC70301-AABF-4F80-A514-8C7DA483E888-75542-000142A06B864F2A",
				"nick": "teclo",
				"description": "Quit: The universe is slowing down and will reach a complete stop.",
				"time": "3:17 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "42@unaffiliated/teclo",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7750C670-967A-455B-95B1-324E12508D83-75542-000142A15EB807B5",
				"nick": "DarkM",
				"description": "Quit: DarkM",
				"time": "3:17 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~DarkM@81-64-47-60.rev.numericable.fr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L20A3A7B8-A410-42DE-B210-90F9EE3103AD-75542-000142A81CEC67ED",
				"nick": "Chillance",
				"description": "but anyway.. back to testing on mac os..",
				"time": "3:18 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L42CEE6C1-D3A7-4119-B0EA-47634FDAA80F-75542-000142A8B8192EBF",
				"nick": "chocobanana",
				"description": "I might be interested. I'll bookmark the blog to see how it progresses",
				"time": "3:18 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L06CC8494-7858-439D-9531-29A7A7D4BF76-75542-000142AAB354C9C6",
				"nick": "Chillance",
				"description": "cool!",
				"time": "3:18 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L888B95EF-765D-4E3E-98AF-55EB43D3ACC9-75542-000142AD2F1133DB",
				"nick": "Chillance",
				"description": "you got a bike or treadmill or something?",
				"time": "3:18 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LABAEB20C-A093-4B41-9746-F23F9672BB5E-75542-000142B8162E6E65",
				"nick": "chocobanana",
				"description": "I have conventional bikes, not fixed",
				"time": "3:19 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L73D9D43D-1967-4429-963B-D2A617B3D4E8-75542-000142BFCE024CEC",
				"nick": "chocobanana",
				"description": "but I see your treadgaming has usb inputs and an ethernet port all combined and that makes it very interesting.",
				"time": "3:19 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7D702167-B07E-44A4-8DE0-E7A7076F077E-75542-000142C68C2C20B9",
				"nick": "fujisano",
				"description": "Ping timeout: 252 seconds",
				"time": "3:20 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "4516aa5b@gateway/web/freenode/ip.69.22.170.91",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0A00AC53-F652-41CC-8A24-625316977EF6-75542-000142C69425E918",
				"nick": "Chillance",
				"description": "ethernet port?",
				"time": "3:20 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB7FED771-D2A5-4546-84A0-FD2FC961C886-75542-000142C911A3B935",
				"nick": "Chillance",
				"description": "only usb for now",
				"time": "3:20 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L2AD31DE6-99E8-427E-A190-B73EEDE8CFFF-75542-000142CBE50C8A0C",
				"nick": "gerrynjr",
				"description": "",
				"time": "3:20 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~gerrynjr@gentoo/user/gerrynjr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2BB923D1-E0A3-464C-8D55-D7BF058AEA84-75542-000142CF61DFBAD6",
				"nick": "Chillance",
				"description": "but",
				"time": "3:20 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3F510F3E-CA99-4897-8223-B7AAB11C1DCE-75542-000142D1B1AE25C2",
				"nick": "chocobanana",
				"description": "oh, I mistaken it by an example you give with a rapid prototyped enclosure...",
				"time": "3:21 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L21CF70AC-08CA-411C-A935-B91D1723FD0B-75542-000142D20FED2AF8",
				"nick": "Chillance",
				"description": "I had in mind adding more cool stuff in next version",
				"time": "3:21 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD43C30C7-CA84-4C03-A308-5FE8382C91E4-75542-000142D60F717DDB",
				"nick": "Chillance",
				"description": "ah, yea, sorry for the confusion :)",
				"time": "3:21 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4F0BB90A-A51C-4A50-8FCC-D2742EDCA635-75542-000142D9DEDEDE47",
				"nick": "chocobanana",
				"description": "I checked back and noticed you wrote it is an example",
				"time": "3:21 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L69DEABD4-1155-4E5A-86CE-274777F797E5-75542-000142D9E9BE2F6A",
				"nick": "Chillance",
				"description": "that was just examples on prints using a 3D printer",
				"time": "3:21 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD49557F4-09EF-4CB5-A2FD-E3A2BF16D786-75542-000142DD24F5E73D",
				"nick": "Chillance",
				"description": "still ok without ethernet?",
				"time": "3:21 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEE505F5B-8C09-4B0B-AA90-0CA11820B32D-75542-000142DDB22A0DC9",
				"nick": "Chillance",
				"description": ":)",
				"time": "3:21 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9A209439-EA81-46F5-B3BA-7788C3CD9C42-75542-000142E0168869A4",
				"nick": "hmija",
				"description": "",
				"time": "3:22 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~hmija@178.180.156.153.nat.umts.dynamic.eranet.pl",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA9BF7A5C-41D9-414E-9B54-094BE07A7E92-75542-000142E3087E91AC",
				"nick": "Chillance",
				"description": "I was thinking adding wifi or something next, but with it it will be more costly, so I skipped it for now",
				"time": "3:22 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L21D3145E-4B1D-4615-A8FE-1B937F28E57F-75542-000142E831F670C0",
				"nick": "chocobanana",
				"description": "well, I use Arduino… still trying to figure out the differences in terms of hardware possibilities",
				"time": "3:22 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L21829245-D9C5-452B-B2F7-1A022803BF5C-75542-000142F01B2D1675",
				"nick": "chocobanana",
				"description": "I once saw a game made by students using a fixed bike as the controller",
				"time": "3:23 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBC9CEFC0-03F3-4E7D-B218-98B07DBD9396-75542-000142F276C8CF85",
				"nick": "Chillance",
				"description": "but, internet access can be made by letting the device communicate through usb with software on computer...",
				"time": "3:23 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAD058940-A380-48FD-BD23-8E3DB53046AC-75542-000142F86286BD7C",
				"nick": "chocobanana",
				"description": "true, but if it's standalone… :D",
				"time": "3:23 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L022D4933-2F99-469F-88AA-BD247A21C908-75542-000142F98D181817",
				"nick": "fairway",
				"description": "",
				"time": "3:23 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~fairway@91.137.72.169",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF10ECDCB-830D-41B1-ADED-5553075C7D74-75542-000142FBFF76A35E",
				"nick": "Chillance",
				"description": "well, that is for the future :)",
				"time": "3:24 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L394C07C9-948F-4289-94DB-FCD5105A742F-75542-000142FEFB46B31A",
				"nick": "Chillance",
				"description": "for logs or whatever users wants",
				"time": "3:24 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE0AB6628-53DA-4DBE-97FD-D557E9234682-75542-000143060F38C284",
				"nick": "Chillance",
				"description": "yea, saw that with bike too :)",
				"time": "3:24 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L40B823E8-43B5-45FE-B793-713601005075-75542-000143089B028E0D",
				"nick": "chocobanana",
				"description": "still, it is pretty cool since it seems to be reasonably compact for a 1st gen design",
				"time": "3:24 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L28E0CD72-3327-4562-BD72-AED1BB071571-75542-0001430C4B1F60ED",
				"nick": "Chillance",
				"description": "yea, I love it! its so tiny",
				"time": "3:25 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCC78289A-5A7A-4604-859F-F9B83279A9CF-75542-0001430FADD681CE",
				"nick": "Chillance",
				"description": "but can handle pretty fast speeds anyway",
				"time": "3:25 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1F436496-8963-4995-89E9-4DC0FA2414D8-75542-00014311BC831432",
				"nick": "Chillance",
				"description": "like jogging",
				"time": "3:25 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9A92DD14-21F6-4BA2-A9A7-EBAB2F4A75B5-75542-00014318799146D9",
				"nick": "Chillance",
				"description": "out of curiosity, what would you pay for it?",
				"time": "3:26 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB6F86BFE-0C0B-4AE7-9A9A-78797598D2F7-75542-00014318C8833AE5",
				"nick": "Kunda",
				"description": "Quit: Kunda",
				"time": "3:26 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Kunda@76-253-76-173.lightspeed.austtx.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L99F8D7CA-A264-4BCD-8793-B64E6DA58C85-75542-0001431D45B0D72D",
				"nick": "chocobanana",
				"description": "Chillance: this might interest you: http://gnusb.sourceforge.net/",
				"time": "3:26 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L974064BD-BF62-4696-BEF3-32AF62ED6E98-75542-0001432537583568",
				"nick": "chocobanana",
				"description": "Chillance: Arduinos cost ~$25",
				"time": "3:27 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L975759F4-B5C2-4B45-9528-4A016920680E-75542-0001432A814CFF87",
				"nick": "chocobanana",
				"description": "what are the inputs and outputs?",
				"time": "3:27 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L61AF957D-C5D5-4989-A47F-B491AE4DB3C8-75542-000143396D320BA9",
				"nick": "Chillance",
				"description": "there is a sensor which communicates with SPI, and then a few I/O pins available",
				"time": "3:28 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L313D8B3C-E84D-4798-8BCE-4B3BD6243AC2-75542-0001433D5DD4AEA2",
				"nick": "Chillance",
				"description": "the I/O pins can be used for, say buttons",
				"time": "3:28 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7684301B-DF94-424B-B014-29AA947DF243-75542-0001433ED2587930",
				"nick": "chocobanana",
				"description": "right",
				"time": "3:28 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF8A15561-405A-4EA0-899D-1F44F05E0C94-75542-00014342AAEAE1C5",
				"nick": "Chillance",
				"description": "so, its just to hook them up :)",
				"time": "3:29 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L38A86C7E-ED24-40AB-8C82-D020530241F4-75542-000143447AF5EAD8",
				"nick": "ryaxnb",
				"description": "Read error: Connection reset by peer",
				"time": "3:29 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~ryaxnb@dsl-63-249-87-215.dhcp.cruzio.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0E914206-5356-4BE7-9748-4A58A264C178-75542-00014345277BE558",
				"nick": "Chillance",
				"description": "and then do some software update to support it",
				"time": "3:29 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L20E85042-DD4F-4DF9-BF43-94692E08C1A0-75542-00014346AEA55A8D",
				"nick": "chocobanana",
				"description": "that is very similar to an Arduino",
				"time": "3:29 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L22B8A18E-2DDA-4520-905E-6084194B5858-75542-0001434A70EE6BAA",
				"nick": "Chillance",
				"description": "sure",
				"time": "3:29 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L57860DBA-BC96-4A6E-80AE-E9F0A437AD82-75542-0001435238D7D1C6",
				"nick": "Chillance",
				"description": "but it isn't exactly easy to hook up the sensor, and some logic goes into the software to handle the data",
				"time": "3:30 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF55C67CB-6DCA-4F8F-8E20-BA8699862752-75542-00014359FCAD12A5",
				"nick": "chocobanana",
				"description": "oh, you're also supplying the software",
				"time": "3:30 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L724D1347-ADF5-46E0-AA03-FB31959CC586-75542-0001435C251CEB5A",
				"nick": "Chillance",
				"description": "yes",
				"time": "3:30 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4BE01093-3AFC-48AF-91BB-F8E9911C59D1-75542-0001435FAC6A436B",
				"nick": "Chillance",
				"description": "the idea is to have the device ready to just hook up and use",
				"time": "3:31 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L146C9C99-7541-45DC-84D6-17646DEE1945-75542-00014364E44D6518",
				"nick": "stirlingsilver",
				"description": "",
				"time": "3:31 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~stirlings@67-60-62-39.cpe.cableone.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDA2A4A82-B234-494E-84AE-AEFEEDECCF1B-75542-0001436716AE9415",
				"nick": "Chillance",
				"description": "I'm yet to decide if I should open source the code or not ;)",
				"time": "3:31 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L331AC246-93BB-40D8-B6C3-79E6A2AE04B0-75542-0001436B82D30071",
				"nick": "newbold",
				"description": "ok so",
				"time": "3:32 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4D9D01C3-8973-425B-BE2F-BD8A026CE7D0-75542-0001436D9E9867A0",
				"nick": "newbold",
				"description": "I'm still agonizing over buying a MacBook Air",
				"time": "3:32 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8BDF1835-44D7-4145-A929-6978B2B56117-75542-0001436E911BEF13",
				"nick": "newbold",
				"description": "what's wrong with me :(",
				"time": "3:32 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ajnewbold@pdpc/supporter/student/nut",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L89CEA23C-AF08-47F5-B10C-CB6ABDAC5B72-75542-000143738F7B713B",
				"nick": "chocobanana",
				"description": "Chillance: try to find some treadmill/fixed bike partners",
				"time": "3:32 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L15B8DB67-7778-4331-9F8B-915F504B93A3-75542-000143787DBAED98",
				"nick": "Chillance",
				"description": "yea?",
				"time": "3:32 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4F334369-F0BF-4676-8946-FD49E9EB249E-75542-0001437AEFABBB50",
				"nick": "chocobanana",
				"description": "Chillance: if you get a partnership you can still consider open-sourcing by offering additional services to your partners",
				"time": "3:33 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L676DFFDB-2DD2-47FC-BFBD-66B7D04D0BE3-75542-0001437B81C6AEDF",
				"nick": "Psy",
				"description": "",
				"time": "3:33 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Psy@CPE001e4c898465-CM001404e0b3d4.cpe.net.cable.rogers.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDBE0FA83-09FD-48EF-BD15-6BE13FCA6EF2-75542-00014381E4BD4B69",
				"nick": "Chillance",
				"description": "and not sell to regular users you mean?",
				"time": "3:33 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCCF885B2-BACA-4AA6-9004-A49FBFAAE053-75542-00014381EFF7D2B8",
				"nick": "chocobanana",
				"description": "*treadmill/fixed bike manufacturers",
				"time": "3:33 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L38D6EA5B-049B-4F36-89DF-8362D7A0ED42-75542-00014385E8EC67B5",
				"nick": "chocobanana",
				"description": "it's an option",
				"time": "3:33 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L39141F80-E253-41BD-A284-9CAE9307EBAC-75542-000143872F5D80E7",
				"nick": "chocobanana",
				"description": "you can have both too",
				"time": "3:34 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L1F25BDD0-307E-41D8-9288-2669AC123FD5-75542-000143906CDD0B18",
				"nick": "impy",
				"description": "Quit: impy",
				"time": "3:34 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~impy@91.182.220.165",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD70AAB2A-D728-4BD3-8F5C-2175A4AEA754-75542-000143954947B1D9",
				"nick": "impy",
				"description": "",
				"time": "3:35 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~impy@91.182.220.165",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L0F1788A4-F2FF-4E15-8C3E-ED2AA62EB0FE-75542-000143973197E546",
				"nick": "hobodave",
				"description": "Remote host closed the connection",
				"time": "3:35 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~hobodave@pdpc/supporter/professional/hobodave",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L94B9231B-E8FD-412E-BB9D-1F062173C1AF-75542-0001439C6CA06B93",
				"nick": "LeNsTR",
				"description": "LeNsTR|off",
				"time": "3:35 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~lenstr@unaffiliated/lenstr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L43810A26-D4D4-4659-A358-D6D0C274C8EC-75542-0001439EAA8C750F",
				"nick": "MeeKs",
				"description": "",
				"time": "3:35 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~MeeKs@c-98-243-3-137.hsd1.mi.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L21242211-DA60-4FE2-9109-E800C97D8B84-75542-000143A0BC1932D6",
				"nick": "Chillance",
				"description": "well, thanks for the feedback",
				"time": "3:35 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC709199E-C6CD-4781-BCA8-83B740F431A8-75542-000143A6326AAC3A",
				"nick": "chocobanana",
				"description": "good luck, it definitely sounds cool :)",
				"time": "3:36 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L679AD4D0-9386-4FF5-90A7-C0A8F5152C80-75542-000143A9C94FE489",
				"nick": "chocobanana",
				"description": "and, ehrm…, I hope you manage to test it on Mac OS, hehe",
				"time": "3:36 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF03F672D-18D1-41E6-A69B-7A2158528A05-75542-000143AEE6158E8A",
				"nick": "Chillance",
				"description": "I will try to make the price reasonable :) may be little more expensive in the beginning.. as I dont have many prototypes yet.. but follow the blog :)",
				"time": "3:36 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L52A92A20-09BC-47E3-8FBA-CB94286038AA-75542-000143B38834D0FB",
				"nick": "chocobanana",
				"description": "will do!",
				"time": "3:37 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L7DF4D287-660A-4CE8-809D-510F89D7118E-75542-000143B690AC1448",
				"nick": "wolfman2000",
				"description": "",
				"time": "3:37 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~wolfman20@rrcs-70-63-208-211.midsouth.biz.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LC63223CD-B542-427E-92BC-8A25D16D8242-75542-000143BA13317A20",
				"nick": "khiroc",
				"description": "",
				"time": "3:37 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~khiroc@i220-108-21-36.s02.a001.ap.plala.or.jp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD5608762-C2A6-459E-B537-7D1656A31932-75542-000143BD37ED79BD",
				"nick": "Chillance",
				"description": "I will try to update it more often :)",
				"time": "3:37 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEF4206DF-0B1C-48DD-856E-B52BEA36C3BD-75542-000143E1CA7E4938",
				"nick": "chocobanana",
				"description": "Chillance: one more thing - have you looked into the Make community?",
				"time": "3:40 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8473C237-8A8E-4C93-B280-C3407CDE5056-75542-000143EF610798FD",
				"nick": "FireSt0rM",
				"description": "",
				"time": "3:41 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~FireSt0rM@unaffiliated/firest0rm",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB1A46183-27BD-4432-AA9C-EF42FD2BDC58-75542-000143FB1E44D1B2",
				"nick": "tearsong",
				"description": "Remote host closed the connection",
				"time": "3:42 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~tearsong@204.145.67.146",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LE3BFB361-DE22-48D9-9A36-A7195A4BBF02-75542-0001440D4E6FDA3C",
				"nick": "tty234",
				"description": "",
				"time": "3:43 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "telex@gateway/shell/anapnea.net/x-kmondpdxxdpypxah",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9EAC7E75-202E-417F-A235-979D519BC494-75542-000144225261A224",
				"nick": "mikebobio",
				"description": "Quit: Textual IRC Client: http://www.textualapp.com/",
				"time": "3:45 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~mikebobio@wsip-64-58-150-130.oc.oc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LC54B2091-D128-4F89-8FFE-D6FE101D55F7-75542-0001442390B27BCE",
				"nick": "ryaxnb",
				"description": "",
				"time": "3:45 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ryaxnb@dsl-63-249-87-215.dhcp.cruzio.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L12C8EB34-7715-400A-86ED-5928EBD7E65D-75542-00014427EFC2365B",
				"nick": "frogor",
				"description": "",
				"time": "3:45 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8B7D007E-93FB-46FC-AAF0-F6C840F9529E-75542-000144403ED55334",
				"nick": "Wally",
				"description": "",
				"time": "3:47 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L24EA3E22-A6B8-4A6F-83AB-5797711CEAB4-75542-0001444DC2F3B826",
				"nick": "Chillance",
				"description": "chocobanana, yes I have",
				"time": "3:48 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L67A94071-9B74-40E2-AD4C-A99FFA38FEA5-75542-0001444E1895D02D",
				"nick": "Chillance",
				"description": "why?",
				"time": "3:48 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LAF3D85DA-4E93-4EE7-AF49-4ADEB2259E61-75542-0001444F5EFAC81A",
				"nick": "MeeKs",
				"description": "Ping timeout: 276 seconds",
				"time": "3:48 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~MeeKs@c-98-243-3-137.hsd1.mi.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9558E1DA-20C0-40BF-BDED-B5F9882FA454-75542-00014456BE208C70",
				"nick": "lundmark",
				"description": "Quit: Leaving...",
				"time": "3:48 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~lundmark@h70n1c1o1036.bredband.skanova.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L83FF7766-DC21-4E27-ABC7-F1DF9EA4C370-75542-00014458D8F573E1",
				"nick": "chocobanana",
				"description": "just wondering if it wouldn't have additional clues for testing your controller on a Mac",
				"time": "3:49 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB836770F-62F1-4559-84A7-057E9F30CF2B-75542-0001445929D6CD5C",
				"nick": "Adrian26",
				"description": "Quit: Colloquy for iPhone - http://colloquy.mobi",
				"time": "3:49 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~adrian@c-76-111-191-42.hsd1.wv.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDDF1ADD1-C52A-4832-81E9-F61A576E577C-75542-0001445B69AB0C10",
				"nick": "frogor",
				"description": "urp",
				"time": "3:49 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC16E8109-3229-45C5-ABE5-263F1FCF1FFC-75542-00014460A8C45BEF",
				"nick": "chiper",
				"description": "heya frogor",
				"time": "3:49 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB29531A4-86BD-4D6D-9A7D-6EA7AB85B246-75542-00014461D464CD88",
				"nick": "stirlingsilver",
				"description": "Quit: Computer has gone to sleep",
				"time": "3:49 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~stirlings@67-60-62-39.cpe.cableone.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "LB02614C5-5DA1-455F-950A-D66AF390EFB5-75542-00014463F274A93E",
				"nick": "Wally",
				"description": "feeds frogor some flies",
				"time": "3:49 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEA710FB8-36E2-43C9-86C4-D19367B519FB-75542-0001446AA80B43FC",
				"nick": "frogor",
				"description": "Heyas.",
				"time": "3:50 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "L23AA62BC-BDF5-4DBE-B366-85E8D725E1A9-75542-0001446C27976256",
				"nick": "frogor",
				"description": "munches on office birthday cake.",
				"time": "3:50 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L53145A93-258F-499C-AD84-84352AEF657F-75542-0001446CECE2CABD",
				"nick": "Kunda",
				"description": "",
				"time": "3:50 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Kunda@76-253-76-173.lightspeed.austtx.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L859A8D66-3307-4BA9-931E-71696FB0768C-75542-0001446E84C5C11F",
				"nick": "chocobanana",
				"description": "lol",
				"time": "3:50 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L461ABEE6-2C20-45A7-9259-36A3A6165C63-75542-00014470B7A5733B",
				"nick": "Chillance",
				"description": "I guess I could try a game ;)",
				"time": "3:50 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L555F0579-BCEF-4EB1-ABB9-DAB7EAFCDBA8-75542-00014470E8C88163",
				"nick": "chocobanana",
				"description": "bon apetit",
				"time": "3:50 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L5AB4BD41-4F7E-4CB2-857D-7F485334E43A-75542-00014471269FA2C0",
				"nick": "Kunda",
				"description": "Client Quit",
				"time": "3:50 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Kunda@76-253-76-173.lightspeed.austtx.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L48B21EF6-4C56-47F9-BCFE-C91E9720493F-75542-00014472CEB5B341",
				"nick": "fairway",
				"description": "Quit: Leaving.",
				"time": "3:50 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~fairway@91.137.72.169",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L01DF5929-0B95-47D8-BE75-5F2F51B9EEEE-75542-00014473FF90A933",
				"nick": "chocobanana",
				"description": "Chillance: :D",
				"time": "3:50 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L946E0698-5F1B-4F6C-80E7-7F8C4E70BF84-75542-00014475DE082368",
				"nick": "chiper",
				"description": "cox's shitty network is preventing my wife from watching netflix. &nbsp;she is not pleased",
				"time": "3:51 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L183006A6-EA8A-45F8-8DB3-F303F19C478E-75542-000144774EB74BC0",
				"nick": "Wally",
				"description": "HAPPY BIRTHDAY FROGOR",
				"time": "3:51 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L031BF6CF-9D8F-49AD-A4B2-A86689C5A92C-75542-00014489D03AD189",
				"nick": "Chillance",
				"description": "I mean, what do you guys do if you hook up a gamepad, and want to use that in a game?",
				"time": "3:52 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L5C5A722A-7307-458C-BC89-6B695E64A52B-75542-0001448C396438CF",
				"nick": "tL_",
				"description": "",
				"time": "3:52 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tL@host109-156-26-204.range109-156.btcentralplus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7E489A0C-84B5-4A9D-BD88-2858E8B05C76-75542-0001448C405FE9EC",
				"nick": "tL_",
				"description": "Changing host",
				"time": "3:52 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~tL@host109-156-26-204.range109-156.btcentralplus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0E4B7F19-E1D6-42A6-A2D3-36CC0FA22C49-75542-0001448C408A1F4F",
				"nick": "tL_",
				"description": "",
				"time": "3:52 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tL@unaffiliated/tl-/x-5475428",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBD55399F-2109-4744-8809-D7F5440D74C4-75542-000144BDC861E4E7",
				"nick": "chocobanana",
				"description": "Chillance: never used one with a Mac…. in theory, if you play a game that supports game controllers, it should allow you to configure the joystick in the game options",
				"time": "3:56 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0B211273-EE0D-43AC-A82B-E7C57DDE68BE-75542-000144C5F64FBDF3",
				"nick": "Chillance",
				"description": "aha, and they use libUSB or something?",
				"time": "3:56 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L463702B2-8A0F-4EEB-90A9-AAD5041E0706-75542-000144C937FDC34B",
				"nick": "chocobanana",
				"description": "no clues...",
				"time": "3:57 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9A18111E-07D6-4C4D-8D70-E69AF47D31CC-75542-000144CB180F2D06",
				"nick": "Chillance",
				"description": "oh well",
				"time": "3:57 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6B9AB771-980A-40CC-A88C-81CE071963B0-75542-000144D099B687A9",
				"nick": "Chillance",
				"description": "to be continued..",
				"time": "3:57 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L412E4BD1-CD58-4447-9991-5D1EFB1949DF-75542-000144D4D8F5ECAA",
				"nick": "frogor",
				"description": "lol, it's not my birthday",
				"time": "3:57 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L81DB0D64-0BA5-4D38-B14B-DE7CDD4A9292-75542-000144D569A5FB5C",
				"nick": "frogor",
				"description": "It's a co-worker's.",
				"time": "3:57 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6BD42591-F762-44BC-B5B5-715010D199EA-75542-000144D663FE3B4A",
				"nick": "frogor",
				"description": "Free cake is always good.",
				"time": "3:58 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L3A5C5191-8D45-4B24-B72A-50DA9D811233-75542-000144D7509609C8",
				"nick": "stirlingsilver",
				"description": "",
				"time": "3:58 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~stirlings@67-60-62-39.cpe.cableone.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L96FA13B4-EBAE-4ED7-AF06-07A948A14477-75542-000144DAEA9FDE0B",
				"nick": "ncow",
				"description": "libUSB? Isn't that a very old lib?",
				"time": "3:58 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L163EB055-D542-4264-9024-F929C78CAE97-75542-000144DCB35373E4",
				"nick": "ncow",
				"description": "like from around 1999",
				"time": "3:58 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L030D6E6E-AE92-41DC-B8A8-308EF9D3C3D8-75542-000144DEC6824957",
				"nick": "frogor",
				"description": "Chillance: The emulators I use have support for USB HID devices, like the PSX emulator, etc.",
				"time": "3:58 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L451022BC-DE6C-41A8-B419-08FB38AE53E6-75542-000144E4B0551F30",
				"nick": "frogor",
				"description": "Outside of that, I would have to rely on USB Overdrive, which lets you remap HID buttons to input keys / mouse movement.",
				"time": "3:59 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2E683EE6-B0DE-4F69-98DD-5D2F2953E43D-75542-000144E7D85DA28C",
				"nick": "Chillance",
				"description": "hmm",
				"time": "3:59 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2B8D66AB-4948-44BE-8660-850862DBAA09-75542-000144E99B1E8FA5",
				"nick": "zapzupnz",
				"description": "oh i do love how USB HID support is so ubiquitous in emulators these days",
				"time": "3:59 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L75E50BD1-21A2-4F06-93EC-6A8AC459A6E7-75542-000144EC57476A40",
				"nick": "zapzupnz",
				"description": "me and my GameCube controller with a GC → USB adaptor",
				"time": "3:59 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA4FE1AD6-673B-42C8-BEE3-666B436C5A06-75542-000144ED9356B780",
				"nick": "zapzupnz",
				"description": "lol",
				"time": "3:59 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3EACDD5C-E07E-459D-8C3B-8D6FD2F5F451-75542-000144EED5F128CF",
				"nick": "frogor",
				"description": "Because I've got a Connectix USB gamepad that's pretty similar to a SixAxis PS2 controller.",
				"time": "3:59 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA7552428-3D04-402B-B799-0DE857C55323-75542-000144EF922A0F3A",
				"nick": "frogor",
				"description": "Er, DualShock.",
				"time": "3:59 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L02ED835B-24BE-49D3-9981-046331F1A566-75542-000144F438ECD4FF",
				"nick": "Chillance",
				"description": "frogor, how can you examine that in MacOSX?",
				"time": "4:00 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L050613B3-358C-4A80-ADD3-B4B99C06C55B-75542-000144F7830815A4",
				"nick": "ncow",
				"description": "GameCube? There's still people who actually care about the GameCube? I thought the wii can play GC games (what few good ones ther were imho)",
				"time": "4:00 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAAEABFD0-3303-48D1-9238-C8B728851534-75542-000144F82D63F30B",
				"nick": "frogor",
				"description": "Sorry, not Connectix - Logitech",
				"time": "4:00 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD831CCA0-379E-4590-A48C-0F9DF2EA02E1-75542-000144F8B1536491",
				"nick": "Chillance",
				"description": "you got a special app for that? I guess nothing build into the os?",
				"time": "4:00 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L513985F3-EE5D-4C23-AEDE-3AAD596CD0D5-75542-000144FC6FA1EF84",
				"nick": "zapzupnz",
				"description": "ncow: yeah, but what controller do you think you have to use to play GameCube games on the Wii?",
				"time": "4:00 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7394DDEB-9CF5-48B7-BDA3-4C712EDD8604-75542-000144FD0053AFF2",
				"nick": "frogor",
				"description": "This one: http://www.google.com/products/catalog?client=ubuntu&amp;channel=fs&amp;oe=utf-8&amp;q=LOGITECH+GAMEPAD+DUAL+ACTION+USB+GAMEPAD&amp;um=1&amp;ie=UTF-8&amp;cid=15983314940687233394&amp;sa=X&amp;ei=EZ-bTfjtE-KQ0QG175npAg&amp;ved=0CC8Q8gIwAg#",
				"time": "4:00 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L504859E7-481D-46C7-BD50-E2AD2E50A27C-75542-000144FEF733A4E3",
				"nick": "ncow",
				"description": "I have nothing against the GC in general, but it just didn't seem to have all that solid of a library is previous Nintendo consoles did",
				"time": "4:00 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L41D774B3-EDC3-4D8D-AF60-1EB68149DE46-75542-0001450018E4DFE4",
				"nick": "zapzupnz",
				"description": "hence, i have a gamecube controller :P (well, two, but i only ever play alone)",
				"time": "4:01 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD92C67BD-52EB-4CF3-B65F-F88409192642-75542-0001450135723FFE",
				"nick": "ncow",
				"description": "zapzupnz: good point :)",
				"time": "4:01 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3A0E7975-3728-4B8E-AFBE-F38A8F370EEF-75542-0001450EA53C576B",
				"nick": "zapzupnz",
				"description": "but i mean, the Wii Remote + Darwiin Remote works well for games with simple controllers too",
				"time": "4:02 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L46E2377F-E931-415B-B96C-D9301D68898E-75542-00014510B54E70F4",
				"nick": "ncow",
				"description": "( imho game consoles never really felt the same after the \"16-bit\" era )",
				"time": "4:02 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L7918D72B-5496-4CBB-85F9-69C37562DCAF-75542-00014513C3AC635F",
				"nick": "lundmark",
				"description": "",
				"time": "4:02 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~lundmark@h70n1c1o1036.bredband.skanova.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB561E258-6A1D-467F-BF8B-2435CFA8DBD4-75542-0001451A5FEFC63F",
				"nick": "ncow",
				"description": "I think there was something about conoles before the mid 90's that is lost in today's consoles, as good as a wii, ps3, or 360 are",
				"time": "4:02 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L55C4A2B3-A8C6-4AB3-9A63-8677439AFA86-75542-0001451DFBE8994D",
				"nick": "zapzupnz",
				"description": "still, i'd somewhat rather play all my Mario games on the console in question - no need to worry about device drivers, versions of 3D frameworks, whether other apps can pop up notices over the top of it - you just play the game :D",
				"time": "4:03 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCB5A3A57-F20C-47FA-92E0-503C54049C03-75542-0001452234216540",
				"nick": "ncow",
				"description": "true",
				"time": "4:03 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ncow@unaffiliated/necrocow",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L21A6E1CE-A1DB-4BE7-8981-9B22B3A569B5-75542-00014523074941CF",
				"nick": "zapzupnz",
				"description": "Nintendo got that bit rather as far as I'm concerned - game consoles for games",
				"time": "4:03 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L24C1B24F-9C1B-431B-A7E4-E3D1332AC4EB-75542-00014525E19DB24A",
				"nick": "atmosx",
				"description": "Quit: Leaving",
				"time": "4:03 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~osx@46.12.134.89.dsl.dyn.forthnet.gr",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L294E2769-6813-40F7-8B2E-EC88F5BD0B1D-75542-0001452952E1BDB7",
				"nick": "ryaxnb",
				"description": "Ping timeout: 260 seconds",
				"time": "4:03 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~ryaxnb@dsl-63-249-87-215.dhcp.cruzio.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L37AB8AD8-23AC-465C-9CEF-9029D5892087-75542-00014529FE086F72",
				"nick": "MeeKs",
				"description": "",
				"time": "4:04 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~MeeKs@76.226.16.166",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6E0B9C3F-C366-478E-967A-C7BC06A25E9A-75542-000145382BB258EA",
				"nick": "Predominant",
				"description": "",
				"time": "4:05 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Predomina@202.134.254.218",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L29D5D12F-0B6B-488C-9939-F5982095AB94-75542-0001453F764A435D",
				"nick": "Ttech",
				"description": "Avanone",
				"time": "4:05 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "ttech@botters/staff/ttech",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7E218BD2-3321-4BA4-B9DB-10C22AB57450-75542-000145424FC7257A",
				"nick": "zapzupnz",
				"description": "i think i agree with you ncow",
				"time": "4:05 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L40F59B42-F585-4A1D-BA1D-71458E6440A9-75542-00014542AA6B61A4",
				"nick": "lundmark",
				"description": "Client Quit",
				"time": "4:05 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~lundmark@h70n1c1o1036.bredband.skanova.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L92A4DD95-B898-4EC6-821B-B8D7BFCC4501-75542-00014543749AB6CD",
				"nick": "Avanone",
				"description": "Ttech",
				"time": "4:05 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "ttech@botters/staff/ttech",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB8C3B5AF-0BDB-4342-B587-BB13736D5A7F-75542-00014548D7F5E396",
				"nick": "zapzupnz",
				"description": "i always liked how engaging the games were in those eras without the benefit of superfast CPUs, amazing 3D graphics, and so on",
				"time": "4:06 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE4D061F0-E7BB-487C-A3F0-73A853C73284-75542-0001454C5AC763C6",
				"nick": "zapzupnz",
				"description": "as they call it in the art world, working with a limited palette",
				"time": "4:06 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L76BFAFB8-0812-4580-9AF9-00CCB0F0C305-75542-0001454FB04EBBE3",
				"nick": "MeeKs",
				"description": "Remote host closed the connection",
				"time": "4:06 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~MeeKs@76.226.16.166",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L609A9BA4-1EA4-462B-BAEF-DE510FD12276-75542-000145506094487C",
				"nick": "chocobanana",
				"description": "Quit: Leaving.",
				"time": "4:06 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~chocobana@unaffiliated/chocobanana",
				"unencrypted": false
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD51BFD52-6DD6-47CA-BFD7-431FC937BAA6-75542-0001456CD6C3D1DB",
				"nick": "frogor",
				"description": "Yeah.",
				"time": "4:08 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L35FC4FA8-EC13-45AF-AA3D-547C2C3D19F1-75542-0001456ED676B013",
				"nick": "frogor",
				"description": "Looks like for the Dual Action controller I've got, it's 3 choices:",
				"time": "4:08 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LEB3F760E-3505-4EEC-B9A0-5324F8169311-75542-0001456F0D04756E",
				"nick": "ryaxnb",
				"description": "",
				"time": "4:08 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ryaxnb@dsl-63-249-87-215.dhcp.cruzio.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7C46CC46-E744-4AA2-A7A2-293CD94FD3D9-75542-000145717C15A044",
				"nick": "chiper",
				"description": "there, I think I got my linkinus theme back the way I want it",
				"time": "4:09 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0A3349F7-1B20-4FA4-BD3C-AA2B74BC2DB7-75542-000145742312CFDB",
				"nick": "chiper",
				"description": "one of these days I'll make my own",
				"time": "4:09 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L717091DE-5CE7-4E53-BD04-270E91ECA5CF-75542-0001457D1F84F3EB",
				"nick": "frogor",
				"description": "GamePad Companion ($8 on Mac App Store), ControllerMate ($15), or USB OverDrive ($20)",
				"time": "4:09 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L92F3254A-964E-44EF-8A6C-4821E84BB2F4-75542-0001458003AD17D3",
				"nick": "frogor",
				"description": "All of them are HID controller remappers.",
				"time": "4:10 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8818B588-80C9-42F4-A29D-39E709749D2E-75542-0001458AAEC50ABC",
				"nick": "zapzupnz",
				"description": "ah, so gamepad companion is on the Mac App Store now - good, makes sure it keeps getting dev'd :D",
				"time": "4:10 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L8346C7F9-81B7-442A-8F21-1F15187CAB2C-75542-000145931E5B3A29",
				"nick": "cilly",
				"description": "Quit: leaving",
				"time": "4:11 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9F3CB1A0-5990-4EF1-A5F5-3710BCA3C134-75542-000145950EAA18DE",
				"nick": "cilly",
				"description": "",
				"time": "4:11 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC8614092-272E-4B0D-B5D5-B940FEEA79F2-75542-0001459A800EA486",
				"nick": "Sia-",
				"description": "Quit: Bye!",
				"time": "4:12 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Sia-@unaffiliated/desian",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L941CDFF5-F78E-466D-9661-437D8F4CBE17-75542-0001459AE33F7FAA",
				"nick": "turkchgo",
				"description": "Quit: Bye!",
				"time": "4:12 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~trbldwine@adam.ur.northwestern.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7EE623EB-371C-41F4-9E33-995EAF173BA3-75542-0001459BE601513F",
				"nick": "tilerendering",
				"description": "Quit: tilerendering",
				"time": "4:12 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~tilerende@94-224-218-94.access.telenet.be",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L08BFED14-05D0-48EF-BA8C-663AE6146DAE-75542-000145AFDBA7C201",
				"nick": "gwoods",
				"description": "",
				"time": "4:13 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~quassel@92-249-224-184.pool.digikabel.hu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LA707DA5A-082F-42B9-A2EB-0EC698D2480D-75542-000145B48574B327",
				"nick": "tilerendering",
				"description": "",
				"time": "4:13 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~tilerende@94-224-218-94.access.telenet.be",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEDB5A1A4-562F-4081-AD9C-C02E8A4A0552-75542-000145CE76B07D2B",
				"nick": "chiper",
				"description": "so, since linkinus isn't the only irc client that uses this webview engine, is there some name for it?",
				"time": "4:15 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0253CA58-E38C-4809-9BF1-3F029F039277-75542-000145D18D6EE2D9",
				"nick": "chiper",
				"description": "something I could search for to find documentation on how to write themes?",
				"time": "4:16 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA64D0374-EDE2-428E-A000-47020992B431-75542-000145D82C85911E",
				"nick": "zapzupnz",
				"description": "doesn't Linkinus just use WebKit? so all its themes should just be css",
				"time": "4:16 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L85911978-939E-4BBA-A0BA-E2C97F6E01BF-75542-000145D95B2D8556",
				"nick": "zapzupnz",
				"description": "like Colloquy",
				"time": "4:16 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L42D5ED72-CBC5-49BF-ADF1-9BA45CA5A309-75542-000145DBD776EFEC",
				"nick": "chiper",
				"description": "they are, but there's a javascript api as well",
				"time": "4:16 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L52CBFBCA-068F-4E55-BA32-982BC7D9DE0B-75542-000145DD8C8F5EB9",
				"nick": "zapzupnz",
				"description": "o fun",
				"time": "4:16 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEB65EB98-1698-4D57-91A8-453234026660-75542-000145DDF71176E4",
				"nick": "chiper",
				"description": "the actual html is generated by the JS api",
				"time": "4:16 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L22AB4551-871A-4B24-9272-0A7D9AEBD907-75542-000145DFC6730798",
				"nick": "Sia-",
				"description": "",
				"time": "4:17 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Sia-@0120600067.0.fullrate.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LA67AA5F8-D206-43AF-8182-DC8BD0583ECC-75542-000145DFCD070590",
				"nick": "Sia-",
				"description": "Changing host",
				"time": "4:17 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Sia-@0120600067.0.fullrate.dk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L835DAA62-62B6-4694-B43C-092AEEFC8530-75542-000145DFCF63BB38",
				"nick": "Sia-",
				"description": "",
				"time": "4:17 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Sia-@unaffiliated/desian",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L74FC6BC3-EC4B-486F-84C6-5CDF2C170B44-75542-000145E0CDC1A186",
				"nick": "chiper",
				"description": "and the webview makes calls to that api",
				"time": "4:17 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7E75D512-42CB-40C9-B235-F3D8E525AABB-75542-000145E1285D03F6",
				"nick": "wheeler_32",
				"description": "Quit: Leaving",
				"time": "4:17 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~wheeler_3@wads-4-231-218.resnet.mtu.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L43B2E8EE-7D9E-4C3E-984C-A17981FA9F55-75542-000145EB165D6DFB",
				"nick": "necromancer",
				"description": "Quit: Bye!",
				"time": "4:17 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~tubbo@pool-108-16-121-76.phlapa.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "L0EE9DFA8-362C-4CFC-9CCF-FAB8A3A1B945-75542-000145F1ADE5A235",
				"nick": "chiper",
				"description": "pokes at drudge",
				"time": "4:18 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L47427FBB-AA94-4EBB-8C00-A0B35A0D6BE1-75542-000145F3B1579BE0",
				"nick": "oxoocoffee",
				"description": "",
				"time": "4:18 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~oxoocoffe@75-149-67-59-Illinois.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD8A7A100-E28B-4439-A8C3-17D9ABEF5290-75542-000145FA8FB98CA1",
				"nick": "dleedev",
				"description": "",
				"time": "4:18 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~dleedev@207.47.25.98.static.nextweb.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8F64D8B9-FBB5-41E9-A709-5861C3321C8C-75542-000145FEA3F0432C",
				"nick": "frogor",
				"description": "chiper: hah. I always just pulled apart the other themes it came with.",
				"time": "4:19 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": true,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L70305F67-B78F-474F-97CE-5238238F2515-75542-00014602AF8BD601",
				"nick": "chiper",
				"description": "yeah, that's what I've been doing, but I feel like writing my own from scratch",
				"time": "4:19 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6A501025-37B6-4601-8B43-A948DC74BB27-75542-00014608B1328C71",
				"nick": "frogor",
				"description": "But I believe it has an embedded dev tool or something.",
				"time": "4:19 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "L46A5B76D-1CC9-4AD7-9661-E85F46E00982-75542-000146098FEF1243",
				"nick": "frogor",
				"description": "looks up his notes.",
				"time": "4:20 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L19F5309E-7A91-4C70-8915-0977146F6FC5-75542-0001460D775C9182",
				"nick": "chiper",
				"description": "textual apparently does",
				"time": "4:20 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L0A52EC07-FF1C-49A6-BA10-E15C5A27B949-75542-00014611CF950659",
				"nick": "cilly",
				"description": "Read error: Connection reset by peer",
				"time": "4:20 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD4403852-2484-4EBD-BB4C-592BF904F3CB-75542-0001461409794C9D",
				"nick": "frogor",
				"description": "Old info: GamePad Companion ($8 on Mac App Store), ControllerMate ($15), or USB OverDrive ($20)",
				"time": "4:20 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L003CBED1-B972-46E6-83DD-E4D4E0A2B8C3-75542-000146146101C332",
				"nick": "frogor",
				"description": "er",
				"time": "4:20 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE9AA455E-D2F6-4691-BC52-127DEFD357B6-75542-00014614FAF6F1E2",
				"nick": "frogor",
				"description": "http://conceited.net/wiki/creating_styles",
				"time": "4:20 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7C77679A-7FC2-4A94-B2F6-1C0BB679E987-75542-00014617DDDBCEF7",
				"nick": "zapzupnz",
				"description": "pasteboard fail",
				"time": "4:21 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L515CAE21-802D-4DED-8884-D0CCD7C6D863-75542-000146180152F625",
				"nick": "chiper",
				"description": "yeah, I'm looking at that now.",
				"time": "4:21 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAF1B4B15-D6AD-4EFE-8837-F0E7A72B2ED3-75542-0001461817FC59B5",
				"nick": "frogor",
				"description": "lol - that wiki has been spammed :/",
				"time": "4:21 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB86CA694-7136-42C7-A572-75509B891996-75542-00014619B3392BC0",
				"nick": "chiper",
				"description": "hehe, saw that too eh?",
				"time": "4:21 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L34B7A43B-FFE3-461A-834D-AF42D378FC60-75542-0001461C27B1A864",
				"nick": "chiper",
				"description": "I'm like \"whitetail deer hunter? wtf?\"",
				"time": "4:21 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDC06EBD4-FB47-48FD-A5AE-69EEC41E229F-75542-0001462B151A47AA",
				"nick": "chiper",
				"description": "heh, they actually recommend you use jquery",
				"time": "4:22 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L37341FE4-59D3-4F51-A143-594705A8BF24-75542-00014656C19F3C21",
				"nick": "frogor",
				"description": "chiper: http://www.conceited.net/linkinus/sdk",
				"time": "4:25 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": true,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L0B0DE282-CA3E-4AC0-9C7B-9D83105333FF-75542-00014659EB58685C",
				"nick": "gwoods",
				"description": "Remote host closed the connection",
				"time": "4:25 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~quassel@92-249-224-184.pool.digikabel.hu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LDA07531C-2E30-48E1-B84A-763EB707679C-75542-0001465A5DD1C82C",
				"nick": "PegaYenzi",
				"description": "Quit: Get your MOS fan shirt at www.sharky-shirts.de",
				"time": "4:25 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~PegaYenzi@p4FC60026.dip0.t-ipconnect.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L80D48966-23C8-4E2C-92B1-899B03DD79D8-75542-0001465C9302397D",
				"nick": "frogor",
				"description": "Looks like it hasn't been updated since 2009, though.",
				"time": "4:25 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L927F0271-A3A8-468B-83E8-3B81CF788036-75542-0001465F1569E509",
				"nick": "chiper",
				"description": "doesn't include a style template either",
				"time": "4:26 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF719D359-E7B2-406C-AD79-3CA5083E0ABE-75542-0001465F2C393B51",
				"nick": "frogor",
				"description": "Ah - and that's for the plugins",
				"time": "4:26 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L7177D17E-DEC3-405A-9D2E-4F9EC37CF008-75542-0001465F70B5B955",
				"nick": "frogor",
				"description": "Nevermind.",
				"time": "4:26 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE65D66B1-EC9C-4BDE-97AC-32C12838FE04-75542-0001467118BCB27C",
				"nick": "CPng|N1",
				"description": "Fedaykin_: &nbsp;help these people out",
				"time": "4:27 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L05C56E96-0E07-4854-A0A0-417DA5D1C0FC-75542-00014671EB49593C",
				"nick": "RaceCondition",
				"description": "Quit: RaceCondition",
				"time": "4:27 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~erik@82.131.63.59.cable.starman.ee",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L692FD659-76C9-40D7-9AD6-661C1BF4343F-75542-000146802ACF034A",
				"nick": "axisys",
				"description": "any workaroud on playing flash video on mac ppc? I am get this when trying to play abc.go.com show",
				"time": "4:28 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L53FEF00F-D1A0-4B7B-B973-E36FFD176ABF-75542-00014680DFF9C362",
				"nick": "axisys",
				"description": "http://picpaste.com/adobe-qwonN36t.png",
				"time": "4:28 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L10E7D78F-6C42-4D5F-93FC-304679C0914F-75542-00014682CA075990",
				"nick": "cilly",
				"description": "",
				"time": "4:28 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE612FB40-B24B-45EC-A68B-C89C2DA321D5-75542-0001468B022FDDCC",
				"nick": "frogor",
				"description": "axisys: Flash Player 10 does not exist for PPC.",
				"time": "4:29 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5BD0772C-7424-4928-BC83-3E495B1E82BA-75542-0001468CC103C711",
				"nick": "frogor",
				"description": "axisys: You can still use 9.",
				"time": "4:29 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5C732C1B-7860-4C48-AFA1-5D2308C890D2-75542-0001468DC6AF62B1",
				"nick": "CPng|N1",
				"description": "error message pretty much sums it up for you",
				"time": "4:29 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L517F253D-8722-4669-9714-7281AFCD300E-75542-0001468E9CD7B784",
				"nick": "frogor",
				"description": "If ABC is requiring 10, you're fucked.",
				"time": "4:29 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAC5D3363-FE6E-4B2A-BB43-EF86AEC60443-75542-00014693C2857B00",
				"nick": "frogor",
				"description": "chiper: Can you screenshot for me the Preferences -&gt; Styles window?",
				"time": "4:29 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": true,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L941DB3DB-9E97-4907-BB89-7ED72F535159-75542-0001469A9FFD5E9F",
				"nick": "chiper",
				"description": "http://imgur.com/TIDFU.png",
				"time": "4:30 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8A248C4A-C9B6-4628-B745-79FA6E8DB04C-75542-000146A9537B4FE5",
				"nick": "axisys",
				"description": "frogor: ok",
				"time": "4:31 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LDEA76433-C196-4258-A247-8A7F0D05866E-75542-000146A967DEF542",
				"nick": "itadakiORANGE",
				"description": "",
				"time": "4:31 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~textual@c-67-182-46-62.hsd1.ca.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L123F7837-0D05-4200-B18A-957EE581F715-75542-000146B1E7C32236",
				"nick": "frogor",
				"description": "chiper: Huh, I swear in the preferences interface they used to have a link to download an SDK - but that might have been in 1.x",
				"time": "4:32 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": true,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBC0CC26A-F18D-455F-995C-66AB8E2D1696-75542-000146B3B589CE37",
				"nick": "axisys",
				"description": "woundering if i could download some way and play it with vlc or something",
				"time": "4:32 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC0A38BAB-08BC-42E8-8E6B-F05438E4CC4F-75542-000146B58005DA6A",
				"nick": "chiper",
				"description": "*nod* the style format changed in 2.0 I think",
				"time": "4:32 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L8E570AD7-E323-40A1-B997-AD8120831341-75542-000146B5A895A3A0",
				"nick": "frogor",
				"description": "It's been a long time since I've even bothered launching my copy of Linkinus - I honestly just use Textual.",
				"time": "4:32 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LEFD1F044-2EBA-4581-8936-EC9B918B90B8-75542-000146B6E9423FB1",
				"nick": "QuIQue-Ceuti",
				"description": "",
				"time": "4:32 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~iirc@193.153.41.55",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBD784C3A-70BA-46FC-8B53-413E73ACCDE7-75542-000146C40D60483A",
				"nick": "frogor",
				"description": "axisys: The only way I know of for doing that is with get-flash-videos - which is a perl-based command-line tool that will take the URL for a video and download it, using rtmpdump when necessary.",
				"time": "4:33 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0F28DCA1-8C60-40EC-A775-E108C0712331-75542-000146C6A0C569D9",
				"nick": "zapzupnz",
				"description": "i was under the impression ABC were doing HTML 5 video as well as Flash",
				"time": "4:33 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5C482709-A8E3-4C7D-B95E-50D8B714E9CE-75542-000146CA1B35150F",
				"nick": "zapzupnz",
				"description": "so a user agent change would do it, perhaps",
				"time": "4:33 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0971A80E-11A3-41F5-9106-1BC8676F893E-75542-000146CA320E137A",
				"nick": "frogor",
				"description": "axisys: But to install it on OS X, PPC, you'll need: XCode, knowledge of perl, knowledge of how to compile rtmpdump for PPC, and how to install binaries so they appear in your PATH.",
				"time": "4:33 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9C77CFF8-141A-44A8-B10A-8B4D40A6E5CC-75542-000146CA914E288C",
				"nick": "QuIQue-Ceuti",
				"description": "Remote host closed the connection",
				"time": "4:33 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~iirc@193.153.41.55",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L35A504FA-64F6-4928-B0AA-E4ACC6D678D0-75542-000146CC91D401B7",
				"nick": "frogor",
				"description": "axisys: In short: Not for the normal person.",
				"time": "4:33 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L450E09D4-9A77-4D33-98B5-31DA0BDFE513-75542-000146D1A73E16B5",
				"nick": "frogor",
				"description": "zapzupnz: They're doing HTML 5 to the iPad.",
				"time": "4:34 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0D215307-5B38-49C3-9F9F-5EB8B163BBDD-75542-000146D378A788A6",
				"nick": "frogor",
				"description": "So possibly if you can change your UserAgent, maybe.",
				"time": "4:34 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L264D95F7-CFE8-4C04-BAB9-C8BEE3816B73-75542-000146D4A377F389",
				"nick": "zapzupnz",
				"description": "yeah, that's what i reckon",
				"time": "4:34 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF749334E-DA1A-4950-91D6-7B4694DA516E-75542-000146D625231656",
				"nick": "zapzupnz",
				"description": "so you'd have to do it in Safari",
				"time": "4:34 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDC65B3CC-1257-4029-8425-A693768689EA-75542-000146D7D5AF3E95",
				"nick": "axisys",
				"description": "xcode is free to download?",
				"time": "4:34 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD6BB96D8-BAFC-4209-8015-E87DCC99964E-75542-000146DBDA72410A",
				"nick": "Sia-",
				"description": "Quit: Leaving...",
				"time": "4:35 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Sia-@unaffiliated/desian",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L47F6CAED-D705-4463-B711-75496D9A4859-75542-000146DC670172EC",
				"nick": "frogor",
				"description": "axisys: I don't have the time to walk you through it, sadly.",
				"time": "4:35 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "L4E9EF5E3-0D8F-466B-8D79-53702B7E013D-75542-000146DD3C5E9336",
				"nick": "frogor",
				"description": "has to go help a client.",
				"time": "4:35 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "LD1013390-CF92-4F5F-BA0F-A9C8039AFCEF-75542-000146DF2A454019",
				"nick": "Krabbe",
				"description": "krabbe",
				"time": "4:35 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Krabbe2@77.37.11.207",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L88CB23A6-823E-4ADB-9FB7-9FA9279F6106-75542-000146E5C2B9B024",
				"nick": "axisys",
				"description": "where can I get the source code for adobe flash so I can try to compile it",
				"time": "4:35 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCCBBB0A1-B6F4-467B-A9D7-9AC3732B28C2-75542-000146E738F22729",
				"nick": "zapzupnz",
				"description": "you can't",
				"time": "4:35 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L53382111-588D-4E2F-AB12-1C68AD7FB9C8-75542-000146E9CB15A8D0",
				"nick": "zapzupnz",
				"description": "Adobe don't release it, it's theirs",
				"time": "4:36 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L959D369D-A326-4EE5-BBDA-14872338E780-75542-000146EF75C2C446",
				"nick": "zapzupnz",
				"description": "what's the latest version of Safari for Leopard/PPC? 4 or 5?",
				"time": "4:36 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L34F07B49-A283-48D1-A1C6-4418911CF085-75542-000146F0B9F03E7D",
				"nick": "zapzupnz",
				"description": "5, isn't it?",
				"time": "4:36 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L64BB0E9E-57DD-477C-9318-5947CE88A6BC-75542-000146F78F8E2CEA",
				"nick": "doppiabeo",
				"description": "Remote host closed the connection",
				"time": "4:37 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~doppiabeo@217.201.97.128",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L87F2C031-2646-44CA-862F-FA28C8018284-75542-000146F9F44212E2",
				"nick": "cilly",
				"description": "Quit: leaving",
				"time": "4:37 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "pluto@unaffiliated/cilly",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L95157CE7-DEAF-403C-AF3B-A7DDA645A693-75542-000146FB91A1411F",
				"nick": "axisys",
				"description": "oh ok.. so find the get-flash-video src code and compile it and use that to download the flash and then use vlc to play the flash video ",
				"time": "4:37 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDC7E8E97-8CE2-4AA1-95CE-C1A5C0A05D10-75542-000146FD74BF6194",
				"nick": "zapzupnz",
				"description": "You don't necessarily need to do that",
				"time": "4:37 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA13BE9EF-FAD7-4AC5-8D14-A91A5D3E3827-75542-00014700A23BD196",
				"nick": "axisys",
				"description": "zapzupnz: what other option do I have?",
				"time": "4:37 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9E6E8F27-0439-4417-A9CF-D565822C553A-75542-00014702947AAD35",
				"nick": "zapzupnz",
				"description": "the one i've been talking about, and you've been ignoring?",
				"time": "4:37 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L29786E6D-6AC0-43C2-883C-E333CEC630FC-75542-000147051B0870E8",
				"nick": "axisys",
				"description": "zapzupnz: reading now.. apologize",
				"time": "4:38 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD228D0D5-F2FE-404D-AFBA-EDCFAD7CE4D4-75542-0001470960F2ED26",
				"nick": "axisys",
				"description": "zapzupnz: let me check the safari version",
				"time": "4:38 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L44B0B1B1-6793-4384-8D8D-402DA600B290-75542-0001470E0FEB978F",
				"nick": "zapzupnz",
				"description": "open up Safari, open up Safari Preferences (command+comma, or Safari menu → Preferences), click on Advanced, enable Show Develop menu in menubar",
				"time": "4:38 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEA72950D-4618-4EEE-B888-95677CB94DD7-75542-0001471392B32835",
				"nick": "zapzupnz",
				"description": "then navigate to that video in Safari, whereupon it will complain that you can't watch the video just like in Firefox",
				"time": "4:39 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3CD2CA0D-645F-40E4-A062-4D9B04CD3E46-75542-00014713D2B6E17D",
				"nick": "axisys",
				"description": "zapzupnz: waiting for the vnc to open.. hehe.. i am lazy.. ",
				"time": "4:39 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L68B6355E-8432-40D8-8D69-7266AA6A4512-75542-0001471CC071780A",
				"nick": "zapzupnz",
				"description": "then click on the Develop menu → User Agent → Safari iOS 3.2.2 iPad - then it will pretend you're on an iPad, and possibly attempt to serve an MP4 to you instead",
				"time": "4:39 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAC222A6B-E1FF-4483-9AD6-E757BEAAA062-75542-000147203CB89C8D",
				"nick": "zapzupnz",
				"description": "and of course, Macs have been playing MP4s since the late 90s so that should work fine",
				"time": "4:39 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L17BC09B2-D3FF-43F8-BA4E-334DB5FBD0E4-75542-00014720F529EDFB",
				"nick": "CPng|N1",
				"description": "just download the show on usenet and be done with it ;)",
				"time": "4:40 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L84950953-E255-4F29-BA0F-5E64BE6A7B8B-75542-000147254D0E9190",
				"nick": "axisys",
				"description": "CPng|N1: usenet ?",
				"time": "4:40 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L75F2D9FC-BC50-4529-88E4-6D11D70D6AB8-75542-00014725D7203DEF",
				"nick": "zapzupnz",
				"description": "i can't test because i don't live in the US and its territories :P",
				"time": "4:40 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L836C1173-82FC-48BC-8DB6-DBF26D9D4778-75542-000147273EB0D21C",
				"nick": "zapzupnz",
				"description": "it just tells me to move &gt;.&gt;",
				"time": "4:40 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L1C4D6370-392B-42A9-828B-DBD435B12294-75542-00014727573A4F5E",
				"nick": "CPng|N1",
				"description": "CPng|N",
				"time": "4:40 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC541D66E-3B00-48E5-A1D4-978297003142-75542-0001472AF295CA60",
				"nick": "loadbang",
				"description": "Quit: loadbang",
				"time": "4:40 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~loadbang@host86-147-138-213.range86-147.btcentralplus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L249CC3DC-22C8-4EE9-9C43-0F26847111F1-75542-000147449101397B",
				"nick": "loadbang",
				"description": "",
				"time": "4:42 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~loadbang@host86-147-138-213.range86-147.btcentralplus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC7D2A405-DDFC-406E-BDDC-922D657615E2-75542-0001474B46F42363",
				"nick": "Chillance",
				"description": "Read error: Connection reset by peer",
				"time": "4:43 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Chillance@83.233.182.216",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE5706D5B-E7AB-4D2D-AD73-1ADF4D79D3C6-75542-000147652C7CBD2B",
				"nick": "zapzupnz",
				"description": "haha, when you change the user agent, it gives you a wee iOS toolbar down the bottom on that site",
				"time": "4:44 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEEEEC83E-D09C-4A48-8ACF-E929874B5A25-75542-0001476556B6C818",
				"nick": "zapzupnz",
				"description": "cute",
				"time": "4:44 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L0727D6E2-6C5B-4622-9E86-354D488F52A0-75542-0001477858B8546A",
				"nick": "escoload_",
				"description": "Remote host closed the connection",
				"time": "4:46 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~escoloade@78.129.221.55",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LA2FE1ADD-7276-4EF8-916B-DC486D7AABEC-75542-00014787D1860F58",
				"nick": "doppiabeo",
				"description": "",
				"time": "4:47 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~doppiabeo@217.202.42.222",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF6DE0860-A3EF-43E8-B5F5-32880F70EB08-75542-000147C032F70B6C",
				"nick": "axisys",
				"description": "zapzupnz: safari 4.1.3",
				"time": "4:51 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L47C268AB-0D12-4792-96EB-0517E7EE936B-75542-000147C36A6E451B",
				"nick": "zapzupnz",
				"description": "ah, brill. Safari 5 sans Reader, more or less",
				"time": "4:51 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L89E3FF9A-4AA4-4AC9-94D1-27FA66E27457-75542-000147C40EAEB21B",
				"nick": "axisys",
				"description": "zapzupnz: it gives me a app to download when i choose ipad as the agent",
				"time": "4:51 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF93A8EF5-B252-438E-8F61-232DD6A97577-75542-000147C667DD2B95",
				"nick": "zapzupnz",
				"description": "when you're on the video page? o.o",
				"time": "4:51 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD829EA1E-666F-4412-8532-57A9573E91FB-75542-000147C7A30DA414",
				"nick": "zapzupnz",
				"description": "interesting",
				"time": "4:51 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0242C1A9-9B51-4974-9A86-2A8940367990-75542-000147C7CA99DCB9",
				"nick": "axisys",
				"description": "zapzupnz: yes",
				"time": "4:51 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDDCBB96F-9E0F-4BDD-A17F-770D3B290812-75542-000147CA7EE8CCEC",
				"nick": "zapzupnz",
				"description": "screenshot? :D i'm interested heh",
				"time": "4:52 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L805FDAED-A746-4ACD-8F4A-FFB0B4AE1C84-75542-000147CC52A54B14",
				"nick": "axisys",
				"description": "zapzupnz: sure.. trying",
				"time": "4:52 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE61DA052-A07F-4123-81A0-1CC5B6504157-75542-000147D8A42713E8",
				"nick": "zapzupnz",
				"description": "lol cheers",
				"time": "4:53 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L8D2033C8-217A-4AB1-8BDA-2610652D46BE-75542-000147E07B97EFD4",
				"nick": "Flowerbauer",
				"description": "Ping timeout: 258 seconds",
				"time": "4:53 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~kablooie@85.181.144.24",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgNick",
				"id": "L18DDE024-7719-42F1-B959-6EC16EA4AA2B-75542-000147E5D02D514A",
				"nick": "Bynbo7",
				"description": "Axman6",
				"time": "4:54 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Axman6@pdpc/supporter/student/Axman6",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L99E507C5-5665-48C9-B1CB-6D839968C649-75542-000147F8F05C00C5",
				"nick": "snoopy_minimac",
				"description": "",
				"time": "4:55 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~snoopy@118-46-237-24.gci.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD6EAC567-C456-4692-B891-BA66A7D7DA44-75542-00014801AE73E16F",
				"nick": "zapzupnz",
				"description": "also, if you could go to http://whatsmyuseragent.com/ and verify what your user agent is, just for interest's sake too",
				"time": "4:56 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE5AD0797-33AD-484F-919C-400EB6FAAF83-75542-000148058EFE5A83",
				"nick": "zapzupnz",
				"description": "working around it trying to offer you an app could be easy",
				"time": "4:56 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L837919BC-DFB2-4F92-B855-A1F5E4269B1E-75542-000148066A8F6D9D",
				"nick": "Wally",
				"description": "Whats up with the WD Caviers in 24\" iMacs.",
				"time": "4:56 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD3C170D2-A149-45F7-94E0-CE902FE8BF4A-75542-0001480BEF7E2713",
				"nick": "zapzupnz",
				"description": "which generation of 24\" ?",
				"time": "4:56 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9E498FE0-7571-441D-B452-CE2E89229FF9-75542-0001481548BAFB68",
				"nick": "axisys",
				"description": "zapzupnz: http://picpaste.com/appstore-u7aHp52l.png",
				"time": "4:57 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L310811B3-5096-4B8C-9E19-2A033330BE3B-75542-000148183C49AAB9",
				"nick": "zapzupnz",
				"description": "haha, fun",
				"time": "4:57 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L44F9789F-4810-4E9C-8531-016F75B9584E-75542-0001481E091D2583",
				"nick": "oxoocoffee",
				"description": "Quit: oxoocoffee",
				"time": "4:58 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~oxoocoffe@75-149-67-59-Illinois.hfc.comcastbusiness.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0D2CE806-E71F-4E6E-810B-D62F611C8AE4-75542-0001482121B8D732",
				"nick": "Wally",
				"description": "zapzupnz: early 2008",
				"time": "4:58 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LE6659FCD-578D-499C-A445-4006E0806CA6-75542-00014821D3A6A7AF",
				"nick": "heliostatic",
				"description": "Remote host closed the connection",
				"time": "4:58 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~heliostat@204.14.239.221",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L023F43A5-2FE0-4742-B598-4CF3900CE676-75542-00014823071D33DE",
				"nick": "Wally",
				"description": "The drive is corrupted with a fresh image..",
				"time": "4:58 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L370A75BD-3FBD-4C49-A798-13CADB4D826D-75542-00014824B928DE50",
				"nick": "Wally",
				"description": "they just tend to die",
				"time": "4:58 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB878B118-6126-42D2-8E32-C3D6901FDA02-75542-000148263D0DC598",
				"nick": "Wally",
				"description": "i'm going to uncorrupt it and throw a heap of tests at it",
				"time": "4:58 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L83220525-6301-46F6-BF52-E7B2E22F019A-75542-0001483015EEBDDB",
				"nick": "travislopes",
				"description": "",
				"time": "4:59 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~TL@pool-96-228-228-89.tampfl.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L63E5058A-6186-4B9D-9A18-A0656BF88EB7-75542-00014838091209A8",
				"nick": "zapzupnz",
				"description": "you should, have fun",
				"time": "5:00 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L820EE63B-5BDB-4FE3-90FC-9C43A068A1E0-75542-00014838D6BA8DB6",
				"nick": "axisys",
				"description": "zapzupnz: http://picpaste.com/agent-am6ulWL5.png",
				"time": "5:00 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~axisys@ip68-98-175-208.dc.dc.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD59F01B9-DDF1-4E26-9442-D898A2F4AC43-75542-00014839A19DC9BD",
				"nick": "TL",
				"description": "Ping timeout: 246 seconds",
				"time": "5:00 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~TL@pool-96-228-228-89.tampfl.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0BD032E0-7F84-4AA0-8E33-C2B1A7DFF7A3-75542-0001483C0FD2CA67",
				"nick": "zapzupnz",
				"description": "3DS Disk Diagnostic Tool, Wally",
				"time": "5:00 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6779A2C2-536F-4877-B453-57B9157A2777-75542-0001483DD58D26C7",
				"nick": "Wally",
				"description": "is it free?",
				"time": "5:00 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L81449593-6B33-4348-9708-A915D65CCCDA-75542-0001483E5B9634BC",
				"nick": "Wally",
				"description": "xD",
				"time": "5:00 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6EA7B22C-3B01-4EB3-8823-7173AB2445B5-75542-0001483E92B5E142",
				"nick": "Wally",
				"description": "lol",
				"time": "5:00 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L52E6D6D7-CFAB-40D0-BBE5-0EC1A5D96A72-75542-0001483F911EA990",
				"nick": "Wally",
				"description": "smartarse",
				"time": "5:00 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LFE66CBC3-5200-41D7-B3D7-046F584B05B6-75542-0001484332B048ED",
				"nick": "zapzupnz",
				"description": "oh wow its user agent is completely different to what it does for me, axisys lol",
				"time": "5:00 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L10035505-F4EB-4780-9021-406A2294FAD5-75542-0001484334387DEF",
				"nick": "Wally",
				"description": "okay I ran a disk repair and its still not booting.. huzzah",
				"time": "5:00 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LAF6A25A9-9471-49F5-8DBD-0D2B668E4C98-75542-0001484F6ABD762B",
				"nick": "zapzupnz",
				"description": "huzzah",
				"time": "5:01 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE6E87BCD-EF33-436B-8497-C130EA807ED7-75542-000148565A39502E",
				"nick": "stirlingsilver",
				"description": "huzzah",
				"time": "5:02 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~stirlings@67-60-62-39.cpe.cableone.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L1E4F69E8-C32C-44E0-A5B5-BD4E2D8D4948-75542-0001485AF1A7541D",
				"nick": "loadbang",
				"description": "Quit: loadbang",
				"time": "5:02 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~loadbang@host86-147-138-213.range86-147.btcentralplus.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L60ED3AEE-7284-4C59-82D5-1879BEA940CA-75542-00014863225C8E54",
				"nick": "Wally",
				"description": "huzzah",
				"time": "5:03 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB95B0B3D-DF59-4484-8273-6992E05F1DEC-75542-00014865DE17E1FE",
				"nick": "Wally",
				"description": "lol it booted after 5 minutes of waiting.. stuck on blue screen",
				"time": "5:03 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L105E5E8F-CB2D-4EB1-97C9-3533245B262A-75542-0001486ACD62D89A",
				"nick": "r1pp3r",
				"description": "",
				"time": "5:03 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~r1pp3r@188-194-200-166-dynip.superkabel.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L880C9CCC-9A0C-45B1-9C98-E71C95615285-75542-0001486D7BD658D8",
				"nick": "DarkM",
				"description": "",
				"time": "5:03 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~DarkM@81-64-47-60.rev.numericable.fr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L649A9D0A-F247-4770-8FE1-B05A934E7BFC-75542-0001489D99A11622",
				"nick": "FireSt0rM",
				"description": "Read error: Connection reset by peer",
				"time": "5:07 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~FireSt0rM@unaffiliated/firest0rm",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L11E2999C-2649-43E4-B994-F9D4105AE37D-75542-000148A0EA4FBA45",
				"nick": "Wally",
				"description": "zapzupnz lets jog your memory..",
				"time": "5:07 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9087C651-1EB0-46FE-B755-8714CE856B4A-75542-000148A1163D9D69",
				"nick": "FireSt0rM",
				"description": "",
				"time": "5:07 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~FireSt0rM@unaffiliated/firest0rm",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA0BDBC45-784C-42BD-A48E-6408CBC3DED5-75542-000148A340EDFDB3",
				"nick": "Wally",
				"description": "In what goosebumps book did the quote \"Only the best\" appear in",
				"time": "5:07 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L74ECC50D-BDB6-4B05-B442-249B045411F6-75542-000148A6DEB278BE",
				"nick": "lycan",
				"description": "Quit: Linkinus - http://linkinus.com",
				"time": "5:07 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~rd@cpe-67-244-100-198.nyc.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LABFC4571-E629-4317-90F7-D722E59E64BA-75542-000148AA39C90728",
				"nick": "zapzupnz",
				"description": "i dunno, i didn't read that tripe :P",
				"time": "5:08 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD6E38B52-9238-4931-8733-7C1A0F8372DE-75542-000148AB97B91E18",
				"nick": "Wally",
				"description": "haha",
				"time": "5:08 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L90DED13B-C3DF-42F0-B9FD-E733186B14B1-75542-000148AE0A997A19",
				"nick": "frogor",
				"description": "The Horror at Camp Jellyjam",
				"time": "5:08 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LC6C217B2-031F-4691-986A-347B6426E62A-75542-000148AE8EF5997A",
				"nick": "ryaxnb_",
				"description": "",
				"time": "5:08 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ryaxnb@dsl-63-249-87-215.dhcp.cruzio.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L371EC819-2909-48CC-BC0B-3784AB51AD28-75542-000148AEAB8798FA",
				"nick": "Wally",
				"description": ":D",
				"time": "5:08 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA80F9042-7709-4BC6-86BF-1EDC92583480-75542-000148B416C07867",
				"nick": "Wally",
				"description": " how'd you know that frogor? :P",
				"time": "5:08 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L14AB0CFA-673A-4AF7-A2C7-ED3529E60158-75542-000148B689F269FD",
				"nick": "Wally",
				"description": "Google?",
				"time": "5:09 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L054E7B44-8977-4D7D-A74A-F591BC71272A-75542-000148B73933B409",
				"nick": "zapzupnz",
				"description": "i guess he /did/ read that tripe :P",
				"time": "5:09 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LF18433B2-303B-41BE-B138-4865EDA89C4A-75542-000148B8997D9702",
				"nick": "lycan",
				"description": "",
				"time": "5:09 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~rd@cpe-67-244-100-198.nyc.res.rr.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "LBD56AF65-FBB2-4A49-8912-0B3E489B5FCB-75542-000148B99F372BAA",
				"nick": "frogor",
				"description": "did not read it, no.",
				"time": "5:09 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L893BC64D-8D51-4A41-AD1E-159342294F0A-75542-000148BD05E6332F",
				"nick": "frogor",
				"description": "You've seen me in this channel for -how- long, and yet you ask if I use Google?",
				"time": "5:09 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0F7CC877-9860-4446-BE68-0B75110B36A2-75542-000148BF68B0C13C",
				"nick": "zapzupnz",
				"description": "now who was it whose tripe i did read? the australian chap",
				"time": "5:09 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD7741EED-96DB-4523-957E-C2F2B691EB36-75542-000148C1B2141D00",
				"nick": "Wally",
				"description": "::P",
				"time": "5:09 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE4947457-0F7D-4348-B775-C7825C6EA56F-75542-000148C25AADB118",
				"nick": "zapzupnz",
				"description": "the one whose books had pretty much the same theme for titles",
				"time": "5:09 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB225CF44-FFF2-4FFE-A8C9-149C6C9274E6-75542-000148C32090F561",
				"nick": "zapzupnz",
				"description": "Maurice someone, I think",
				"time": "5:09 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LDFA506E9-0D45-472F-A889-31F0EB7ED1B3-75542-000148C61C075DE2",
				"nick": "zapzupnz",
				"description": "I want to say Jennings, but for some reason I think that's someone else",
				"time": "5:10 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L5C6CF14C-ADDA-4BD4-BA26-56D0E7958D27-75542-000148C91EFED0F2",
				"nick": "Wally",
				"description": "Gleitzman",
				"time": "5:10 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L152E967C-3EE4-45EF-89C1-150F50879764-75542-000148CA536DF689",
				"nick": "Wally",
				"description": "&lt;3 the books",
				"time": "5:10 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L88FA8420-44A3-4E9F-B80D-6413A74A3B4B-75542-000148CC67CB49A4",
				"nick": "Wally",
				"description": "Worry Warts is one of my favourites",
				"time": "5:10 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3C76476F-9AEE-4D3B-B0C6-29501A93954F-75542-000148CE12D3ED46",
				"nick": "dleedev",
				"description": "Quit: dleedev",
				"time": "5:10 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~dleedev@207.47.25.98.static.nextweb.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L086EBAE7-F7BB-461C-AA68-E136F16960EE-75542-000148CE629FD8BF",
				"nick": "Wally",
				"description": "or misery guts",
				"time": "5:10 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L259A53EA-9F63-48A5-AF6F-0E1644339C7A-75542-000148CF45FB3D3C",
				"nick": "zapzupnz",
				"description": "ah no, Paul Jennings, that's the one",
				"time": "5:10 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9C4D2298-9E61-46DA-862D-AC48F8FDC944-75542-000148CF9A110010",
				"nick": "frogor",
				"description": "I'm straight up Stephen King for my horror.",
				"time": "5:10 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LF16978D8-82C6-4B60-B11F-281F95F303B8-75542-000148D280D3D9C6",
				"nick": "zapzupnz",
				"description": "but yes, Maurice Gleitzman too",
				"time": "5:11 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE5D9C6D6-3E99-4F94-BFF7-9FBE3BE3C53E-75542-000148D2F6C64695",
				"nick": "Wally",
				"description": "xD",
				"time": "5:11 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC72E84B9-DE6D-4189-B04E-B8966AFF6889-75542-000148DB228A0902",
				"nick": "Hauser",
				"description": "Remote host closed the connection",
				"time": "5:11 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Hauser@69-196-135-163.dsl.teksavvy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6E06845F-6B24-42D8-A6CE-D62D9789B250-75542-000148E63D00C687",
				"nick": "zapzupnz",
				"description": "Paul Jennings and his childrens stories about the impossible happening, and by the end of it someone had their head lopped off with an invisible bottle made of paper or something like that",
				"time": "5:12 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9309AE73-80E7-4A7A-AC58-81BB72F1C78B-75542-000148EC1883E7FD",
				"nick": "Hauser",
				"description": "",
				"time": "5:12 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Hauser@69-196-135-163.dsl.teksavvy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L0E6AAFBE-B85D-4307-9BA4-2DDE239421A6-75542-000148EC8960A58E",
				"nick": "zapzupnz",
				"description": "we had to do close reading on those - it was hard to analyse something that makes no sense lol",
				"time": "5:12 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L667D8C2E-6C63-4EF5-986E-02FE906C6B31-75542-000148F7F21F9EEA",
				"nick": "DainHome",
				"description": "",
				"time": "5:13 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Dain@gai69-4-82-228-194-226.fbx.proxad.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD9F18A30-49EF-4085-BE72-07B9F407B589-75542-000148F7F3CF1A28",
				"nick": "DainHome",
				"description": "Changing host",
				"time": "5:13 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Dain@gai69-4-82-228-194-226.fbx.proxad.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8B0CC70D-1F2C-4997-A097-3EF9B7257831-75542-000148F7F3EDD6A6",
				"nick": "DainHome",
				"description": "",
				"time": "5:13 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Dain@wikipedia/daindwarf",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LEEB201D7-A688-4DE8-A1BB-47918E37A377-75542-000148FF7552EA97",
				"nick": "konfluenzpunkt",
				"description": "Remote host closed the connection",
				"time": "5:14 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~konfluenz@dslb-088-067-059-046.pools.arcor-ip.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LB378F0D9-8189-4D3B-A8F4-BA35581F11AF-75542-00014901717F4395",
				"nick": "sluther",
				"description": "",
				"time": "5:14 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sluther@99-171-101-157.lightspeed.irvnca.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD0BF0EA0-BB34-4DA4-BE16-3BCDD6110CDC-75542-0001491245FDC396",
				"nick": "thebigkiwi",
				"description": "Remote host closed the connection",
				"time": "5:15 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~thebigkiw@cm49.kappa250.maxonline.com.sg",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6EF33C13-77B8-44CF-88B4-5ABF0C8BA609-75542-00014919B2944DC0",
				"nick": "Wally",
				"description": "zapzupnz hence the around the twist TV series :P",
				"time": "5:16 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~John@unaffiliated/sasuke",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L47C81B44-6475-4841-9326-921A3C196399-75542-0001491B389EDB1D",
				"nick": "multiHYP",
				"description": "",
				"time": "5:16 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LC7125B2E-B270-4BB3-AE0F-34E96A09F5B4-75542-00014925CA68AF96",
				"nick": "zapzupnz",
				"description": "ah now, i vaguely remember that",
				"time": "5:17 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L73290992-D8E3-4B09-B516-FA5F2DBA5A4F-75542-0001492C12DB4602",
				"nick": "doppiabeo",
				"description": "Ping timeout: 260 seconds",
				"time": "5:17 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~doppiabeo@217.202.42.222",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L9EF47CB1-8931-4478-BD5A-565A73C79A28-75542-000149322C425003",
				"nick": "zapzupnz",
				"description": "the only australian kids tv programme i remember with any clarity was The Wayne Manifesto",
				"time": "5:17 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L77504D74-902B-4843-8753-3554BA177CC8-75542-00014933A6DC866F",
				"nick": "zapzupnz",
				"description": "and i only remember it because it had a creepy theme song",
				"time": "5:18 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "LB202DA45-71CF-402E-A9E0-B09A8AEC6AE3-75542-0001493DE7D3FA19",
				"nick": "psst",
				"description": "",
				"time": "5:18 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~psst@cpc13-shef11-2-0-cust584.barn.cable.virginmedia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0C030583-A4E3-4F26-B08B-A5715E358576-75542-0001494B8CB95140",
				"nick": "SpecR_",
				"description": "",
				"time": "5:19 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ellanos@190.187.40.112",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LA8A97834-BA49-4D19-BF71-A06D83F56DD6-75542-0001494BB804330A",
				"nick": "SpecR",
				"description": "Read error: Connection reset by peer",
				"time": "5:19 PM",
				"nick_color": "6",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~ellanos@190.187.40.112",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L8BAA20DD-17A1-4CEF-AFDA-6F86E275BD72-75542-0001496071603F7C",
				"nick": "Missingno255",
				"description": "",
				"time": "5:21 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Missingno@adsl-68-125-35-142.dsl.irvnca.pacbell.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L829A67D2-9563-4629-8F48-744E30B6788F-75542-0001496079125456",
				"nick": "Missingno255",
				"description": "Changing host",
				"time": "5:21 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Missingno@adsl-68-125-35-142.dsl.irvnca.pacbell.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LD1696403-9ACE-4E8C-8F99-EA42EDEA8B8C-75542-0001496079397986",
				"nick": "Missingno255",
				"description": "",
				"time": "5:21 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Missingno@unaffiliated/missingno255",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L83B4AB81-9CED-4408-8B10-35827634F513-75542-000149664743600F",
				"nick": "Lyle42",
				"description": "Quit: Quitting!",
				"time": "5:21 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Lyle42@c-69-141-142-184.hsd1.nj.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LCE4C97B8-2693-4658-9013-2F1D90C3EB56-75542-0001496D5E48D350",
				"nick": "zero_lapse",
				"description": "Quit: Computer has gone to sleep.",
				"time": "5:22 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~textual@77-57-217-246.dclient.hispeed.ch",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LBA2DF4CD-B8DF-441F-A0B3-CD2B1599325D-75542-0001497E42CB5C9E",
				"nick": "multiHYP",
				"description": "Quit: multiHYP",
				"time": "5:23 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~multiHYP@unaffiliated/multihyp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L69FBAE54-B9EE-45B0-BF56-D3BFFE7906EE-75542-00014981A1D2C107",
				"nick": "stirlingsilver",
				"description": "Quit: Quit",
				"time": "5:23 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~stirlings@67-60-62-39.cpe.cableone.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L5200D00E-77F5-4BD9-B710-CD2D7BDAA5D2-75542-00014988AF296E64",
				"nick": "jfrisby",
				"description": "",
				"time": "5:24 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jfrisby@216.55.29.174",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3FAD4314-0A0C-4C47-B3C9-C7E76408FAB2-75542-000149982CEE5CB6",
				"nick": "`marianne`",
				"description": "Quit: This computer has gone to sleep",
				"time": "5:25 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~marianne@cpc1-clif8-2-0-cust963.12-4.cable.virginmedia.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L02F15CAA-8F5C-48FB-AEFD-256AD68622ED-75542-0001499D0AFF2B50",
				"nick": "schmity",
				"description": "",
				"time": "5:25 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~schmity@ucb-np2-237.colorado.edu",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LDF22EFFE-5009-4C92-8094-54606BDB1A23-75542-000149A65EAF2D27",
				"nick": "TheNavyBear",
				"description": "Quit: I Quit!",
				"time": "5:26 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Slave@unaffiliated/thenavybear",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L3B7EAD4B-2A33-4104-A15C-309A689E6D15-75542-000149B06D0B24BE",
				"nick": "tgunr",
				"description": "Quit: Computer has gone to sleep.",
				"time": "5:26 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~davec@adsl-108-85-3-168.dsl.ipltin.sbcglobal.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L5DE863FB-2E0F-4FA6-9585-948209C1A662-75542-000149BA852C79E7",
				"nick": "Segnale007",
				"description": "",
				"time": "5:27 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Segnale00@ppp-212-139.98-62.inwind.it",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD238CF01-34F9-46E1-A245-4CBD250415C0-75542-000149C7C6EE7CC5",
				"nick": "RichardP",
				"description": "Ping timeout: 258 seconds",
				"time": "5:28 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~richardp@unaffiliated/richardp",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L9BEFA0ED-D88A-48D4-BB1E-1A07E7F0EDF7-75542-000149D722B7F9FB",
				"nick": "Segnale007",
				"description": "Remote host closed the connection",
				"time": "5:29 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Segnale00@ppp-212-139.98-62.inwind.it",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L1F9450EC-26A7-40A0-81CC-AA49D2F914FC-75542-000149F7B42E327E",
				"nick": "rustymyers",
				"description": "Quit: Good lord, I'm tired.",
				"time": "5:32 PM",
				"nick_color": "11",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~rustymyer@c-98-235-170-33.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgAction",
				"id": "LE89D06BE-5F68-471F-A260-87FA494F8197-75542-000149FC815B7598",
				"nick": "chiper",
				"description": "does a little dance",
				"time": "5:32 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LA5D91316-7ABF-42D9-B605-420BCDCDC0B3-75542-00014A044AF541B7",
				"nick": "chiper",
				"description": "frogor: I've got the foundation for my style in place. &nbsp;I wrote a wrapper that dispatches every linkinus call in the api as an event on the document",
				"time": "5:32 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L465C6272-8CAD-4E31-A4E5-636EC90970E1-75542-00014A081D42C67C",
				"nick": "Gorroth",
				"description": "Ping timeout: 260 seconds",
				"time": "5:33 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~grimw@ool-4579069f.dyn.optonline.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L4205DDD9-9F1A-4E28-9FBF-797B4F488B8A-75542-00014A0E250417B2",
				"nick": "chiper",
				"description": "at the moment all it's doing is spitting out a bunch of console messages, but it's a start",
				"time": "5:33 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LE5F5BA05-6CA4-4EE8-82EA-A00B53203C41-75542-00014A11195F1ABB",
				"nick": "frogor",
				"description": "Coolies",
				"time": "5:33 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L6EB49527-15A0-451B-A5F1-663D5FFCD6F9-75542-00014A1329420C59",
				"nick": "frogor",
				"description": "Now integrate WebGL.",
				"time": "5:34 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L58C92DC1-794E-481E-BBFA-D991CE6903B4-75542-00014A15116E8786",
				"nick": "CPng|N",
				"description": "Quit: Leaving.",
				"time": "5:34 PM",
				"nick_color": "10",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~CPng|N@fw1.enphaseenergy.com",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LD67E63FD-002A-4D1F-B5B6-D4FC933AC80A-75542-00014A152130E800",
				"nick": "chiper",
				"description": "o.O for what?",
				"time": "5:34 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L579F34EB-CA9F-4439-81DA-693445C9DB33-75542-00014A155268876E",
				"nick": "frogor",
				"description": "And rotate your conversations.",
				"time": "5:34 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LCBD12495-B52B-456E-BB3D-09AE4F17B73D-75542-00014A1665140EEA",
				"nick": "Gorroth",
				"description": "",
				"time": "5:34 PM",
				"nick_color": "12",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~grimw@ool-4579069f.dyn.optonline.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD3364A29-12B6-476A-BBA9-8123C9FF9A38-75542-00014A16B50EE128",
				"nick": "MissionCritical",
				"description": "Ping timeout: 240 seconds",
				"time": "5:34 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~MissionCr@unaffiliated/missioncritical",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3ADB208C-56A5-4E55-93CF-BA3681EC244C-75542-00014A1865861738",
				"nick": "chiper",
				"description": "screw webgl, I can do that with a css transform",
				"time": "5:34 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L49077DAB-3692-4000-808C-4D4B539BE299-75542-00014A25A60DA171",
				"nick": "frogor",
				"description": "chiper: Well then don't rotate them, wrap them on a sphere.",
				"time": "5:35 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": true,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LCD9CD420-E815-4DD1-9DDE-4CD50A4B0F90-75542-00014A27E1F7EC84",
				"nick": "chiper",
				"description": "heh",
				"time": "5:35 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L04A6B550-DEF5-4588-9945-AADF4167DB71-75542-00014A285660066E",
				"nick": "frogor",
				"description": "Did you see the Tron WebGL thing?",
				"time": "5:35 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L1145B683-80E9-4B7A-AFE9-0A9EF1C10877-75542-00014A2919D0AF97",
				"nick": "chiper",
				"description": "naw",
				"time": "5:35 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L3A3E9777-7971-4826-884E-4BA5F9ECADBA-75542-00014A32C69B277A",
				"nick": "frogor",
				"description": "chiper: http://cycleblob.com/",
				"time": "5:36 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": true,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L1B9F005B-115C-4BB8-B467-3B5DBCEF80A0-75542-00014A4137498B6C",
				"nick": "dekar_",
				"description": "Quit: This computer has gone to sleep",
				"time": "5:37 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~dekar@drms-4d0146cf.pool.mediaWays.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0C5002C6-8BA8-487F-A036-C8312F208570-75542-00014A4371A362C3",
				"nick": "drubies|mbp",
				"description": "",
				"time": "5:37 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~drubies|m@c-24-131-79-100.hsd1.pa.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LB898E924-D5B0-4F16-8228-6B259B6AD9B2-75542-00014A4446D993CF",
				"nick": "chiper",
				"description": "interesting",
				"time": "5:37 PM",
				"nick_color": 0,
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": true,
				"nick_image": "",
				"context": "#macosx",
				"nick_userhost": "~chiper@ip72-197-215-172.sd.sd.cox.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LC7D75F7A-C8C5-4BBC-BAD6-8B7D15D37527-75542-00014A47D448CDCA",
				"nick": "PokeTehPenguin",
				"description": "Read error: Connection reset by peer",
				"time": "5:37 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Tux@c-71-193-201-220.hsd1.or.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L32608B76-E2FF-4F5A-B7FC-F1DC5C59EB1A-75542-00014A48FCB10466",
				"nick": "MissionCritical",
				"description": "",
				"time": "5:37 PM",
				"nick_color": "13",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~MissionCr@unaffiliated/missioncritical",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L2F4B49CC-3447-4889-9D1F-3A3AA84C492D-75542-00014A566700D61E",
				"nick": "gerrynjr",
				"description": "Quit: Bye!",
				"time": "5:38 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~gerrynjr@gentoo/user/gerrynjr",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBD267CE5-64E5-401B-8FA7-81DB33C5649C-75542-00014A56A3118C91",
				"nick": "zapzupnz",
				"description": "tryin' it out in Safari",
				"time": "5:38 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L20C9C5D1-ABE0-44DD-81E4-D91BE987A4B2-75542-00014A5720BBBC82",
				"nick": "zapzupnz",
				"description": "it's fun",
				"time": "5:38 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LAB087455-52CF-4520-8370-A120746B984C-75542-00014A5A698ACEBF",
				"nick": "jacksonbierfeldt",
				"description": "",
				"time": "5:39 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jacksonbi@98-125-30-250.dyn.centurytel.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L63AE7AE7-1F24-46A6-BE96-EFA3109ABA2B-75542-00014A5C58D6A275",
				"nick": "adiabatic",
				"description": "Ping timeout: 248 seconds",
				"time": "5:39 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~adiabatic@pool-173-58-133-113.lsanca.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L92C2F23D-DF8D-45E3-AA73-3B4521B2D7C4-75542-00014A649462A35C",
				"nick": "jacksonbierfeldt",
				"description": "Is this the right place to get programming help for osx?",
				"time": "5:39 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jacksonbi@98-125-30-250.dyn.centurytel.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L33AD622B-8B15-4EE7-BAE0-F3656CA00D8F-75542-00014A64F186204D",
				"nick": "adiabatic",
				"description": "",
				"time": "5:39 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~adiabatic@pool-173-58-133-113.lsanca.fios.verizon.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgModeChange",
				"id": "L0F4F3CA6-876C-4E47-A1E7-04045B4BC0B2-75542-00014A64F39D6079",
				"nick": "ChanServ",
				"description": "+o adiabatic",
				"time": "5:39 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "ChanServ@services.",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L6DBEBFA8-F989-4AB8-ADD5-F99D821258A5-75542-00014A6E1F3DFF8D",
				"nick": "sfhawk",
				"description": "",
				"time": "5:40 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~hersson@unaffiliated/sfhawk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB5CE64FC-F3A8-438A-B818-7E10198F989E-75542-00014A6E7FEEA3E4",
				"nick": "hersson",
				"description": "Ping timeout: 248 seconds",
				"time": "5:40 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~hersson@unaffiliated/sfhawk",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L2761E58A-20F0-4977-BB00-BCFFB4FEEB5A-75542-00014A6F4924CE9E",
				"nick": "sholt",
				"description": "try #macdev",
				"time": "5:40 PM",
				"nick_color": "18",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~sholt@adium/EarthMkII",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LEC357CDC-3F0C-4601-AC12-F145252DA8D6-75542-00014A70784890FC",
				"nick": "jacksonbierfeldt",
				"description": "Thanks.",
				"time": "5:40 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jacksonbi@98-125-30-250.dyn.centurytel.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "L118FAE1D-9EFD-4D05-88F4-1BC97BFBCD4F-75542-00014A743AF28EBE",
				"nick": "zapzupnz",
				"description": "And #macosxdev",
				"time": "5:40 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgMessage",
				"id": "LBD3DFFF4-79F6-4C14-A3D3-C07E6916F46D-75542-00014A7777B088E6",
				"nick": "zapzupnz",
				"description": "and if your question relates to Xcode and the tools rather than actual development, even consider #iphonedev",
				"time": "5:41 PM",
				"nick_color": "8",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~zap@222-153-117-25.jetstream.xtra.co.nz",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L3372511B-6A94-44D0-9C66-13ACA0B98826-75542-00014A788A62CB34",
				"nick": "PokeTehPenguin",
				"description": "",
				"time": "5:41 PM",
				"nick_color": "15",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Tux@c-71-193-201-220.hsd1.or.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgPart",
				"id": "L46DE65CF-63C9-4B4B-B834-E2F871EAD396-75542-00014A7BCA868AAB",
				"nick": "jacksonbierfeldt",
				"description": "",
				"time": "5:41 PM",
				"nick_color": "16",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jacksonbi@98-125-30-250.dyn.centurytel.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L847107D9-DA7D-4DD9-9BF9-FD826DFDF065-75542-00014A8218578C5A",
				"nick": "CuriosTiger",
				"description": "Remote host closed the connection",
				"time": "5:41 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~stian@mack.bigrig.org",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LEFA73552-4675-4B84-BA59-A5867778F493-75542-00014A839B4DB079",
				"nick": "CuriosTiger",
				"description": "",
				"time": "5:42 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~stian@mack.bigrig.org",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L216E3376-DFDF-46A3-A34A-72A0BCA87495-75542-00014A90EF48BABE",
				"nick": "Axman6",
				"description": "Ping timeout: 246 seconds",
				"time": "5:43 PM",
				"nick_color": "17",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Axman6@pdpc/supporter/student/Axman6",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L0FD6D5B9-64EA-42D1-B4A5-61932B896F71-75542-00014A95E178518B",
				"nick": "kith_",
				"description": "",
				"time": "5:43 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~kith@port-92-193-56-15.dynamic.qsc.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LD6F58A4F-86C6-47C1-9867-A1B45E33A84E-75542-00014A95E3193041",
				"nick": "kith_",
				"description": "Changing host",
				"time": "5:43 PM",
				"nick_color": "20",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~kith@port-92-193-56-15.dynamic.qsc.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L4F37BE07-DE2D-4116-A018-49743EF512A5-75542-00014A95E338963D",
				"nick": "kith_",
				"description": "",
				"time": "5:43 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~kith@unaffiliated/kith",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LB58FA113-A43C-4990-9062-D291F55C1578-75542-00014A960339B61C",
				"nick": "Brisk",
				"description": "Quit: BSOD",
				"time": "5:43 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Brisk@bas1-ottawa11-1176121398.dsl.bell.ca",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LCEA3D346-5D62-4E4D-B4FA-2F0ABD66FC76-75542-00014A968B65D34A",
				"nick": "kith",
				"description": "Ping timeout: 276 seconds",
				"time": "5:43 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~kith@unaffiliated/kith",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LF9EA70E3-8828-496B-811A-3B838F535CC6-75542-00014A9B670044CE",
				"nick": "TPS",
				"description": "",
				"time": "5:43 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Schroeder@c-76-105-101-172.hsd1.ga.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L7B5F0165-EE16-4FB2-8775-A69D8AEAF3A3-75542-00014AA8E0939111",
				"nick": "freedevil",
				"description": "",
				"time": "5:44 PM",
				"nick_color": "3",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~evil@unaffiliated/freedevil",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L47175E9C-42A0-48FB-AA34-6F7664A98281-75542-00014AAD67938590",
				"nick": "Lyle42",
				"description": "",
				"time": "5:45 PM",
				"nick_color": "9",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Lyle42@c-69-141-142-184.hsd1.nj.comcast.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L7134F610-3901-40BD-BE26-AA886F283017-75542-00014AB3038642A0",
				"nick": "TheNavyBear",
				"description": "",
				"time": "5:45 PM",
				"nick_color": "19",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~Slave@unaffiliated/thenavybear",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "LEDA916A9-4F53-4FFE-AC95-E639E76128CD-75542-00014ADE82CC3CBB",
				"nick": "frogor",
				"description": "",
				"time": "5:48 PM",
				"nick_color": "1",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~frogor@unaffiliated/frogor",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L60A5EB89-2EC1-4927-A051-97FDD849A0CA-75542-00014AFA7A29DB18",
				"nick": "Sky[x]",
				"description": "Ping timeout: 276 seconds",
				"time": "5:50 PM",
				"nick_color": "7",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~SkyB0x@tm.213.143.82.45.dc.telemach.net",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L7AD19A79-10C1-4373-AEF9-C10DB9111BC1-75542-00014B043C81B71B",
				"nick": "r1pp3r",
				"description": "Quit: r1pp3r",
				"time": "5:51 PM",
				"nick_color": "14",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~r1pp3r@188-194-200-166-dynip.superkabel.de",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LE78BE6FA-1AAA-4CDE-9691-7133F9E0042B-75542-00014B1403F5A288",
				"nick": "jfrisby_",
				"description": "",
				"time": "5:52 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~jfrisby@216.55.29.174",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L13A5C6BC-F4D6-4C5C-837D-2968C14A2F47-75542-00014B3CFD066CE3",
				"nick": "jfrisby",
				"description": "Ping timeout: 246 seconds",
				"time": "5:55 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~jfrisby@216.55.29.174",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L48D39B29-419C-42C0-AC02-F265D81C8286-75542-00014B62E480561F",
				"nick": "DainHome",
				"description": "Quit: Dain's default quit message",
				"time": "5:58 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~Dain@wikipedia/daindwarf",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "L9F7AFBAC-6E23-4FB5-978F-73330DEEA83A-75542-00014B755BE143B6",
				"nick": "ThugAim",
				"description": "",
				"time": "5:59 PM",
				"nick_color": "4",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~textual@72.252.158.206",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgJoin",
				"id": "LF21B6EC6-6E89-4F80-8372-7D8147723D9C-75542-00014B7944BF1B38",
				"nick": "ivanoats_",
				"description": "",
				"time": "5:59 PM",
				"nick_color": "2",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "#MacOSX",
				"nick_userhost": "~ivanoats@pdpc/supporter/active/ivanoats",
				"unencrypted": false
			}
		}, {
			"action": "style:appendMessage",
			"args": {
				"type": "msgQuit",
				"id": "L13CA2832-72AF-4DF6-9872-9A22E6E617D2-75542-00014B854DCD0CFF",
				"nick": "ckrailo",
				"description": "Quit: Computer has gone to sleep.",
				"time": "6:00 PM",
				"nick_color": "5",
				"extra": "",
				"current": true,
				"highlight": false,
				"starred": false,
				"embed": false,
				"direction": false,
				"nick_image": "",
				"context": "",
				"nick_userhost": "~ckrailo@208.86.167.249",
				"unencrypted": false
			}
		}, {
			"action": "style:scrollTo",
			"args": {
				"target":"bottom",
				"forced": true
			}
		}, {
			"action": "style:scrollTo",
			"args": {
				"target":"bottom",
				"forced": true
			}
		}, {
			"action": "style:focus"
		}, {
			"action": "style:ready"
		}, {
			"action": "style:topicChanged",
			"args": {
				"topic": " Happy Birthday Mac OS X, it is ten now! | Mac OS X 10.6.7: http://support.apple.com/kb/DL1363 | 10.6.7 for the new MacBook Pro: http://support.apple.com/kb/DL1368 | Rules: http://osxwiki.net/mr - keep it friendly | Paste: http://paste.lisp.org/new/"
			}
		}, {
			"action": "style:scrollTo",
			"args": {
				"target":"bottom",
				"forced": false
			}
		}
	];

	actions.each(function (a) {
		Event.fire(document, a.action, a.args);
	});
});