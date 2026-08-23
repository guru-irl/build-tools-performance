import React from 'react';
const LABEL_36437 = 'component_36437';
export function Component36437({ value = 36437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36437, 'data-value': derived.doubled }, children);
}
export default Component36437;
