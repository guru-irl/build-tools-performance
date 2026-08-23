import React from 'react';
const LABEL_12661 = 'component_12661';
export function Component12661({ value = 12661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12661, 'data-value': derived.doubled }, children);
}
export default Component12661;
