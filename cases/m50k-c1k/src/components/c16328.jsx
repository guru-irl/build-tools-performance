import React from 'react';
const LABEL_16328 = 'component_16328';
export function Component16328({ value = 16328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16328, 'data-value': derived.doubled }, children);
}
export default Component16328;
