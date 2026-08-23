import React from 'react';
const LABEL_43123 = 'component_43123';
export function Component43123({ value = 43123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43123, 'data-value': derived.doubled }, children);
}
export default Component43123;
