import React from 'react';
const LABEL_16329 = 'component_16329';
export function Component16329({ value = 16329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16329, 'data-value': derived.doubled }, children);
}
export default Component16329;
