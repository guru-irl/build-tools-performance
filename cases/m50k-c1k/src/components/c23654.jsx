import React from 'react';
const LABEL_23654 = 'component_23654';
export function Component23654({ value = 23654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23654, 'data-value': derived.doubled }, children);
}
export default Component23654;
