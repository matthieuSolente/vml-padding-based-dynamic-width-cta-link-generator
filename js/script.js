 (function($){
    var urlLink,btnText,btnClass,cssBtnClass,backgroundColor,fontColor,borderColor,fontFamily,fontSize,tbPadding,lrPadding,bRadius,bordervml,bgcss,bgvml,bordercss,generatedButton,generateCss,arcsize,align,letterspacing,msoTextRaise,lineHeight;
 function updateValues() { 
    urlLink = $('#linkUrl').val();
    btnText = $('#btnText').val();
    btnClass = 'class="'+$('#btnClass').val()+'"';
    cssBtnClass = '.'+$('#btnClass').val();
    fontFamily = $('#fontFamily').val();
    fontSize = $('#fontSize').val()+'px';
    fontColor = $('#fontColor').val();
    if($('#btnBorder').is(':checked')){
      $('#borderInput').show();
      borderColor = $('#borderColor').val();
      borderwidth = $('#borderWidth').val();
      bordercss = 'border:'+borderwidth+'px solid '+ borderColor+';';
      bordervmlwidth = 'strokeweight="'+borderwidth+'px"';
      bordervml = 'strokecolor="'+$('#borderColor').val()+'"';
    }else{
      $('#borderInput').hide();
      bordercss = '';
      bordervmlwidth = '';
      bordervml = '';
    }
    bgColor = $('#bgColor').val();
    bgvml = 'fillcolor="'+$('#bgColor').val()+'"';
    tbPadding = $('#tbPadding').val()+'px';
    lrPadding = $('#lrPadding').val()+'px';
    align = $('#align').val();
    bRadius = $('#bRadius').val()+'px';
    bgcss = 'background-color:'+$('#bgColor').val();
    arcsize = Math.ceil($('#bRadius').val()/$(cssBtnClass).outerHeight()*100); 
    vmlwidth = 'width:' + Math.ceil($(cssBtnClass).outerWidth()).toFixed(1)*0.75+'pt';
    vmlheight = 'height:' + Math.ceil($(cssBtnClass).outerHeight()).toFixed(1)*0.75+'pt';
    if($('#fontBold').is(':checked')){
      fontBold = 'font-weight:bold;'
    }else{
      fontBold = '';
    }
    if($('#textTransform').is(':checked')){
      textTransform = 'text-transform:uppercase;'
    }else{
      textTransform = '';
    }
    generatedButtonPreview = '<!--[if mso]>\n<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="mso-position-horizontal:'+align+';v-text-anchor:middle;'+vmlheight+';'+vmlwidth+'" arcsize="'+arcsize+'%" '+bordervml+' '+bordervmlwidth+' '+bgvml+'>\n<w:anchorlock/>\n<center>\n<![endif]-->\n<a '+btnClass+' href="'+urlLink+'" style="'+bordercss+'font-family:'+fontFamily+';font-size:'+fontSize+';mso-line-height-rule:exactly;line-height:1.5;background-color:'+ bgColor +';text-decoration:none;text-underline-color:'+bgColor+';'+textTransform+' padding:'+tbPadding+' '+lrPadding+';color:'+fontColor+';'+fontBold+'display:inline-block;border-radius:'+bRadius+';mso-border-alt:none;mso-padding-alt:0px;">\n'+btnText+'</a>\n<!--[if mso]>\n</center>\n</v:roundrect>\n<![endif]-->';
    generatedButton = '&lt;!--[if mso]&gt;\n&lt;v:roundrect xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; style=&quot;mso-position-horizontal:'+align+';v-text-anchor:middle;'+vmlheight+';'+vmlwidth+'&quot; arcsize=&quot;'+arcsize+'%&quot; '+bordervml+' '+bordervmlwidth+' '+bgvml+'&gt;\n&lt;w:anchorlock/&gt;\n&lt;center&gt;\n&lt;![endif]--&gt;\n&lt;a '+btnClass+' href=&quot;'+urlLink+'&quot; style=&quot;'+bordercss+'font-family:'+fontFamily+';font-size:'+fontSize+';mso-line-height-rule:exactly;line-height:1.5;background-color:'+ bgColor +';text-decoration:none;text-underline-color:'+bgColor+';'+textTransform+' padding:'+tbPadding+' '+lrPadding+';color:'+fontColor+';'+fontBold+'display:inline-block;border-radius:'+bRadius+';mso-border-alt:none;mso-padding-alt:0px;&quot;&gt;\n'+btnText+'&lt;/a&gt;\n&lt;!--[if mso]&gt;\n&lt;/center&gt;\n&lt;/v:roundrect&gt;\n&lt;![endif]--&gt;';

    if($('#fontColor').val()==='#ffffff'||$('#fontColor').val()==='#fff'){
      generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n '+cssBtnClass+'{\nbackground: transparent !important;\nmso-style-textfill-type:gradient;\n mso-style-textfill-fill-gradientfill-stoplist:&quot;0 \#FFFFFF 0 100000\,100000 \#FFFFFF 0 100000&quot;;\ncolor:#000000 !important;\n background: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
    }else if($('#fontColor').val()==='#000000'){
      generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n'+cssBtnClass+'{\nbackground: transparent !important;\nmso-style-textfill-type:gradient;\n mso-style-textfill-fill-gradientfill-stoplist:&quot;0 \#000000 1 100000\,99000 \#000000 1 100000&quot;;\ncolor:#ffffff !important;\n background: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
    }else{
      generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n'+cssBtnClass+'{\nbackground: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
    }

    $('#preview').html(generatedButtonPreview);
    $('#code').html(generatedButton);
    if($('#fontColor').val()){
      $('#css-code').show();
      $('#css').html(generateCss);
    }else{
      $('#css-code').hide();
      $('#css').html('');
    }
}updateValues();
$(document).ready(function(){
  updateValues();
});
$( "input, select" ).on('change',function() {
  updateValues();
});
$('#btnClass').on('change',function() {
  updateValues();
});
})(jQuery);

/***********************************************/
/* COPY PASTE   */
/***********************************************/
function copyPaste(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).parent().find('.copyPaste').text()).select();
    document.execCommand("copy");
    $temp.remove();
}

/***********************************************/
/************ COPY TO CLIPBOARD FUNCTION *******/
/***********************************************/

  $('.copyPaste').wrap('<div class="copyPaste-block"></div>');   
    $('.copyPaste-block').each(function(){     
      $(this).append('<button type="button" class="copy" onclick="copyPaste(this)" aria-hidden="false" aria-label="Copy to clipboard"><span class="visually-hidden">Copy to Clipboard</span></button>');
    });
