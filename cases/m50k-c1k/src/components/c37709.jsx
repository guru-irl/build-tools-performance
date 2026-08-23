import React from 'react';
const LABEL_37709 = 'component_37709';
export function Component37709({ value = 37709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37709, 'data-value': derived.doubled }, children);
}
export default Component37709;
