import React from 'react';
const LABEL_26100 = 'component_26100';
export function Component26100({ value = 26100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26100, 'data-value': derived.doubled }, children);
}
export default Component26100;
