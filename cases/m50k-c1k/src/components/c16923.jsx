import React from 'react';
const LABEL_16923 = 'component_16923';
export function Component16923({ value = 16923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16923, 'data-value': derived.doubled }, children);
}
export default Component16923;
