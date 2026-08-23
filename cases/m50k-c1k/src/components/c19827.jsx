import React from 'react';
const LABEL_19827 = 'component_19827';
export function Component19827({ value = 19827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19827, 'data-value': derived.doubled }, children);
}
export default Component19827;
