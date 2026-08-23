import React from 'react';
const LABEL_28592 = 'component_28592';
export function Component28592({ value = 28592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28592, 'data-value': derived.doubled }, children);
}
export default Component28592;
