import React from 'react';
const LABEL_26147 = 'component_26147';
export function Component26147({ value = 26147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26147, 'data-value': derived.doubled }, children);
}
export default Component26147;
