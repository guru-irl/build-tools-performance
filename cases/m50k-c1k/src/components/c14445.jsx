import React from 'react';
const LABEL_14445 = 'component_14445';
export function Component14445({ value = 14445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14445, 'data-value': derived.doubled }, children);
}
export default Component14445;
