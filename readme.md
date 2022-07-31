# CS Projects

CS Projects 2022-23  
Dr. Kessner  
Marlborough School, Los Angeles  

[live site](https://dkessner.github.io/CSProjects/)  

## Previous website

[CS Projects 2021-22 website](https://dkessner.github.io/CSProjects_2021-22/)  
[CS Projects 2021-22 repo](https://github.com/dkessner/CSProjects_2021-22)

## Usage

### Building the book

If you'd like to develop and/or build the PCHA book, you should:

1. Clone this repository
2. Run `pip install -r requirements.txt` (it is recommended you do this within a virtual environment)
3. (Optional) Edit the books source files located in the `PCHA/` directory
4. Run `jupyter-book clean PCHA/` to remove any existing builds
5. Run `jupyter-book build PCHA/`

A fully-rendered HTML version of the book will be built in `PCHA/_build/html/`.

## Credits

This project is created using the excellent open source [Jupyter Book
project](https://jupyterbook.org/) and the
[executablebooks/cookiecutter-jupyter-book
template](https://github.com/executablebooks/cookiecutter-jupyter-book).

