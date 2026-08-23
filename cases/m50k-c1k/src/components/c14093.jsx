import React from 'react';
const LABEL_14093 = 'component_14093';
export function Component14093({ value = 14093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14093, 'data-value': derived.doubled }, children);
}
export default Component14093;
