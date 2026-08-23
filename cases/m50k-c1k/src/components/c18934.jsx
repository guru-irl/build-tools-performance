import React from 'react';
const LABEL_18934 = 'component_18934';
export function Component18934({ value = 18934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18934, 'data-value': derived.doubled }, children);
}
export default Component18934;
