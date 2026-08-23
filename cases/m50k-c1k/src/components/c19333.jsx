import React from 'react';
const LABEL_19333 = 'component_19333';
export function Component19333({ value = 19333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19333, 'data-value': derived.doubled }, children);
}
export default Component19333;
