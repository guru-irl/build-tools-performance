import React from 'react';
const LABEL_2959 = 'component_2959';
export function Component2959({ value = 2959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2959, 'data-value': derived.doubled }, children);
}
export default Component2959;
