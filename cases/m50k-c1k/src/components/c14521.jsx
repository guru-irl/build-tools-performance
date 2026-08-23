import React from 'react';
const LABEL_14521 = 'component_14521';
export function Component14521({ value = 14521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14521, 'data-value': derived.doubled }, children);
}
export default Component14521;
