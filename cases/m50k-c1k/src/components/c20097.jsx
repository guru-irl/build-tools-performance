import React from 'react';
const LABEL_20097 = 'component_20097';
export function Component20097({ value = 20097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20097, 'data-value': derived.doubled }, children);
}
export default Component20097;
