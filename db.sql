CREATE TABLE artists (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE tracks (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    preview_url VARCHAR,
    duration_ms INTEGER,
    image_url VARCHAR
);

CREATE TABLE track_artists (
    track_id VARCHAR,
    artist_id VARCHAR,
    PRIMARY KEY (track_id, artist_id),
    FOREIGN KEY (track_id) REFERENCES tracks(id),
    FOREIGN KEY (artist_id) REFERENCES artists(id)
);

INSERT INTO artists (id, name) VALUES
('37uLId6Z5ZXCx19vuruvv5', 'Hot Chip'),
('73A3bLnfnz5BoQjb4gNCga', 'Bicep'),
('4TIrC99WSg0tOtBCGDjMRY', 'Boogie Belgique'),
('3hteYQFiMFbJY7wS0xDymP', 'Gesaffelstein'),
('5nPOO9iTcrs9k6yFffPxjH', 'Röyksopp'),
('3TXQ1ddouwQAI78hV4hXDj', 'Maceo Plex'),
('1P6U1dCeHxPui5pIrGmndZ', 'Air'),
('5K4W6rqBFWDnAN6FQUkS6x', 'Kanye West'),
('0ONHkAv9pCAFxb0zJwDNTy', 'Pusha T'),
('4tZwfgrHOc3mvqYlEYSvVi', 'Daft Punk'),
('5akVqMzdZOdbMYbE4vNZWD', 'Plaid'),
('51qSeH9HimuYMMQ7qbWGrk', 'Jürgen Paape'),
('7EqE0DBntJS6OUT4gK9W3P', 'Pachanga Boys'),
('6XaCe40GiIt7ujxQvfmvsp', 'Phillipi & Rodrigo'),
('3PhoLpVuITZKcymswpck5b', 'Elton John'),
('7LpofGzdLlzTnTLOFUhDD5', 'Ruby Haunt'),
('0g3NiCRhEv7M4SEDMrpItN', 'Totally Enormous Extinct Dinosaurs'),
('0FvSMtCS6UPO4dfsvFT4Vm', 'Africa Express'),
('2wNRj72waNbqPsa3RvJ6yQ', 'Sibot'),
('1DDCmucJZQp4pXZpCFoTMw', 'Radio 123'),
('2aUErDeR4aoZDvy9ZYMhzO', 'Morena Leraba'),
('0dLSQG3IV62UNVhWUe6mx6', 'Gruff Rhys'),
('7siPLyFwRFYQkKgWKJ5Sod', 'The Dandy Warhols'),
('2uNTCtTH48JmBT5b3PEgcW', 'Lucio Bukowski'),
('4bQKPhS0pAXWAoaQ8Q9bpO', 'Oster Lapwass'),
('4hP7MU4b6uUn1UZQblU9LI', 'Anton Serra'),
('247AfC9pLuqwgpH8Mo96oA', 'Connan Mockasin'),
('5yYScvoiefvoFkk9ulTYHo', 'Café Society'),
('6JBCyQozoQ0ylcCauIexZD', 'Whitey'),
('67QjO1hSxmYnra5p51qjig', 'Croatian Amor'),
('7mKwhB3UiepqzM946jBOyi', 'Lorenzo Senni'),
('6RJSLoaPbwMo58MnK83v8o', 'My Mine'),
('7bBAqNfQpi9M5s3uz6Dwcb', 'Grand Blanc'),
('4e2vkCt29CaALUaIvhQCql', 'Jordon Alexander'),
('08jywfUS0hp8XYlYs0cvz8', 'Rampa');

INSERT INTO tracks (id, name, preview_url, duration_ms, image_url) VALUES
('70X5rI8LU3uUwIX3NE7HYP', 'Crap Kraft Dinner', 'https://p.scdn.co/mp3-preview/aed294e8d398129b19f7fa81b8148aaa63ea29da?cid=b644138492164b009229f271bdc7b751', 394013, 'https://i.scdn.co/image/ab67616d0000b2732beee88e97ca512ec5542fb8'),
('2aJDlirz6v2a4HREki98cP', 'Glue', 'https://p.scdn.co/mp3-preview/2cdf855e1b77f80eb4e9291d0dd55c383f5aa83c?cid=b644138492164b009229f271bdc7b751', 269149, 'https://i.scdn.co/image/ab67616d0000b273d4322a9004288009f6da2975'),
('3MDkws8QGzLrMrWVAbzoXO', 'Every Time', 'https://p.scdn.co/mp3-preview/699b658d2f4c78a94ebb83e2466629a42191f635?cid=b644138492164b009229f271bdc7b751', 241743, 'https://i.scdn.co/image/ab67616d0000b273791630b09247ce55cd250d70'),
('0W2275seLSrfjHxeWmDb6l', 'Aleph', 'https://p.scdn.co/mp3-preview/dfa846821bf8afeb9bd835923d19e464ab37bb34?cid=b644138492164b009229f271bdc7b751', 286826, 'https://i.scdn.co/image/ab67616d0000b2731de5e87e7deee835774de29c'),
('1UgmrHPpLFB0tmg99MGcya', 'Sordid Affair - Maceo Plex Remix', NULL, 478786, 'https://i.scdn.co/image/ab67616d0000b273a8491ae55897087f5612e2d0'),
('0RFduQOfkrP1jhoV0m8US2', 'Surfing on a Rocket', 'https://p.scdn.co/mp3-preview/8ade4e1bc69f0d98e99837430981845b8f32f000?cid=b644138492164b009229f271bdc7b751', 223373, 'https://i.scdn.co/image/ab67616d0000b2736400fab74f28e90759ac8815'),
('3DK6m7It6Pw857FcQftMds', 'Runaway', 'https://p.scdn.co/mp3-preview/3b9daa4ad7b5d0b59cd84858823fec284bf16413?cid=b644138492164b009229f271bdc7b751', 547733, 'https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f'),
('1NeLwFETswx8Fzxl2AFl91', 'Something About Us', 'https://p.scdn.co/mp3-preview/4c607f5ed3cf96c10569b256f8656f8b82d2b4d8?cid=b644138492164b009229f271bdc7b751', 232666, 'https://i.scdn.co/image/ab67616d0000b273b33d46dfa2635a47eebf63b2'),
('5CwpQExnCUlLhKwLhBeTAc', 'Melifer', 'https://p.scdn.co/mp3-preview/570d79481e9cd76f485d8ef22e4421125637b3d3?cid=b644138492164b009229f271bdc7b751', 245080, 'https://i.scdn.co/image/ab67616d0000b273aa17898d4e40a3b462787da5'),
('39cHfFYBVsIgj07SzenRW2', 'Mit Dir', 'https://p.scdn.co/mp3-preview/1807c21fe76bc829e80eca046e508b3538928cbc?cid=b644138492164b009229f271bdc7b751', 285479, 'https://i.scdn.co/image/ab67616d0000b273a62790014564cf68110e986d'),
('6J3aUG1y0zSJXOnsLhx41h', 'Time', 'https://p.scdn.co/mp3-preview/40aa95ffcc807232cd26fc1cf9b457883d8c5107?cid=b644138492164b009229f271bdc7b751', 913214, 'https://i.scdn.co/image/ab67616d0000b2734200ad0c96a4cbd49bc88415'),
('0oR9XRneKUIefSfy5y0IJ8', 'Gueto de Gent', NULL, 306039, 'https://i.scdn.co/image/ab67616d0000b273eef1b6e5cb1d6bdd5d57676a'),
('38zsOOcu31XbbYj9BIPUF1', 'Your Song', 'https://p.scdn.co/mp3-preview/ad1dee49f348b0465eafdf84d9c06af2b2cc8c07?cid=b644138492164b009229f271bdc7b751', 241786, 'https://i.scdn.co/image/ab67616d0000b2734b292ed7c7360a04d3d6b74a'),
('4e4PGzYFYlHzirEtJciAfk', 'Sanctuary', 'https://p.scdn.co/mp3-preview/741a74e54f084a1ece05b5e09ee8610949554857?cid=b644138492164b009229f271bdc7b751', 306624, 'https://i.scdn.co/image/ab67616d0000b27379861ca248902a2a2814de7a'),
('1Dl0E86yorhNRMYZ20RIfY', 'Don’t You Forget About Me', 'https://p.scdn.co/mp3-preview/6edd9be30e44cd80e3700ad3334151e8696c2d2d?cid=b644138492164b009229f271bdc7b751', 348000, 'https://i.scdn.co/image/ab67616d0000b2734f589278b11944c32ba1c2fd'),
('4P38U9lsi2iOZKlq1CbyH4', 'Johannesburg', NULL, 235373, 'https://i.scdn.co/image/ab67616d0000b2733503bef9f734e730d2e22c84'),
('0tcnTUmn7IxllWoC0XohhJ', 'Sleep', 'https://p.scdn.co/mp3-preview/4ff5f285e046f6d240812f387d5863e5af18342f?cid=b644138492164b009229f271bdc7b751', 357000, 'https://i.scdn.co/image/ab67616d0000b2731d6192e7258363e1878cb1d0'),
('2gOkHU7TZ0uDuLP597KZ3y', 'Pinacle', 'https://p.scdn.co/mp3-preview/48724f05e366302d047670157057efa8e170e17c?cid=b644138492164b009229f271bdc7b751', 455712, 'https://i.scdn.co/image/ab67616d0000b2736c67c305a03b0b456b848b4f'),
('38UODEjT3rRr7yNEYrYpUA', 'Forever Dolphin Love (Erol Alkan’s Extended Rework Version 2)', 'https://p.scdn.co/mp3-preview/85dfbdb202be131e5db7751ed97ce08d5fc430d3?cid=b644138492164b009229f271bdc7b751', 608833, 'https://i.scdn.co/image/ab67616d0000b2730b7633d730a1b941fc90054b'),
('2VEZx7NWsZ1D0eJ4uv5Fym', 'Digital Love', 'https://p.scdn.co/mp3-preview/40e47a6f3d812dfb5133af9484e95f4f468d98b1?cid=b644138492164b009229f271bdc7b751', 301373, 'https://i.scdn.co/image/ab67616d0000b273b33d46dfa2635a47eebf63b2'),
('6cH0SUbd7WTIui51L6NxZf', 'Somebody To Love', 'https://p.scdn.co/mp3-preview/64d1a135e3424e7657bb8686d0f3459134ed821c?cid=b644138492164b009229f271bdc7b751', 443040, 'https://i.scdn.co/image/ab67616d0000b2730a2e2f7b29168b7671823943'),
('2fFo3cr969sHB8gBMS5SVo', 'People', NULL, 355567, 'https://i.scdn.co/image/ab67616d0000b273c4436ba96faa2e0f8f68362d'),
('3FlYQ4cpdpT1JObsSy0zy3', 'LA Hills Burn At The Peak Of Winter', 'https://p.scdn.co/mp3-preview/5bc3d4f9e88f76861396a16c0c77bb8e1d283aae?cid=b644138492164b009229f271bdc7b751', 448034, 'https://i.scdn.co/image/ab67616d0000b2730465d732aa51b92227629adb'),
('7aVGlNd40UZOnaT7Gqrjdd', 'Canone Infinito', 'https://p.scdn.co/mp3-preview/5ea285b3f242a0b6443ff7fae61d3e5795acc38c?cid=b644138492164b009229f271bdc7b751', 299413, 'https://i.scdn.co/image/ab67616d0000b273d4dcfe76f3a83328bcbc776d'),
('7FgWlF6VAk4ZpZLaKRWZ7B', 'Hypnotic Tango - Original 7" Version', 'https://p.scdn.co/mp3-preview/8d5d1acbc39298dc1e819a56906981a9ed7eac79?cid=b644138492164b009229f271bdc7b751', 226089, 'https://i.scdn.co/image/ab67616d0000b2732ae29725363007d3a776ea2b'),
('5LY2bzz5XpXiTEQ6MOzcnv', 'Ailleurs', 'https://p.scdn.co/mp3-preview/ec8d83968469b0f1dfe90e17cb8c9926f6f3482b?cid=b644138492164b009229f271bdc7b751', 596920, 'https://i.scdn.co/image/ab67616d0000b273b775f8b6618eba62eb38a8ca'),
('2C0gvcWSmU3JGsORO2HjjM', 'E36', 'https://p.scdn.co/mp3-preview/3ac3740881839bbc955b9f32809bb452779e6b00?cid=b644138492164b.aspx?cid=b644138492164b009229f271bdc7b751', 181026, 'https://i.scdn.co/image/ab67616d0000b273540e3204b8bfcb87127d6a4e'),
('1aXWYqpdI601RhN7dhLSuR', '2000', 'https://p.scdn.co/mp3-preview/1b42cf6c278acae42d62623bccc5e2b49eef3c99?cid=b644138492164b009229f271bdc7b751', 376585, 'https://i.scdn.co/image/ab67616d0000b273e7b027b3b183d19ad98c47ca');

INSERT INTO track_artists (track_id, artist_id) VALUES
('70X5rI8LU3uUwIX3NE7HYP', '37uLId6Z5ZXCx19vuruvv5'),
('2aJDlirz6v2a4HREki98cP', '73A3bLnfnz5BoQjb4gNCga'),
('3MDkws8QGzLrMrWVAbzoXO', '4TIrC99WSg0tOtBCGDjMRY'),
('0W2275seLSrfjHxeWmDb6l', '3hteYQFiMFbJY7wS0xDymP'),
('1UgmrHPpLFB0tmg99MGcya', '5nPOO9iTcrs9k6yFffPxjH'),
('1UgmrHPpLFB0tmg99MGcya', '3TXQ1ddouwQAI78hV4hXDj'),
('0RFduQOfkrP1jhoV0m8US2', '1P6U1dCeHxPui5pIrGmndZ'),
('3DK6m7It6Pw857FcQftMds', '5K4W6rqBFWDnAN6FQUkS6x'),
('3DK6m7It6Pw857FcQftMds', '0ONHkAv9pCAFxb0zJwDNTy'),
('1NeLwFETswx8Fzxl2AFl91', '4tZwfgrHOc3mvqYlEYSvVi'),
('5CwpQExnCUlLhKwLhBeTAc', '5akVqMzdZOdbMYbE4vNZWD'),
('39cHfFYBVsIgj07SzenRW2', '51qSeH9HimuYMMQ7qbWGrk'),
('6J3aUG1y0zSJXOnsLhx41h', '7EqE0DBntJS6OUT4gK9W3P'),
('0oR9XRneKUIefSfy5y0IJ8', '6XaCe40GiIt7ujxQvfmvsp'),
('38zsOOcu31XbbYj9BIPUF1', '3PhoLpVuITZKcymswpck5b'),
('4e4PGzYFYlHzirEtJciAfk', '7LpofGzdLlzTnTLOFUhDD5'),
('1Dl0E86yorhNRMYZ20RIfY', '0g3NiCRhEv7M4SEDMrpItN'),
('4P38U9lsi2iOZKlq1CbyH4', '0FvSMtCS6UPO4dfsvFT4Vm'),
('4P38U9lsi2iOZKlq1CbyH4', '2wNRj72waNbqPsa3RvJ6yQ'),
('4P38U9lsi2iOZKlq1CbyH4', '1DDCmucJZQp4pXZpCFoTMw'),
('4P38U9lsi2iOZKlq1CbyH4', '2aUErDeR4aoZDvy9ZYMhzO'),
('4P38U9lsi2iOZKlq1CbyH4', '0dLSQG3IV62UNVhWUe6mx6'),
('0tcnTUmn7IxllWoC0XohhJ', '7siPLyFwRFYQkKgWKJ5Sod'),
('2gOkHU7TZ0uDuLP597KZ3y', '2uNTCtTH48JmBT5b3PEgcW'),
('2gOkHU7TZ0uDuLP597KZ3y', '4bQKPhS0pAXWAoaQ8Q9bpO'),
('2gOkHU7TZ0uDuLP597KZ3y', '4hP7MU4b6uUn1UZQblU9LI'),
('38UODEjT3rRr7yNEYrYpUA', '247AfC9pLuqwgpH8Mo96oA'),
('2VEZx7NWsZ1D0eJ4uv5Fym', '4tZwfgrHOc3mvqYlEYSvVi'),
('6cH0SUbd7WTIui51L6NxZf', '5yYScvoiefvoFkk9ulTYHo'),
('2fFo3cr969sHB8gBMS5SVo', '6JBCyQozoQ0ylcCauIexZD'),
('3FlYQ4cpdpT1JObsSy0zy3', '67QjO1hSxmYnra5p51qjig'),
('7aVGlNd40UZOnaT7Gqrjdd', '7mKwhB3UiepqzM946jBOyi'),
('7FgWlF6VAk4ZpZLaKRWZ7B', '6RJSLoaPbwMo58MnK83v8o'),
('5LY2bzz5XpXiTEQ6MOzcnv', '7bBAqNfQpi9M5s3uz6Dwcb'),
('2C0gvcWSmU3JGsORO2HjjM', '4e2vkCt29CaALUaIvhQCql'),
('1aXWYqpdI601RhN7dhLSuR', '08jywfUS0hp8XYlYs0cvz8');