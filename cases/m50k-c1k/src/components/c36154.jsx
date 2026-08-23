import React from 'react';
const LABEL_36154 = 'component_36154';
export function Component36154({ value = 36154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36154, 'data-value': derived.doubled }, children);
}
export default Component36154;
