import React from 'react';
const LABEL_13605 = 'component_13605';
export function Component13605({ value = 13605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13605, 'data-value': derived.doubled }, children);
}
export default Component13605;
