import React from 'react';
const LABEL_12912 = 'component_12912';
export function Component12912({ value = 12912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12912, 'data-value': derived.doubled }, children);
}
export default Component12912;
