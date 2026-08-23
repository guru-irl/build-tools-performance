import React from 'react';
const LABEL_38101 = 'component_38101';
export function Component38101({ value = 38101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38101, 'data-value': derived.doubled }, children);
}
export default Component38101;
