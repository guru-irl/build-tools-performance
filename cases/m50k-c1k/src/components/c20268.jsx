import React from 'react';
const LABEL_20268 = 'component_20268';
export function Component20268({ value = 20268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20268, 'data-value': derived.doubled }, children);
}
export default Component20268;
