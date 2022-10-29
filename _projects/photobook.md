---
title: Photobook
date: 2022-08-10 00:00:00 Z
name: Photobook
summary: Example photobook that uses firebase for authentication and pulling images
  with caption.
mytags:
- iOS
- Android
- Flutter
- Dart
---

<div id="photobook" class="grid-container">
      <div class="grid-item actions">
          <a id="open" class="clickable button" href="" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i> Open</a>
          <div>
              <button id="prev" class="clickable button" onclick="photobook.prevphoto()">Previous</button>
              <span style="margin: 0px 50px;"><span id="page_num"></span> / <span id="page_count"></span></span>
              <button id="next" class="clickable button" onclick="photobook.nextphoto()">Next</button>
          </div>
          
          <a id="download" class="clickable button" href="" download><i class="fa fa-download" aria-hidden="true"></i> Download</a>
      </div>
      <div class="grid-item"> 
        <img style="width: 300px" tabindex=1 src=""/><span class="f"><img src="" /></span>
      </div>
  </div>
  
<script type="text/javascript">
   const photobook = new PhotoGrid('photobook', ['{{ 'assets/images/photobook/screenshot.png' | relative_url}}', '{{ 'assets/images/photobook/screenshot2.png' | relative_url}}', '{{ 'assets/images/photobook/screenshot3.png' | relative_url}}', '{{ 'assets/images/photobook/screenshot4.png' | relative_url}}'])
</script>