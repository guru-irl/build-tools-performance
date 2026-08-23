import React from 'react';
const LABEL_18630 = 'component_18630';
export function Component18630({ value = 18630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18630, 'data-value': derived.doubled }, children);
}
export default Component18630;
