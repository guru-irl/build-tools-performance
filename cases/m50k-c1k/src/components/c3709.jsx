import React from 'react';
const LABEL_3709 = 'component_3709';
export function Component3709({ value = 3709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3709, 'data-value': derived.doubled }, children);
}
export default Component3709;
