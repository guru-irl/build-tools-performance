import React from 'react';
const LABEL_36504 = 'component_36504';
export function Component36504({ value = 36504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36504, 'data-value': derived.doubled }, children);
}
export default Component36504;
