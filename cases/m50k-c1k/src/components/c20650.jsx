import React from 'react';
const LABEL_20650 = 'component_20650';
export function Component20650({ value = 20650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20650, 'data-value': derived.doubled }, children);
}
export default Component20650;
