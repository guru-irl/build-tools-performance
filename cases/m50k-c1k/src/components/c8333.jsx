import React from 'react';
const LABEL_8333 = 'component_8333';
export function Component8333({ value = 8333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8333, 'data-value': derived.doubled }, children);
}
export default Component8333;
