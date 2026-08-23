import React from 'react';
const LABEL_14249 = 'component_14249';
export function Component14249({ value = 14249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14249, 'data-value': derived.doubled }, children);
}
export default Component14249;
