import React from 'react';
const LABEL_13274 = 'component_13274';
export function Component13274({ value = 13274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13274, 'data-value': derived.doubled }, children);
}
export default Component13274;
