import React from 'react';
const LABEL_29934 = 'component_29934';
export function Component29934({ value = 29934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29934, 'data-value': derived.doubled }, children);
}
export default Component29934;
