import React from 'react';
const LABEL_22084 = 'component_22084';
export function Component22084({ value = 22084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22084, 'data-value': derived.doubled }, children);
}
export default Component22084;
