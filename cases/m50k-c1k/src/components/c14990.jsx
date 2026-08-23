import React from 'react';
const LABEL_14990 = 'component_14990';
export function Component14990({ value = 14990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14990, 'data-value': derived.doubled }, children);
}
export default Component14990;
