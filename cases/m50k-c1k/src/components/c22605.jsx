import React from 'react';
const LABEL_22605 = 'component_22605';
export function Component22605({ value = 22605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22605, 'data-value': derived.doubled }, children);
}
export default Component22605;
