const Notification = ({ message }) => { 
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <p >{message}</p>
        </div>
    );
};

export default Notification;