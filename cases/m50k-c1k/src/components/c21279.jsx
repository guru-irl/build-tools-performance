import React from 'react';
const LABEL_21279 = 'component_21279';
export function Component21279({ value = 21279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21279, 'data-value': derived.doubled }, children);
}
export default Component21279;
