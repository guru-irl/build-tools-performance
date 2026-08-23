import React from 'react';
const LABEL_9791 = 'component_9791';
export function Component9791({ value = 9791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9791, 'data-value': derived.doubled }, children);
}
export default Component9791;
