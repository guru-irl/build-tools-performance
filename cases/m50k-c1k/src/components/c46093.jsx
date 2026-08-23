import React from 'react';
const LABEL_46093 = 'component_46093';
export function Component46093({ value = 46093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46093, 'data-value': derived.doubled }, children);
}
export default Component46093;
