import React from 'react';
const LABEL_21332 = 'component_21332';
export function Component21332({ value = 21332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21332, 'data-value': derived.doubled }, children);
}
export default Component21332;
