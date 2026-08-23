import React from 'react';
const LABEL_29804 = 'component_29804';
export function Component29804({ value = 29804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29804, 'data-value': derived.doubled }, children);
}
export default Component29804;
