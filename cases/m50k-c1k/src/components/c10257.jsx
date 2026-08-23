import React from 'react';
const LABEL_10257 = 'component_10257';
export function Component10257({ value = 10257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10257, 'data-value': derived.doubled }, children);
}
export default Component10257;
