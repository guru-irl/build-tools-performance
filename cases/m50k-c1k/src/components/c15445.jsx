import React from 'react';
const LABEL_15445 = 'component_15445';
export function Component15445({ value = 15445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15445, 'data-value': derived.doubled }, children);
}
export default Component15445;
