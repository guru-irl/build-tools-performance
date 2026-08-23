import React from 'react';
const LABEL_13599 = 'component_13599';
export function Component13599({ value = 13599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13599, 'data-value': derived.doubled }, children);
}
export default Component13599;
