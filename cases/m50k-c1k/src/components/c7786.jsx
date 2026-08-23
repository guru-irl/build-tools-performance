import React from 'react';
const LABEL_7786 = 'component_7786';
export function Component7786({ value = 7786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7786, 'data-value': derived.doubled }, children);
}
export default Component7786;
