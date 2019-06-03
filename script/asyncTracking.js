const _AnalyticsCode = 'UA-135272206-3';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);

(function () {
  const ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();