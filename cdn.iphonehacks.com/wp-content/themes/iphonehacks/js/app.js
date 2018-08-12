// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();
(function()
{
	if(navigator.userAgent.indexOf('Mac OS X') != -1){
		jQuery('body').addClass('mac');
	}
	else
	{
		jQuery('body').removeClass('mac');
	}
})();