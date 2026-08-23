import React from 'react';
const LABEL_7979 = 'component_7979';
export function Component7979({ value = 7979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7979, 'data-value': derived.doubled }, children);
}
export default Component7979;
