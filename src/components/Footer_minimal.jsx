import React from 'react';

export default function Footer_minimal() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-8 px-4 border-t border-neutral-800">
        <div className="flex justify-center text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} Usman Mukhtorow. All rights reserved</p>
        </div>
    </footer>
  );
}