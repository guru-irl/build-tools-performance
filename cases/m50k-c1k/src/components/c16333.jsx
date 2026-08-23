import React from 'react';
const LABEL_16333 = 'component_16333';
export function Component16333({ value = 16333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16333, 'data-value': derived.doubled }, children);
}
export default Component16333;
