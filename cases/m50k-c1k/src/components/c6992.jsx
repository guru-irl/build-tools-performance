import React from 'react';
const LABEL_6992 = 'component_6992';
export function Component6992({ value = 6992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6992, 'data-value': derived.doubled }, children);
}
export default Component6992;
