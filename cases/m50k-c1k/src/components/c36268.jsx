import React from 'react';
const LABEL_36268 = 'component_36268';
export function Component36268({ value = 36268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36268, 'data-value': derived.doubled }, children);
}
export default Component36268;
