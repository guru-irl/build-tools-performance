import React from 'react';
const LABEL_2709 = 'component_2709';
export function Component2709({ value = 2709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2709, 'data-value': derived.doubled }, children);
}
export default Component2709;
