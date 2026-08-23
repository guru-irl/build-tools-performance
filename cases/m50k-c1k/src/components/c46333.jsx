import React from 'react';
const LABEL_46333 = 'component_46333';
export function Component46333({ value = 46333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46333, 'data-value': derived.doubled }, children);
}
export default Component46333;
