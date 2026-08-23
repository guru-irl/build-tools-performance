import React from 'react';
const LABEL_13565 = 'component_13565';
export function Component13565({ value = 13565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13565, 'data-value': derived.doubled }, children);
}
export default Component13565;
