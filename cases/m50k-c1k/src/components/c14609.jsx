import React from 'react';
const LABEL_14609 = 'component_14609';
export function Component14609({ value = 14609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14609, 'data-value': derived.doubled }, children);
}
export default Component14609;
