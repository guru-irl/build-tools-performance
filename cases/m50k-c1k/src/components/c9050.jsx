import React from 'react';
const LABEL_9050 = 'component_9050';
export function Component9050({ value = 9050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9050, 'data-value': derived.doubled }, children);
}
export default Component9050;
