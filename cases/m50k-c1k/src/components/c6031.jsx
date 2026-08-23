import React from 'react';
const LABEL_6031 = 'component_6031';
export function Component6031({ value = 6031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6031, 'data-value': derived.doubled }, children);
}
export default Component6031;
