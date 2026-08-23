import React from 'react';
const LABEL_23934 = 'component_23934';
export function Component23934({ value = 23934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23934, 'data-value': derived.doubled }, children);
}
export default Component23934;
