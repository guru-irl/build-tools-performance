import React from 'react';
const LABEL_29623 = 'component_29623';
export function Component29623({ value = 29623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29623, 'data-value': derived.doubled }, children);
}
export default Component29623;
