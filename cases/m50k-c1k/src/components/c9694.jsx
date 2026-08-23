import React from 'react';
const LABEL_9694 = 'component_9694';
export function Component9694({ value = 9694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9694, 'data-value': derived.doubled }, children);
}
export default Component9694;
