import React from 'react';
const LABEL_13761 = 'component_13761';
export function Component13761({ value = 13761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13761, 'data-value': derived.doubled }, children);
}
export default Component13761;
