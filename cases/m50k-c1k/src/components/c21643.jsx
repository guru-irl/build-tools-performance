import React from 'react';
const LABEL_21643 = 'component_21643';
export function Component21643({ value = 21643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21643, 'data-value': derived.doubled }, children);
}
export default Component21643;
