import React from 'react';
const LABEL_40445 = 'component_40445';
export function Component40445({ value = 40445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40445, 'data-value': derived.doubled }, children);
}
export default Component40445;
