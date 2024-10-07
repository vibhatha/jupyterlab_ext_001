from setuptools import setup, find_packages

setup(
    name="jupyterlabext001",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=["jupyter_server"],
    entry_points={
        "jupyter_serverproxy_servers": [
            "jupyterlabext001 = jupyterlabext001:load_jupyter_server_extension"
        ]
    },
    package_data={"jupyterlabext001": ["*"]},
)
