import React from 'react';
const LABEL_13402 = 'component_13402';
export function Component13402({ value = 13402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13402, 'data-value': derived.doubled }, children);
}
export default Component13402;
