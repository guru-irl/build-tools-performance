import React from 'react';
const LABEL_36600 = 'component_36600';
export function Component36600({ value = 36600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36600, 'data-value': derived.doubled }, children);
}
export default Component36600;
