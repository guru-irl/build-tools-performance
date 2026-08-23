import React from 'react';
const LABEL_22461 = 'component_22461';
export function Component22461({ value = 22461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22461, 'data-value': derived.doubled }, children);
}
export default Component22461;
