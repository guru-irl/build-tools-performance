import React from 'react';
const LABEL_22643 = 'component_22643';
export function Component22643({ value = 22643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22643, 'data-value': derived.doubled }, children);
}
export default Component22643;
