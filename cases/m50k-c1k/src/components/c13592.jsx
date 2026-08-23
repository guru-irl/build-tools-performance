import React from 'react';
const LABEL_13592 = 'component_13592';
export function Component13592({ value = 13592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13592, 'data-value': derived.doubled }, children);
}
export default Component13592;
