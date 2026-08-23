import React from 'react';
const LABEL_13014 = 'component_13014';
export function Component13014({ value = 13014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13014, 'data-value': derived.doubled }, children);
}
export default Component13014;
