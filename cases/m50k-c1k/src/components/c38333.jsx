import React from 'react';
const LABEL_38333 = 'component_38333';
export function Component38333({ value = 38333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38333, 'data-value': derived.doubled }, children);
}
export default Component38333;
