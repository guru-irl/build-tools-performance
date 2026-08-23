import React from 'react';
const LABEL_21500 = 'component_21500';
export function Component21500({ value = 21500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21500, 'data-value': derived.doubled }, children);
}
export default Component21500;
