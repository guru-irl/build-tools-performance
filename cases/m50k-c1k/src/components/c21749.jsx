import React from 'react';
const LABEL_21749 = 'component_21749';
export function Component21749({ value = 21749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21749, 'data-value': derived.doubled }, children);
}
export default Component21749;
