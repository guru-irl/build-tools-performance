import React from 'react';
const LABEL_22246 = 'component_22246';
export function Component22246({ value = 22246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22246, 'data-value': derived.doubled }, children);
}
export default Component22246;
