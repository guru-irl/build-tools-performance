import React from 'react';
const LABEL_39643 = 'component_39643';
export function Component39643({ value = 39643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39643, 'data-value': derived.doubled }, children);
}
export default Component39643;
