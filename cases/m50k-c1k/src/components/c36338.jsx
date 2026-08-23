import React from 'react';
const LABEL_36338 = 'component_36338';
export function Component36338({ value = 36338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36338, 'data-value': derived.doubled }, children);
}
export default Component36338;
