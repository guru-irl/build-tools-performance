import React from 'react';
const LABEL_22725 = 'component_22725';
export function Component22725({ value = 22725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22725, 'data-value': derived.doubled }, children);
}
export default Component22725;
