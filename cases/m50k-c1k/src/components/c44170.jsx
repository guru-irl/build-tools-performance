import React from 'react';
const LABEL_44170 = 'component_44170';
export function Component44170({ value = 44170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44170, 'data-value': derived.doubled }, children);
}
export default Component44170;
