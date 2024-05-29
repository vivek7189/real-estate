import Header from '../ui/Header';
import Footer from '../ui/Footer';
import Link from 'next/link';
import PropertyForm from './postform';

const PostAds = () => {
    return (
        <div>
            <Header />
            <main>
            <div className="text-center p-5 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-t-lg">
                <h1 className="text-4xl font-bold">Post Your Property</h1>
                <p className="text-xm mt-2">Enter the details below to list your property on our platform and reach potential tenants or buyers quickly.</p>
            </div>
                <PropertyForm/>
            </main>
            <Footer />
        </div>
    );
};

export default PostAds;
