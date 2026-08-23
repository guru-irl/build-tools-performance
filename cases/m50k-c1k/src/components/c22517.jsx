import React from 'react';
const LABEL_22517 = 'component_22517';
export function Component22517({ value = 22517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22517, 'data-value': derived.doubled }, children);
}
export default Component22517;
