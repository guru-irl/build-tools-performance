import React from 'react';
const LABEL_35826 = 'component_35826';
export function Component35826({ value = 35826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35826, 'data-value': derived.doubled }, children);
}
export default Component35826;
