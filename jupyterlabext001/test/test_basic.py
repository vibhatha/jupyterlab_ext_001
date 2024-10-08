from jupyterlabext001.utils import get_pip_list


def test_show():
    pip_res = get_pip_list()
    print(pip_res[0])
