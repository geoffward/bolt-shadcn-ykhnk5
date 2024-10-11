import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Wizard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (location.pathname === '/address') {
      navigate('/');
    } else if (location.pathname === '/coverage') {
      navigate('/address');
    }
  };

  const goNext = () => {
    if (location.pathname === '/') {
      navigate('/address');
    } else if (location.pathname === '/address') {
      navigate('/coverage');
    }
  };

  return (
    <div className="space-y-8">
      <Outlet />
      <div className="flex justify-between">
        <Button
          onClick={goBack}
          disabled={location.pathname === '/'}
          variant="outline"
        >
          ← Back
        </Button>
        <Button
          onClick={goNext}
          disabled={location.pathname === '/coverage'}
        >
          Next →
        </Button>
      </div>
    </div>
  );
};

export default Wizard;