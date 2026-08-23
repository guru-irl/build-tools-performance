import React from 'react';
const LABEL_37934 = 'component_37934';
export function Component37934({ value = 37934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37934, 'data-value': derived.doubled }, children);
}
export default Component37934;
