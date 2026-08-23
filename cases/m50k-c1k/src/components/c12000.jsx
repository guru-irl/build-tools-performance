import React from 'react';
const LABEL_12000 = 'component_12000';
export function Component12000({ value = 12000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12000, 'data-value': derived.doubled }, children);
}
export default Component12000;
