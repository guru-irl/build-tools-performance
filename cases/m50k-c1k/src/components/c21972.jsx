import React from 'react';
const LABEL_21972 = 'component_21972';
export function Component21972({ value = 21972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21972, 'data-value': derived.doubled }, children);
}
export default Component21972;
