import React from 'react';
const LABEL_20792 = 'component_20792';
export function Component20792({ value = 20792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20792, 'data-value': derived.doubled }, children);
}
export default Component20792;
