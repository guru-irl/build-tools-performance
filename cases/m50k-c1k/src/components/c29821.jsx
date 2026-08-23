import React from 'react';
const LABEL_29821 = 'component_29821';
export function Component29821({ value = 29821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29821, 'data-value': derived.doubled }, children);
}
export default Component29821;
