import React from 'react';
const LABEL_21565 = 'component_21565';
export function Component21565({ value = 21565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21565, 'data-value': derived.doubled }, children);
}
export default Component21565;
