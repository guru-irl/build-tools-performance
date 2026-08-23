import React from 'react';
const LABEL_23113 = 'component_23113';
export function Component23113({ value = 23113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23113, 'data-value': derived.doubled }, children);
}
export default Component23113;
