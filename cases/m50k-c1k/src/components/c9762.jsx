import React from 'react';
const LABEL_9762 = 'component_9762';
export function Component9762({ value = 9762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9762, 'data-value': derived.doubled }, children);
}
export default Component9762;
