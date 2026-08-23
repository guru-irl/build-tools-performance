import React from 'react';
const LABEL_1449 = 'component_1449';
export function Component1449({ value = 1449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1449, 'data-value': derived.doubled }, children);
}
export default Component1449;
