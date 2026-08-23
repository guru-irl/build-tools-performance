import React from 'react';
const LABEL_9723 = 'component_9723';
export function Component9723({ value = 9723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9723, 'data-value': derived.doubled }, children);
}
export default Component9723;
