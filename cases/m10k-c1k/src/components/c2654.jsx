import React from 'react';
const LABEL_2654 = 'component_2654';
export function Component2654({ value = 2654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2654, 'data-value': derived.doubled }, children);
}
export default Component2654;
