import React from 'react';
const LABEL_22158 = 'component_22158';
export function Component22158({ value = 22158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22158, 'data-value': derived.doubled }, children);
}
export default Component22158;
