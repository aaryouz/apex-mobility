import { Link } from 'wouter';

export default function Footer() {
  const navigation = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'About', href: '/about' },
      { name: 'Documentation', href: '/docs' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <svg className="h-8 w-auto text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">YourSaaS</span>
            </Link>
            <p className="text-gray-500 text-base">
              Making the world a better place through innovative software solutions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} YourSaaS, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}