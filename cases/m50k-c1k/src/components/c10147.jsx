import React from 'react';
const LABEL_10147 = 'component_10147';
export function Component10147({ value = 10147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10147, 'data-value': derived.doubled }, children);
}
export default Component10147;
