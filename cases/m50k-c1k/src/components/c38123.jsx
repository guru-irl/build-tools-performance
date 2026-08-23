import React from 'react';
const LABEL_38123 = 'component_38123';
export function Component38123({ value = 38123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38123, 'data-value': derived.doubled }, children);
}
export default Component38123;
