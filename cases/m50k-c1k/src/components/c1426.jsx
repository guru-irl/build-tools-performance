import React from 'react';
const LABEL_1426 = 'component_1426';
export function Component1426({ value = 1426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1426, 'data-value': derived.doubled }, children);
}
export default Component1426;
