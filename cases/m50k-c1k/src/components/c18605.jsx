import React from 'react';
const LABEL_18605 = 'component_18605';
export function Component18605({ value = 18605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18605, 'data-value': derived.doubled }, children);
}
export default Component18605;
