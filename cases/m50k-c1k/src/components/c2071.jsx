import React from 'react';
const LABEL_2071 = 'component_2071';
export function Component2071({ value = 2071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2071, 'data-value': derived.doubled }, children);
}
export default Component2071;
