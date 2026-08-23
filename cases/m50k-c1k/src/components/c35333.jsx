import React from 'react';
const LABEL_35333 = 'component_35333';
export function Component35333({ value = 35333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35333, 'data-value': derived.doubled }, children);
}
export default Component35333;
