import React from 'react';
const LABEL_26847 = 'component_26847';
export function Component26847({ value = 26847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26847, 'data-value': derived.doubled }, children);
}
export default Component26847;
