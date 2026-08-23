import React from 'react';
const LABEL_15715 = 'component_15715';
export function Component15715({ value = 15715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15715, 'data-value': derived.doubled }, children);
}
export default Component15715;
