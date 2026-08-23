import React from 'react';
const LABEL_42445 = 'component_42445';
export function Component42445({ value = 42445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42445, 'data-value': derived.doubled }, children);
}
export default Component42445;
