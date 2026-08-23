import React from 'react';
const LABEL_38478 = 'component_38478';
export function Component38478({ value = 38478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38478, 'data-value': derived.doubled }, children);
}
export default Component38478;
