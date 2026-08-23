import React from 'react';
const LABEL_24919 = 'component_24919';
export function Component24919({ value = 24919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24919, 'data-value': derived.doubled }, children);
}
export default Component24919;
