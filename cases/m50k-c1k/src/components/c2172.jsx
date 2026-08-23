import React from 'react';
const LABEL_2172 = 'component_2172';
export function Component2172({ value = 2172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2172, 'data-value': derived.doubled }, children);
}
export default Component2172;
