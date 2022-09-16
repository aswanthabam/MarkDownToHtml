import grip, sys

def render(cont,file,outfile):
    html = grip.render_content(cont)
    print(html)
    if outfile is not None:
        outfile.write(html)
        print("Written!")
if __name__ == "__main__":
    if len(sys.argv) > 1:
        args = sys.argv[1:]
        file = args[0]
        if len(args) > 1:
            outfile = args[1]
        else:outfile = "README.html"
    else:
        file = "README.md"
        outfile = "README.html"
    try:
        cont = open(file,"r").read()
        try:
            out = open(outfile,"w")
        except:out = None
        render(cont,file,out)
    except:print("Unable  to open file "+file)
