import React from 'react';
const LABEL_36250 = 'component_36250';
export function Component36250({ value = 36250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36250, 'data-value': derived.doubled }, children);
}
export default Component36250;
