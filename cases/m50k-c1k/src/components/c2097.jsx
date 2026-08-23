import React from 'react';
const LABEL_2097 = 'component_2097';
export function Component2097({ value = 2097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2097, 'data-value': derived.doubled }, children);
}
export default Component2097;
