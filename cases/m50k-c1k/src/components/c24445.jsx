import React from 'react';
const LABEL_24445 = 'component_24445';
export function Component24445({ value = 24445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24445, 'data-value': derived.doubled }, children);
}
export default Component24445;
