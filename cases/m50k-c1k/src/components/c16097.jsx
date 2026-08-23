import React from 'react';
const LABEL_16097 = 'component_16097';
export function Component16097({ value = 16097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16097, 'data-value': derived.doubled }, children);
}
export default Component16097;
