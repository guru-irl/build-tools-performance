import React from 'react';
const LABEL_13213 = 'component_13213';
export function Component13213({ value = 13213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13213, 'data-value': derived.doubled }, children);
}
export default Component13213;
