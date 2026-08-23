import React from 'react';
const LABEL_2116 = 'component_2116';
export function Component2116({ value = 2116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2116, 'data-value': derived.doubled }, children);
}
export default Component2116;
