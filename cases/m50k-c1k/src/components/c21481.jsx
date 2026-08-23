import React from 'react';
const LABEL_21481 = 'component_21481';
export function Component21481({ value = 21481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21481, 'data-value': derived.doubled }, children);
}
export default Component21481;
