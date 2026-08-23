import React from 'react';
const LABEL_29830 = 'component_29830';
export function Component29830({ value = 29830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29830, 'data-value': derived.doubled }, children);
}
export default Component29830;
