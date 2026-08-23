import React from 'react';
const LABEL_22202 = 'component_22202';
export function Component22202({ value = 22202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22202, 'data-value': derived.doubled }, children);
}
export default Component22202;
