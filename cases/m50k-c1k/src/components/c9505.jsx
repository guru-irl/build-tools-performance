import React from 'react';
const LABEL_9505 = 'component_9505';
export function Component9505({ value = 9505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9505, 'data-value': derived.doubled }, children);
}
export default Component9505;
