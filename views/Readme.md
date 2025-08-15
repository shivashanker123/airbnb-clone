view:'contains different types of ejs files'

1)listing:
    hotel listing pages manipulation ke liye
    a) index.ejs:
        it will show all titles(anchor tags(clicked to render show.ejs)) of listings

    b) new.ejs:
        it'll give a form (full of input:placeholders)and it
        will post submit({directly an object named shiva}access it through req.body.shiva)

    c) show.ejs:
        it will show all key-value pairs of list
        and we have(edit button(which renders edit.ejs))and delete button

    d) edit.ejs:
        it will give a form (full of input:value) and it
        will put submit({directly and object named shiva}access it through req.body.shiva update it in db by finding list(with id help))


