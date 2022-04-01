import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';

import LoginPage from './LoginPage/index.jsx';
import HomePage from './HomePage/index.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                
                <Route exact path="login" element={<LoginPage />} />
                <Route exact path="home" element={<HomePage />} />
                
                
            </Routes>
        </Router>
    );
};
//<Route path="/" element={<Navigate to="/login" />} />
//<Route path="*" element={<NotFoundPage />} />

export default AppRoutes;