import React from 'react';
const LABEL_5123 = 'component_5123';
export function Component5123({ value = 5123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5123, 'data-value': derived.doubled }, children);
}
export default Component5123;
