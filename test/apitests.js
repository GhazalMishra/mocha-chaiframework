describe('Testing some apis', () => {
    it('Test for a GET method', (done) => {

        chai.request(server)
            .get(`/posts`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');


                done();


            })

    })

    it('Test for a Get method to retreive user details',(done) =>{
        chai.request(server)
        .get('/users')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.length.should.be.equal(10);
            
            done();
        })
    })

    it('Test for a POST method', (done)=>{
        let reqbody = {
            userid:1,
            title:'my post method title',
            body:'this is my post method body'

        }
        chai.request(server)
            .post('/posts')
            .send(reqbody)
            .end((err,res) =>{
                res.should.have.status(201);
                res.body.should.be.a('object')
                res.body.id.should.be.equal(101)
                console.log('Body', JSON.stringify(res.body))
                done();
            })

    })

    it('Test for a PUT method',(done)=>{
        let reqbody = {
            userid:1,
            title:'my updated post method title',
            body:'my updated post method body'

        }

        chai.request(server)
             .post('/posts')
             .send(reqbody)
             .end((err,res)=>{
                res.should.have.status(201);
                res.body.userid.should.be.equal(1);
                res.body.title.should.be.equal('my updated post method title');
                res.body.body.should.be.equal('my updated post method body');
                res.body.id.should.be.equal(101);
                console.log(' Put Body', JSON.stringify(res.body))

                done();
             })
    })


})
