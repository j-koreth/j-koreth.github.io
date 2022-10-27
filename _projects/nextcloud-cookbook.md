---
title: Nextcloud Cookbook
date: 2022-10-10 00:00:00 Z
name: Nextcloud Cookbook
summary: Nextcloud Cookbook Mobile Client written in Flutter
mytags:
- iOS
- Flutter
- Dart
github: https://github.com/Teifun2/nextcloud-cookbook-flutter
cover: assets/images/nextcloud-cookbook/2732x2048bb.png
--- 
<center>
<a href="https://apps.apple.com/us/app/nextcloud-cookbook/id1619926634?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1665360000&h=87d711018a9b4c4324f6b4d0f036790f" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>
</center>

<br>

<center>
  <!-- <img src="https://tools-qr-production.s3.amazonaws.com/output/apple-toolbox/256571b5eff9b2dbf2208746df27600b/23592ffb84186cf797783c6921281cdf.png"> -->
   <img style="width: 200px" tabindex=1 src="https://tools-qr-production.s3.amazonaws.com/output/apple-toolbox/256571b5eff9b2dbf2208746df27600b/23592ffb84186cf797783c6921281cdf.png"/><span class="f"><img src="https://tools-qr-production.s3.amazonaws.com/output/apple-toolbox/256571b5eff9b2dbf2208746df27600b/23592ffb84186cf797783c6921281cdf.png" /></span>
</center>
Ported a Flutter app to iOS and published to the app store as well as contributed timer features.

<script src="{{ 'assets/js/photogrid.js' | relative_url}}"></script>

<style>
  .f,.f *{position:fixed;max-width:100%;max-height:100%;top:50%;left:50%}
.f *{transform:translate(-50%,-50%)}
.f{display:none;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8)}
*:focus+.f{display:block}
img{cursor:pointer}
</style>

<div id="photogrid" class="grid-container">
      <div class="grid-item actions">
          <a id="open" class="clickable button" href="" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i> Open</a>
          <div>
              <button id="prev" class="clickable button" onclick="nextcloudcookbook.prevphoto()">Previous</button>
              <span style="margin: 0px 50px;"><span id="page_num"></span> / <span id="page_count"></span></span>
              <button id="next" class="clickable button" onclick="nextcloudcookbook.nextphoto()">Next</button>
          </div>
          
          <a id="download" class="clickable button" href="" download><i class="fa fa-download" aria-hidden="true"></i> Download</a>
      </div>
      <div class="grid-item"> 
        <img style="width: 300px" tabindex=1 src=""/><span class="f"><img src="" /></span>
      </div>
  </div>

  <script type="text/javascript">
   const nextcloudcookbook = new PhotoGrid('photogrid', ['{{ 'assets/images/nextcloud-cookbook/1242x2688bb-2.png' | relative_url}}', '{{ 'assets/images/nextcloud-cookbook/1242x2688bb-3.png' | relative_url}}',  '{{ 'assets/images/nextcloud-cookbook/1242x2688bb-4.png' | relative_url}}',  '{{ 'assets/images/nextcloud-cookbook/1242x2688bb-5.png' | relative_url}}', '{{ 'assets/images/nextcloud-cookbook/1242x2688bb.png' | relative_url}}'])
</script>