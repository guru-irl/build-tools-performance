import React from 'react';
const LABEL_15666 = 'component_15666';
export function Component15666({ value = 15666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15666, 'data-value': derived.doubled }, children);
}
export default Component15666;
