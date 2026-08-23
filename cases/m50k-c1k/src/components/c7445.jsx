import React from 'react';
const LABEL_7445 = 'component_7445';
export function Component7445({ value = 7445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7445, 'data-value': derived.doubled }, children);
}
export default Component7445;
