# Hello Python venv!

It's a good idea to install and use Python libraries within a virtual
environment.  This allows you to 

1) Specify precisely your project's dependencies (software libraries,
    including which versions)

2) Keep each software project in a separate environment


Python 3 has a module 
[`venv`](https://docs.python.org/3/library/venv.html) 
for creating virtual environments.  Here's a quick start.


### Create a new virtual environment

This creates the directory `venv_name`.

```console
python3 -m venv venv_name
```

### Activate the virtual environment

The new directory `venv_name` has a sub-directory `bin`, 
in which there is a script called `activate`.  

Calling this script with the `source` command activates the virtual
environment by setting your `PATH` and other environment variables.

```console
source venv_name/bin/activate
```

This will also change your prompt to include `(venv_name)`,
to indicate that the virtual environment is active.


### Deactivate the virtual environment

```console
deactivate
```

### Install requirements into the virtual environment

First activate the virtual environment.  Then calling `pip install`
will install stuff into the active virtual environment.

```console
source venv_name/bin/activate
pip install library_name
```

### Specfiy your dependencies in requirements.txt

It is common practice to list your dependencies in a file
[`requirements.txt`](https://pip.pypa.io/en/stable/reference/requirements-file-format/) 
in the root directory of your project:
```
matplotlib
numpy
```

If you want to see all your software dependencies, including versions,
you can use `pip freeze`.

This lets you set up a new virtual environment for your project very
quickly:

```console
source venv_name/bin/activate
pip install -r requirements.txt
```






