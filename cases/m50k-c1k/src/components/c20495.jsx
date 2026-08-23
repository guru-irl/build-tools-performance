import React from 'react';
const LABEL_20495 = 'component_20495';
export function Component20495({ value = 20495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20495, 'data-value': derived.doubled }, children);
}
export default Component20495;
