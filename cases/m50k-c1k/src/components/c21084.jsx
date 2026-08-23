import React from 'react';
const LABEL_21084 = 'component_21084';
export function Component21084({ value = 21084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21084, 'data-value': derived.doubled }, children);
}
export default Component21084;
