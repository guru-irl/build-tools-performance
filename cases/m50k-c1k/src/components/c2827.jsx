import React from 'react';
const LABEL_2827 = 'component_2827';
export function Component2827({ value = 2827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2827, 'data-value': derived.doubled }, children);
}
export default Component2827;
