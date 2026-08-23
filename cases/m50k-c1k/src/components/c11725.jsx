import React from 'react';
const LABEL_11725 = 'component_11725';
export function Component11725({ value = 11725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11725, 'data-value': derived.doubled }, children);
}
export default Component11725;
