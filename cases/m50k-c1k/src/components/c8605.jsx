import React from 'react';
const LABEL_8605 = 'component_8605';
export function Component8605({ value = 8605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8605, 'data-value': derived.doubled }, children);
}
export default Component8605;
