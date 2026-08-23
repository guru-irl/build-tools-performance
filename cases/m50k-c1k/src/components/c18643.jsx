import React from 'react';
const LABEL_18643 = 'component_18643';
export function Component18643({ value = 18643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18643, 'data-value': derived.doubled }, children);
}
export default Component18643;
