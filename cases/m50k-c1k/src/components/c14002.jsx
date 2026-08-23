import React from 'react';
const LABEL_14002 = 'component_14002';
export function Component14002({ value = 14002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14002, 'data-value': derived.doubled }, children);
}
export default Component14002;
