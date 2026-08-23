import React from 'react';
const LABEL_10484 = 'component_10484';
export function Component10484({ value = 10484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10484, 'data-value': derived.doubled }, children);
}
export default Component10484;
