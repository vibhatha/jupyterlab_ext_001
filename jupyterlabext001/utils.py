import subprocess


def get_python_packages():
    # TODO: write a generic util to execute commands
    result = subprocess.run(["pip", "list"], capture_output=True, text=True)
    output = result.stdout.strip().split("\n")

    # Remove the first two lines, as they are headers ("Package" and "Version")
    package_metadata = output[2:]
    package_info = []
    for pkg in package_metadata:
        name, version = pkg.split()[:2]
        package_info.append({"name": name, "version": version})
    return package_info
