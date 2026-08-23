import React from 'react';
const LABEL_14133 = 'component_14133';
export function Component14133({ value = 14133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14133, 'data-value': derived.doubled }, children);
}
export default Component14133;
