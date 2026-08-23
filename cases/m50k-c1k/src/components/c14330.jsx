import React from 'react';
const LABEL_14330 = 'component_14330';
export function Component14330({ value = 14330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14330, 'data-value': derived.doubled }, children);
}
export default Component14330;
