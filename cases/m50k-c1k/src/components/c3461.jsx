import React from 'react';
const LABEL_3461 = 'component_3461';
export function Component3461({ value = 3461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3461, 'data-value': derived.doubled }, children);
}
export default Component3461;
