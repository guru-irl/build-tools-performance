import React from 'react';
const LABEL_2481 = 'component_2481';
export function Component2481({ value = 2481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2481, 'data-value': derived.doubled }, children);
}
export default Component2481;
