import React from 'react';
const LABEL_12465 = 'component_12465';
export function Component12465({ value = 12465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12465, 'data-value': derived.doubled }, children);
}
export default Component12465;
