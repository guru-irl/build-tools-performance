import React from 'react';
const LABEL_34123 = 'component_34123';
export function Component34123({ value = 34123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34123, 'data-value': derived.doubled }, children);
}
export default Component34123;
