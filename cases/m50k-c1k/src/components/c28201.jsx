import React from 'react';
const LABEL_28201 = 'component_28201';
export function Component28201({ value = 28201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28201, 'data-value': derived.doubled }, children);
}
export default Component28201;
