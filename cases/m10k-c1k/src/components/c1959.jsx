import React from 'react';
const LABEL_1959 = 'component_1959';
export function Component1959({ value = 1959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1959, 'data-value': derived.doubled }, children);
}
export default Component1959;
