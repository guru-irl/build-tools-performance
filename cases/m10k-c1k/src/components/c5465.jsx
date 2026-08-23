import React from 'react';
const LABEL_5465 = 'component_5465';
export function Component5465({ value = 5465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5465, 'data-value': derived.doubled }, children);
}
export default Component5465;
