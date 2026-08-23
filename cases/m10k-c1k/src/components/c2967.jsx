import React from 'react';
const LABEL_2967 = 'component_2967';
export function Component2967({ value = 2967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2967, 'data-value': derived.doubled }, children);
}
export default Component2967;
