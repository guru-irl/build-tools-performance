import React from 'react';
const LABEL_19031 = 'component_19031';
export function Component19031({ value = 19031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19031, 'data-value': derived.doubled }, children);
}
export default Component19031;
