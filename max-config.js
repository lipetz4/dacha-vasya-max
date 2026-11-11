// MAX mini app settings. Copied to dist/max/max-config.js AS IS (not minified): можно править прямо на хостинге, без пересборки.
window.MAX_CONFIG={
 bot:'',                       // имя бота в MAX (как в ссылке https://max.ru/<bot>), нужно для ссылки «Пригласить друга»
 ads:{
  enabled:true,                // общий выключатель рекламы (false = рекламы нет совсем)
  // Рекламная сеть Яндекса (РСЯ), «Реклама на сайтах» -> домен хостинга игры -> блоки. Пусто = реклама выключена, кнопки за рекламу скрыты.
  rewarded:'',                 // блок Rewarded, платформа «Мобильная» (touch), например 'R-A-1234567-1'
  interstitial:'',             // блок «Полноэкранный», платформа «Мобильная» (touch), например 'R-A-1234567-2'
  rewardedDesktop:'',          // необязательно: Rewarded для десктопной версии MAX (platform desktop)
  interstitialDesktop:''       // необязательно: полноэкранный для десктопа
 },
 interstitial:{firstAfterSec:300,minGapSec:210,afterRewardSec:90}, // частота межэкранной рекламы
 api:'https://79-174-12-35.sslip.io/api',          // игровой сервер: промокоды и рейтинг. Пусто = промокоды/рейтинг выключены
 apiAlt:'https://tg-relay.lipetz4.workers.dev/api', // запасной адрес сервера
 publicUrl:'https://vk.ru/public37414068', // паблик Васи в ВК (кнопка «Подпишись на паблик Васи в ВК»)
 subBonus:true,               // маленький бонус «спасибо за визит» в паблик (3 кристалла + 15 энергии); false = кнопки нет
 promoCodes:true,             // кнопка «🎁 Промокод» в настройках; false = скрыта
 headerColor:'#2b4a1e'
};
