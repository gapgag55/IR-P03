import sys
sys.path.append('./clawler')

from flask import Flask
from flask_cors import CORS
from PantipSearch import get_stores_info
import json

app = Flask(__name__)
CORS(app)

@app.route('/api/pantip/<keyword>/<page>', methods=['GET'])
def sentiment(keyword, page):
  return json.dumps(get_stores_info(page, keyword), ensure_ascii=False)

if __name__ == '__main__':
  app.run(debug=True,host='0.0.0.0',port=5000)