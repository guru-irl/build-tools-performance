import React from 'react';
const LABEL_13116 = 'component_13116';
export function Component13116({ value = 13116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13116, 'data-value': derived.doubled }, children);
}
export default Component13116;
