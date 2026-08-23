import React from 'react';
const LABEL_40093 = 'component_40093';
export function Component40093({ value = 40093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40093, 'data-value': derived.doubled }, children);
}
export default Component40093;
