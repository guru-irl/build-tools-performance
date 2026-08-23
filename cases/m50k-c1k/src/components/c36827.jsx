import React from 'react';
const LABEL_36827 = 'component_36827';
export function Component36827({ value = 36827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36827, 'data-value': derived.doubled }, children);
}
export default Component36827;
