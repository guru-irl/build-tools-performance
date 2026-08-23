import React from 'react';
const LABEL_2617 = 'component_2617';
export function Component2617({ value = 2617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2617, 'data-value': derived.doubled }, children);
}
export default Component2617;
