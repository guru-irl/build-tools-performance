import React from 'react';
const LABEL_25709 = 'component_25709';
export function Component25709({ value = 25709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25709, 'data-value': derived.doubled }, children);
}
export default Component25709;
