import React from 'react';
const LABEL_7709 = 'component_7709';
export function Component7709({ value = 7709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7709, 'data-value': derived.doubled }, children);
}
export default Component7709;
