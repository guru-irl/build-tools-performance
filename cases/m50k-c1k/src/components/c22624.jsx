import React from 'react';
const LABEL_22624 = 'component_22624';
export function Component22624({ value = 22624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22624, 'data-value': derived.doubled }, children);
}
export default Component22624;
