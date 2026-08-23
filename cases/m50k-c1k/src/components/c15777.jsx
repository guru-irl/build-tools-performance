import React from 'react';
const LABEL_15777 = 'component_15777';
export function Component15777({ value = 15777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15777, 'data-value': derived.doubled }, children);
}
export default Component15777;
