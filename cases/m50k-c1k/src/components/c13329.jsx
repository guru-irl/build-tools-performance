import React from 'react';
const LABEL_13329 = 'component_13329';
export function Component13329({ value = 13329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13329, 'data-value': derived.doubled }, children);
}
export default Component13329;
