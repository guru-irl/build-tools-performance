import React from 'react';
const LABEL_21407 = 'component_21407';
export function Component21407({ value = 21407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21407, 'data-value': derived.doubled }, children);
}
export default Component21407;
