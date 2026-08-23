import React from 'react';
const LABEL_36725 = 'component_36725';
export function Component36725({ value = 36725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36725, 'data-value': derived.doubled }, children);
}
export default Component36725;
