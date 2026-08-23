import React from 'react';
const LABEL_43037 = 'component_43037';
export function Component43037({ value = 43037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43037, 'data-value': derived.doubled }, children);
}
export default Component43037;
