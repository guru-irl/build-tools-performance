import React from 'react';
const LABEL_22934 = 'component_22934';
export function Component22934({ value = 22934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22934, 'data-value': derived.doubled }, children);
}
export default Component22934;
