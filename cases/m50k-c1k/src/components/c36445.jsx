import React from 'react';
const LABEL_36445 = 'component_36445';
export function Component36445({ value = 36445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36445, 'data-value': derived.doubled }, children);
}
export default Component36445;
