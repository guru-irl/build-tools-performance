import React from 'react';
const LABEL_13140 = 'component_13140';
export function Component13140({ value = 13140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13140, 'data-value': derived.doubled }, children);
}
export default Component13140;
