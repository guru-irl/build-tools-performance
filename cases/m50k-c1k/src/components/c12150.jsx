import React from 'react';
const LABEL_12150 = 'component_12150';
export function Component12150({ value = 12150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12150, 'data-value': derived.doubled }, children);
}
export default Component12150;
