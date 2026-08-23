import React from 'react';
const LABEL_42113 = 'component_42113';
export function Component42113({ value = 42113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42113, 'data-value': derived.doubled }, children);
}
export default Component42113;
