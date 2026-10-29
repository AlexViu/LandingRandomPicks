// Mapas en rotación de los dos servidores, para /mapas/ y /novedades/.
//
// Es una foto fija, no se consulta en directo: la lista sale de la configuración de votación de cada servidor
// (rtv_maps.json + colección de Workshop, menos los mapas excluidos) y las imágenes de Steam Workshop.
// Para actualizarla hay que regenerar este fichero y cambiar MAPS_UPDATED.

export const MAPS_UPDATED = '29 de octubre de 2026';

export type MapCategory = 'course' | 'arenas' | 'equipos' | 'especial' | 'movimiento';

export interface ServerMap {
  /** ID de Steam Workshop. */
  id: string;
  /** Nombre tal y como sale en la votación (es lo que acepta !nominate). */
  name: string;
  /** Ruta de la imagen de portada en images.steamusercontent.com/ugc/. */
  img: string;
  category?: MapCategory;
  /** Añadido a la rotación en octubre de 2026. */
  isNew?: boolean;
  /** Suscripciones en Workshop (solo surf, para ordenar por popularidad). */
  subs?: number;
}

export const MINIGAMES_MAPS: ServerMap[] = [
  { id: '3070447697', name: 'mg_simpsons_course_v2', img: '2511395101446808553/80A2B51691F2AAEDAEB7779812D7ED1C56FF7E0D/', category: 'course' },
  { id: '3486710717', name: 'mg_weapons_case_arenas', img: '18342754780052439338/BEC29A75AEDB0E66528AFED8EABC5EF14A175A54/', category: 'arenas' },
  { id: '3206261435', name: 'mg_kegs_course [MG]', img: '12274199346897899047/1D20685154B4D279825FEDB0F1D56B1FF715F15F/', category: 'course' },
  { id: '3070896876', name: 'mg_minecraft_course_jb', img: '12262808063321024901/F183585FBE1068FA6E155688726429F8BF83FE25/', category: 'course' },
  { id: '3216834237', name: 'mg_dicore_course', img: '11567590939997000610/7A1E0C9781885F0CD21FD74ED396C0573D9C41C0/', category: 'course' },
  { id: '3161554251', name: 'mg_skygrass_balkanstar', img: '12976067115798462089/CBD9011C502E05A14A2CEE3ABADF19F69BB5589D/', category: 'course' },
  { id: '3239388553', name: 'mg_colors_cube', img: '16432158182154714/4BBDE15415A93D6B2F6188794DFA56AD7236E530/', category: 'course' },
  { id: '3553174829', name: '100 Traps | Challenge', img: '17772337525839234936/9552B2B87C2CEDC6571BA6A957E3C84DBF0F68F3/', category: 'course' },
  { id: '3495972334', name: 'mg_runordie_final', img: '10714603407359217669/165E1BDE4753CFB0BEE5F900895E6A2D798E9DEE/', category: 'course' },
  { id: '3364078334', name: 'mg_bob2_t', img: '56953601810075809/60DCA1605D1E010AEE9CEA90440742783760999A/', category: 'course' },
  { id: '3510508201', name: 'mg_zelda_hyrule_castle_course', img: '13202354697330999910/9B6BE2A87DBD888D7538D3094F5FDE6CE9A11446/', category: 'course' },
  { id: '3311944920', name: 'mg_lego_course_redone', img: '15937778009344884944/C961C88C15B961E2FA2C5CE897D9C6E64FEE444B/', category: 'course' },
  { id: '3218453973', name: 'mg_nimafa_2_final', img: '15529237447485635078/237148028A4F3057122B5806E60954793BE24467/', category: 'course' },
  { id: '3249980603', name: 'mg_ecliptic_v4', img: '12851844930308383282/C3311E72E15A6583AEE7C26BAB833D013ADAEB48/', category: 'course' },
  { id: '3166488259', name: 'mg_sonic_islands_v4', img: '2446090554607433325/6C8CD328132041152AC3FADE0CCC0F65BB9A67A1/', category: 'course' },
  { id: '3497915784', name: 'mg_siberdev_2', img: '9573658428051232076/137AB15CFD85AF61FD42F1D4DBB7B5776005A58E/', category: 'course' },
  { id: '3502219570', name: 'mg_galaxy_course_csgo', img: '14253979871068386473/4BA3CE56A2451E6592C8E97FC5EF4725E755DA83/', category: 'course' },
  { id: '3070434475', name: 'mg_circle_course_v3', img: '2485505196356625607/35444644BC1EC950DADEA7AF7E9BEEE3CB66DC0C/', category: 'course' },
  { id: '3070444679', name: 'mg_draw_course_v3', img: '2352636242230895120/7C19A6390B9826926886BEC5295F17D25D32E964/', category: 'course' },
  { id: '3748780325', name: 'mg_brick', img: '13792735617921572071/6F4456C82E4027943F241F729F5DAE7A74C5F7C3/', category: 'course' },
  { id: '3070464801', name: 'mg_metal_course_2_v2', img: '2491133596368433617/AFB25446414E2FA946A9AB5444CFA4BDB517EAC5/', category: 'course' },
  { id: '3070464208', name: 'mg_metal_course_v3', img: '2491133596368470252/0FAADD28E8B8DEF6DD6080116DB497BE09D0C7B2/', category: 'course' },
  { id: '3660277923', name: 'bhop_sporulated', img: '9720495366489421844/EF28A0FD20EC8A82ABB4DBEC871CAFFEDA5208B2/', category: 'movimiento' },
  { id: '3608644625', name: 'Smash Lego Copter[FUN]', img: '13699563292505070566/9D1E809F615EC97BE8B1DFA02A736D3CF06F4936/', category: 'equipos' },
  { id: '3188024686', name: 'mg_legospace_multigames [MULTIGAMES]', img: '2467482097954827442/CFF07992D977E8DA83B33B60C9B86A72736E2CFB/', category: 'arenas' },
  { id: '3070455802', name: 'mg_alley_course_v2', img: '2909225719742894/9DC7FD5097DC23BFE259213CF980ACCAAD7CB372/', category: 'course' },
  { id: '3494238385', name: 'mg_lego_course_3', img: '14729792029036962730/D78837F2FDEED8D06910ED19C12FC4A0886ECF32/', category: 'course' },
  { id: '3495183956', name: 'mg_zelda_kokiri_course', img: '11003351979529742040/C153BB5C0CAD929F281BE7440C23CDE2C4A31D46/', category: 'course' },
  { id: '3260899141', name: 'surf_legends_lite', img: '2465237897204393950/4F71839537AE8522EC8215CC7D95E45800277E2E/', category: 'movimiento' },
  { id: '3775608135', name: 'mg_mansion', img: '10373147095478552653/134DC81C86A611751C11657E826F94BC5B3FF87C/', category: 'course' },
  { id: '3070441621', name: 'mg_school_course_v3', img: '10305267881916148451/8317AAF1D0E5696135CFA314255A2D4F4650A95D/', category: 'course' },
  { id: '3070445185', name: 'mg_glave_course_v2', img: '2296340612970005401/4323554591665B89FF9D92A01C11B2DF41C08B0A/', category: 'course' },
  { id: '3070451616', name: 'mg_sky_realm_v3', img: '2485505196356614086/E00AAD3B259B1896A801AC39CD2A58B50FD2F3DA/', category: 'course' },
  { id: '3070452642', name: 'mg_sonic_course_v2', img: '16189023948593414826/91651613F6E5A9F73556E1A11224E4D6D8C89950/', category: 'course' },
  { id: '3070455191', name: 'mg_nxr_course_v2', img: '2511395101443845748/EDD398E3B65B09D3914AEC008B9CC8EEEAA27C5E/', category: 'course' },
  { id: '3070458707', name: 'mg_last_light_v3', img: '10292399227915300745/AC95994C95FD3B35CF3C4D79B5F1C0B4921B642A/', category: 'course' },
  { id: '3070463151', name: 'mg_metro_course_v2', img: '2511395101446698329/B518E72D3BCC0682B29D1E81B35F56960A7236E6/', category: 'course' },
  { id: '3070622716', name: 'mg_小巷_重制版', img: '15441947303787824266/426A433182A17049C31E0641DFBFF53DDBA60EEE/', category: 'course' },
  { id: '3075574739', name: '[娱乐闯关]mg_Space_Course', img: '10468442809296019333/220A6244F432B62AAF898600A9E61BF2CF67BCC8/', category: 'course' },
  { id: '3104697349', name: 'MG Damons Course', img: '2298587339964054596/734A73F6DADB0DD3A69BB4C355E6811EF7165B68/', category: 'course' },
  { id: '3129272566', name: 'QUBE [MiniGames]', img: '2301967354075490806/4BBFD44F4445B24B665071CFAB68E559AAF9330C/', category: 'course' },
  { id: '3173691991', name: 'SAW_128 [COURSE]', img: '10640260437684546777/90D70B762AFEC9AC8F89B3515EC8B8758490AC5E/', category: 'course' },
  { id: '3198011377', name: 'Sewerage | Parkour', img: '2428076156115587085/21D4A911D167E6060BC4081DEDE776B57DB2A49C/', category: 'course' },
  { id: '3214872987', name: 'MG_ZEIZEIII [MiniGames]', img: '13948198756137093439/974F5BFC0F726AC87D8E00AE23F4CCC33C1BF67F/', category: 'course' },
  { id: '3268022349', name: 'mg_reverse', img: '11196514787485170479/B7606CA285A0169C064F4DB2887C2F88D19283BB/', category: 'course' },
  { id: '3273716863', name: 'mg_blanc', img: '10561186205708700822/884C6A4BFC545EAAE782B3EF09B251B5EFC455E3/', category: 'course' },
  { id: '3278023104', name: 'mg_slowdown', img: '17420525412007395751/65762B341FE5B345AB8F97C2C5AD998521868B50/', category: 'course' },
  { id: '3071726325', name: 'Bhop_Colour', img: '17111013034879439453/B6063D7C83ED7646B9D41E3BF2924DAACBF7E3DA/', category: 'movimiento' },
  { id: '3131572633', name: 'MARIO GALAXY [MiniGames]', img: '2301967354068469216/E1C4C88CB90924796241DB9FD56C94CB7F7C4669/', category: 'course' },
  { id: '3812274785', name: 'mg_thesimpsons', img: '16485999428720864138/3D0854EBC73CFBA63FFB39B1BA3FFD5F0061C2EA/', category: 'course' },
  { id: '3082120895', name: 'MG Skeet Multigames', img: '2441586999443330097/8BA3441D49A93780A502896ABA37A1719C71FAC7/', category: 'arenas', isNew: true },
  { id: '3164611860', name: 'Deathrun Playground', img: '13636035830787673027/339E0A979295F0A587E678EB61F141045A90AB99/', category: 'equipos', isNew: true },
  { id: '3297768125', name: 'mg_bobiii_reborn', img: '2488886489790254768/FF9E65C9D5CC23DE2F85A9EF7344B6EBDD80F0ED/', category: 'course', isNew: true },
  { id: '3305778863', name: 'Deathrun Jigsaw', img: '2522664248087350073/989CAF5431DBBF55843DEBE4E36512651E8E19AC/', category: 'equipos', isNew: true },
  { id: '3353084171', name: 'Deathrun Playground Halloween', img: '13889074924668236842/3B00FCE09691E9248994F9B01A51ECC95BAC5C29/', category: 'equipos', isNew: true },
  { id: '3547509803', name: 'Minigolf KraKer', img: '9724090380737464352/DC8C5800C223F39302CD2874BA5684B1099BEBD2/', category: 'especial', isNew: true },
  { id: '3574953628', name: 'mg_castle_course', img: '13079884624709429097/071AEE9B9AD8343E42B0710B2A8EFEA8CC7B44DE/', category: 'course', isNew: true },
  { id: '3581302074', name: 'mg_savethebacon_course_p', img: '11083937145274257385/3A398AEB44779CB80224A23BE7D844D95C8238D6/', category: 'course', isNew: true },
  { id: '3605492514', name: 'mg_ruinztrap_course', img: '12133038306886142234/D9D425BB31B27454B07A1A7774814B333723AEAD/', category: 'course', isNew: true },
  { id: '3610891358', name: 'mg_yourstory_t', img: '15229518130116606179/766611E7C64DB132658C21169A1C1BFF74512B4F/', category: 'course', isNew: true },
  { id: '3616300761', name: 'mg_tomorrow_never_comes_cs2', img: '11661838818486694344/26BB9EB2BDDAE45B5CA955DC929DAAD2F68980CD/', category: 'course', isNew: true },
  { id: '3618292363', name: 'mg_cave_palace', img: '12275208005861624746/71CC4787827936F1B242B6FFC124BE2C9DE1D2A8/', category: 'course', isNew: true },
  { id: '3635077536', name: 'mg_minecraft_home1_red', img: '14940818512389307100/6417D39F115AE37296B2D4A636AF82089AA5C979/', category: 'course', isNew: true },
  { id: '3636731969', name: 'mg_minecraft_home2_red', img: '9294837046652063443/21E0373C5F8DF318379A56C4661A2E676BB78CE1/', category: 'course', isNew: true },
  { id: '3721288132', name: 'mg_suqie_huluanshijie_plus', img: '16867611126029572219/034C58B686F2043608215F9750520D10839980ED/', category: 'course', isNew: true },
  { id: '3722398929', name: 'bhop_halloween_sm', img: '10588328105906566959/B0DF12795EF69625EFD4273CD0E1FB53CEE267F1/', category: 'movimiento', isNew: true },
  { id: '3761051036', name: 'Smash Minecraft Cannons[FUN]', img: '16798468955199166054/EBDB7BFD048FBEE0650A160A8AC54C782327A21A/', category: 'equipos', isNew: true },
  { id: '3775571162', name: 'mg_dora_course_v1', img: '11113362249292885323/FC945C6A728863A0108AB504EACFFE39ABC92D56/', category: 'course', isNew: true },
  { id: '3781662899', name: 'mg_backrooms_lost', img: '13349114079700961234/F8A4AE2CCF058B1697C37E37E2563E491FB63FB8/', category: 'especial', isNew: true },
  { id: '3817845887', name: 'mg_savetheisland_course_reskin', img: '16260143505735570110/225150E8E3D5D2679703CCBE1134CDDD4D032249/', category: 'course', isNew: true },
  { id: '3818524727', name: 'mg_acrophobia_course_v2', img: '12098080386278643304/C0AB4E074CF16791CBD7A9791F29FBFFEA74B28E/', category: 'course', isNew: true },
  { id: '3820739220', name: 'mg_euphoria', img: '16161056286687868048/F29B3A9A7BA5186D99C6F6386360D13CE311B837/', category: 'course', isNew: true },
  { id: '3822775043', name: 'mg_metal_course_level', img: '9977912141587354601/96D29BA94DBB8A187F545B6AB6469F295A8EB9F0/', category: 'course', isNew: true },
  { id: '3823346380', name: 'mg_adev', img: '17925554134792104910/7619A7A50B77199851E50BF6B1F8C53D088CF8DB/', category: 'course', isNew: true },
  { id: '3823346391', name: 'mg_wipeout_course_easy', img: '10679264318072657811/2812FB3CF90C9C13FD226347DDC1D50EE573EB26/', category: 'course', isNew: true },
  { id: '3824131816', name: 'mg_mario_journey', img: '16512308062252491871/D29AF435E3261559FC0780230C511C8F226E212E/', category: 'course', isNew: true },
];

export const SURF_MAPS: ServerMap[] = [
  { id: '3073875025', name: 'surf_utopia_njv', img: '12527376807886635292/DD5B5303B5A81AFD0C7BD030B44A2B76F1338065/', subs: 1090922 },
  { id: '3076153623', name: 'surf_kitsune', img: '49076107518526836/D4E7723E0EB2B7D9F994424876410E6EA014294B/', subs: 921422 },
  { id: '3133346713', name: 'surf_boreas', img: '10652788858713417151/CD0B665043EC18AC2A7D3114018A5E8BB64639C8/', subs: 808219 },
  { id: '3129698096', name: 'surf_nyx', img: '18419579347613467045/D5DED4C92CC888408AC3F2ED7B82B3DEDFD462AD/', subs: 455650 },
  { id: '3255589335', name: 'surf_aquaflow', img: '49071121913650696/8CA4440C2A75820C98ABF692B37C3E89AA55DF8E/', subs: 153677 },
  { id: '3581092479', name: 'surf_frosty', img: '15547878974875878833/230348F24D2C7FFF58D55BB4AF5982852EDA7C6F/', subs: 69128 },
  { id: '3292018151', name: 'surf_how2surf', img: '40068455097241560/BD0A4C4C43A9E07ED1F5AAAADC37DE31279BAC6A/', subs: 41012 },
  { id: '3746469340', name: 'surf_quest', img: '10446556073079081253/E31B390C4A6F3C8FE63202873D3154FE1F2E62E2/', subs: 39583 },
  { id: '3655929954', name: 'surf_happyhands2', img: '17819008011486205467/6E7FECCBD62C87DFE3FA58FA5C2A64B6DA7137B4/', subs: 26435 },
  { id: '3617159277', name: 'surf_insideout', img: '15691983189908882585/6DE2AAA1681DC581AA49C109ACF193CB561B9ED1/', subs: 20609 },
  { id: '3606012358', name: 'surf_beginner_lin', img: '16850484126293306443/E8FE1003C465874B2C7FE4C97BCA3DD8D3CD76A4/', subs: 17847 },
  { id: '3622331520', name: 'surf_pantheon', img: '15204665337924150715/2D55FFA5FB7428AF1939C0FEFBE22A1D5F9B72DA/', subs: 17414 },
  { id: '3628814857', name: 'surf_presmon', img: '9787574127699095288/92AEF2B3F655F0AB0227C2B0244843FEA0B38AE8/', subs: 16008 },
  { id: '3649200027', name: 'surf_intothewild', img: '11952765771306632769/ACC38561B23632C8F4773F338AA08C3391A8D6AC/', subs: 13612 },
  { id: '3605338733', name: 'surf_whoknows', img: '11348490682478744243/E83C3533F65B153F6F2E943EA2FBC45BC9FE5D7E/', subs: 12671 },
  { id: '3605899620', name: 'surf_whoknows2', img: '16181209304474691724/482D2D7EDA6FB815DA545B7816FE403DA01C6C50/', subs: 12148 },
  { id: '3623696313', name: 'surf_stick', img: '12678903221437465188/C694F094EF43EA9BB2B4E729EA9DDE0EBC67D7B7/', subs: 10728 },
  { id: '3711242202', name: 'surf_mesa', img: '13047283208710528994/77D6BA916D4E7A7B5EF73056226DD6CC5FB88B34/', subs: 5435 },
  { id: '3757987914', name: 'surf_the_wave', img: '10469370153687236829/B30FF43B019D1739BF27503DA5A3E72E080BB633/', subs: 2076 },
  { id: '3809010046', name: 'surf_kitsune2', img: '11761099481601193214/413F2D7D3187614D9AB045C26C0D6D72CE5A7AEC/', subs: 1061 },
];

export const workshopUrl = (id: string) => `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`;
export const thumbUrl = (img: string) =>
  `https://images.steamusercontent.com/ugc/${img}?imw=480&imh=270&ima=fit&impolicy=Letterbox&letterbox=true`;
