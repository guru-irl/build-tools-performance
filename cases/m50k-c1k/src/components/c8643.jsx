import React from 'react';
const LABEL_8643 = 'component_8643';
export function Component8643({ value = 8643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8643, 'data-value': derived.doubled }, children);
}
export default Component8643;
