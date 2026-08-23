import React from 'react';
const LABEL_29332 = 'component_29332';
export function Component29332({ value = 29332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29332, 'data-value': derived.doubled }, children);
}
export default Component29332;
