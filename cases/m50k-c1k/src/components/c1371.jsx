import React from 'react';
const LABEL_1371 = 'component_1371';
export function Component1371({ value = 1371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1371, 'data-value': derived.doubled }, children);
}
export default Component1371;
