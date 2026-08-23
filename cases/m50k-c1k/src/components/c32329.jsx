import React from 'react';
const LABEL_32329 = 'component_32329';
export function Component32329({ value = 32329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32329, 'data-value': derived.doubled }, children);
}
export default Component32329;
