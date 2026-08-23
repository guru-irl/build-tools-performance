import React from 'react';
const LABEL_18084 = 'component_18084';
export function Component18084({ value = 18084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18084, 'data-value': derived.doubled }, children);
}
export default Component18084;
