import React from 'react';
const LABEL_1606 = 'component_1606';
export function Component1606({ value = 1606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1606, 'data-value': derived.doubled }, children);
}
export default Component1606;
