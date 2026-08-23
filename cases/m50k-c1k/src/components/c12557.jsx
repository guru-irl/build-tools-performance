import React from 'react';
const LABEL_12557 = 'component_12557';
export function Component12557({ value = 12557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12557, 'data-value': derived.doubled }, children);
}
export default Component12557;
