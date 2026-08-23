import React from 'react';
const LABEL_1084 = 'component_1084';
export function Component1084({ value = 1084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1084, 'data-value': derived.doubled }, children);
}
export default Component1084;
