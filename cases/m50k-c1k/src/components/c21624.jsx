import React from 'react';
const LABEL_21624 = 'component_21624';
export function Component21624({ value = 21624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21624, 'data-value': derived.doubled }, children);
}
export default Component21624;
