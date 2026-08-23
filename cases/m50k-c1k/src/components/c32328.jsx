import React from 'react';
const LABEL_32328 = 'component_32328';
export function Component32328({ value = 32328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32328, 'data-value': derived.doubled }, children);
}
export default Component32328;
