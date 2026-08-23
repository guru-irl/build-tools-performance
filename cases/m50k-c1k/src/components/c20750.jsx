import React from 'react';
const LABEL_20750 = 'component_20750';
export function Component20750({ value = 20750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20750, 'data-value': derived.doubled }, children);
}
export default Component20750;
