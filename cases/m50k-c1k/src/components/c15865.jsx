import React from 'react';
const LABEL_15865 = 'component_15865';
export function Component15865({ value = 15865, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15865, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15865, 'data-value': derived.doubled }, children);
}
export default Component15865;
