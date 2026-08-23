import React from 'react';
const LABEL_13333 = 'component_13333';
export function Component13333({ value = 13333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13333, 'data-value': derived.doubled }, children);
}
export default Component13333;
