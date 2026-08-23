import React from 'react';
const LABEL_37333 = 'component_37333';
export function Component37333({ value = 37333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37333, 'data-value': derived.doubled }, children);
}
export default Component37333;
