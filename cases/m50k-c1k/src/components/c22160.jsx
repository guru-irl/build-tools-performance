import React from 'react';
const LABEL_22160 = 'component_22160';
export function Component22160({ value = 22160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22160, 'data-value': derived.doubled }, children);
}
export default Component22160;
