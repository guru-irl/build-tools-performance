import React from 'react';
const LABEL_2565 = 'component_2565';
export function Component2565({ value = 2565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2565, 'data-value': derived.doubled }, children);
}
export default Component2565;
