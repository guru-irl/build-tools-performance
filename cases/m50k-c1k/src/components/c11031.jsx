import React from 'react';
const LABEL_11031 = 'component_11031';
export function Component11031({ value = 11031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11031, 'data-value': derived.doubled }, children);
}
export default Component11031;
