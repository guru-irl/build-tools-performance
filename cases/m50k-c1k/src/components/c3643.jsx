import React from 'react';
const LABEL_3643 = 'component_3643';
export function Component3643({ value = 3643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3643, 'data-value': derived.doubled }, children);
}
export default Component3643;
