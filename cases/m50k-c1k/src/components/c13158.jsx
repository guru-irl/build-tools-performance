import React from 'react';
const LABEL_13158 = 'component_13158';
export function Component13158({ value = 13158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13158, 'data-value': derived.doubled }, children);
}
export default Component13158;
