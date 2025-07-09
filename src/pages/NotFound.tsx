import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-background">
      <div className="text-center max-w-xl">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground mb-6">
          Page not found
        </h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn’t find the page you were looking for.
        </p>

        <a
          href="/"
          className="inline-flex items-center button bg-secondary text-secondary-foreground hover:bg-secondary/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </a>
      </div>
    </section>
  );
};

export default NotFound;
