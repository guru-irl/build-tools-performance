import React from 'react';
const LABEL_15786 = 'component_15786';
export function Component15786({ value = 15786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15786, 'data-value': derived.doubled }, children);
}
export default Component15786;
