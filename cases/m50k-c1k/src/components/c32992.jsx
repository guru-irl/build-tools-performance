import React from 'react';
const LABEL_32992 = 'component_32992';
export function Component32992({ value = 32992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32992, 'data-value': derived.doubled }, children);
}
export default Component32992;
