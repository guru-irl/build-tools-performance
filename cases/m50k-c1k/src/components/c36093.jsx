import React from 'react';
const LABEL_36093 = 'component_36093';
export function Component36093({ value = 36093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36093, 'data-value': derived.doubled }, children);
}
export default Component36093;
