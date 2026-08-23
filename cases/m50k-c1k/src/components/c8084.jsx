import React from 'react';
const LABEL_8084 = 'component_8084';
export function Component8084({ value = 8084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8084, 'data-value': derived.doubled }, children);
}
export default Component8084;
