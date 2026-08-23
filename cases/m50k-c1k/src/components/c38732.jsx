import React from 'react';
const LABEL_38732 = 'component_38732';
export function Component38732({ value = 38732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38732, 'data-value': derived.doubled }, children);
}
export default Component38732;
