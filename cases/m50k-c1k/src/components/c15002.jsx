import React from 'react';
const LABEL_15002 = 'component_15002';
export function Component15002({ value = 15002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15002, 'data-value': derived.doubled }, children);
}
export default Component15002;
