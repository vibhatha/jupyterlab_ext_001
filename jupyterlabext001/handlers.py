import json
from jupyter_server.base.handlers import APIHandler
from jupyter_server.utils import url_path_join
from tornado import web

from .utils import get_python_packages


class MyDataHandler(APIHandler):
    @web.authenticated
    def get(self):
        data = get_python_packages()
        self.write(json.dumps(data))


def setup_handlers(web_app):
    print("Hello World extension loaded!")
    host_pattern = ".*$"
    route_pattern = url_path_join(web_app.settings["base_url"], "/pip-list")
    web_app.add_handlers(host_pattern, [(route_pattern, MyDataHandler)])
