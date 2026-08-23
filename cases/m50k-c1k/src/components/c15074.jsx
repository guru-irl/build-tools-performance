import React from 'react';
const LABEL_15074 = 'component_15074';
export function Component15074({ value = 15074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15074, 'data-value': derived.doubled }, children);
}
export default Component15074;
