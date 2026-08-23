import React from 'react';
const LABEL_29751 = 'component_29751';
export function Component29751({ value = 29751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29751, 'data-value': derived.doubled }, children);
}
export default Component29751;
