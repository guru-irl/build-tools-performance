import React from 'react';
const LABEL_1826 = 'component_1826';
export function Component1826({ value = 1826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1826, 'data-value': derived.doubled }, children);
}
export default Component1826;
