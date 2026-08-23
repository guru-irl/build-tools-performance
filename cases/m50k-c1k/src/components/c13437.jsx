import React from 'react';
const LABEL_13437 = 'component_13437';
export function Component13437({ value = 13437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13437, 'data-value': derived.doubled }, children);
}
export default Component13437;
