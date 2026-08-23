import React from 'react';
const LABEL_24148 = 'component_24148';
export function Component24148({ value = 24148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24148, 'data-value': derived.doubled }, children);
}
export default Component24148;
