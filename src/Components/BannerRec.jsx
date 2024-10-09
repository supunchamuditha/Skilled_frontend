import { Button } from "react-bootstrap";


const Banner = () => {
    return (
        <div className="banner d-flex justify-content-center align-items-center" style={{ height: '40vh', width: '100%' }}>
            <div className="banner d-flex justify-content-center align-items-center" style={{ height: '40vh', width: '60%' }}>
                <div className="banner-content text-center">
                    <h1>Welcome to SKILLED!</h1>
                    <br />
                    <p>Your go-to platform for connecting talented professionals with exciting career opportunities.
                        Whether you're a job seeker looking to take the next step in your career or an employer searching for the perfect candidate,
                        we've designed our platform to make the process simple, fast, and effective
                    </p>
                    <br />
                    <div className="input-group mt-3" style={{ padding: '10px' }}>
                        <input type="text" className="form-control" placeholder="Search..." />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">Search</button>
                        </div>
                    </div>
                    <br />
                    <Button
                        variant="primary"
                        className="p-3"
                        style={{ backgroundColor: '#144B7D', border: 'none',width:'260px' }}
                    >
                        POST A JOB
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;