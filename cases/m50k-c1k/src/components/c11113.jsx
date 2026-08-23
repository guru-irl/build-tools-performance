import React from 'react';
const LABEL_11113 = 'component_11113';
export function Component11113({ value = 11113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11113, 'data-value': derived.doubled }, children);
}
export default Component11113;
