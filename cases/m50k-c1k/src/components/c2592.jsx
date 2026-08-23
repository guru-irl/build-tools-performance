import React from 'react';
const LABEL_2592 = 'component_2592';
export function Component2592({ value = 2592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2592, 'data-value': derived.doubled }, children);
}
export default Component2592;
