import React from 'react';
const LABEL_3565 = 'component_3565';
export function Component3565({ value = 3565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3565, 'data-value': derived.doubled }, children);
}
export default Component3565;
