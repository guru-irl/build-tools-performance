import React from 'react';
const LABEL_26445 = 'component_26445';
export function Component26445({ value = 26445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26445, 'data-value': derived.doubled }, children);
}
export default Component26445;
