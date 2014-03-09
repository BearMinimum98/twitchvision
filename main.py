import urllib
import httplib2
import webapp2
import json

class GetCode(webapp2.RequestHandler):
	def get(self):
		h = Http()
		data = dict(client_id="djqqyosp3o6vfgfnfbnsa073lzoq5ee", grant_type="authorixation_code", redirect_uri="http://twitchvision.appengine.com/play/", code=$_GET["code"])
		return json.loads(urllib2.Request(url, data=urllib.urlencode(params)).read())
		
app = webapp2.WSGIApplication([("/buff/", Buff)])