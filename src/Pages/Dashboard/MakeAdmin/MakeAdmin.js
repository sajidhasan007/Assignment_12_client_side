import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        const user = { email };
        console.log('from on submit', user);
        fetch('http://localhost:5000/users/makeadmin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })


    }
    return (
        <div className='d-flex justify-content-center'>
            <div>
                <h2>Add a New Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Enter User Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard"
                    /><br />
                    <Button className='mb-5 mt-3' type="submit" variant="contained">Make Admin</Button>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;
