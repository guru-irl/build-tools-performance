import React from 'react';
const LABEL_28181 = 'component_28181';
export function Component28181({ value = 28181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28181, 'data-value': derived.doubled }, children);
}
export default Component28181;
