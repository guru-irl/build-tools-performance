import React from 'react';
const LABEL_23643 = 'component_23643';
export function Component23643({ value = 23643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23643, 'data-value': derived.doubled }, children);
}
export default Component23643;
