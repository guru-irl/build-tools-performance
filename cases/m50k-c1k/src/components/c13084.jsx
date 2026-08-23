import React from 'react';
const LABEL_13084 = 'component_13084';
export function Component13084({ value = 13084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13084, 'data-value': derived.doubled }, children);
}
export default Component13084;
