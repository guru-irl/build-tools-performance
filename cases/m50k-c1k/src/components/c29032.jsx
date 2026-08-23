import React from 'react';
const LABEL_29032 = 'component_29032';
export function Component29032({ value = 29032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29032, 'data-value': derived.doubled }, children);
}
export default Component29032;
