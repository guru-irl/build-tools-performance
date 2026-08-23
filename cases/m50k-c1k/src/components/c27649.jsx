import React from 'react';
const LABEL_27649 = 'component_27649';
export function Component27649({ value = 27649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27649, 'data-value': derived.doubled }, children);
}
export default Component27649;
