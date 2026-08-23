import React from 'react';
const LABEL_35923 = 'component_35923';
export function Component35923({ value = 35923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35923, 'data-value': derived.doubled }, children);
}
export default Component35923;
