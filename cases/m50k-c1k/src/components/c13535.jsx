import React from 'react';
const LABEL_13535 = 'component_13535';
export function Component13535({ value = 13535, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13535, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13535, 'data-value': derived.doubled }, children);
}
export default Component13535;
