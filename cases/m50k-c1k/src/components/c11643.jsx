import React from 'react';
const LABEL_11643 = 'component_11643';
export function Component11643({ value = 11643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11643, 'data-value': derived.doubled }, children);
}
export default Component11643;
