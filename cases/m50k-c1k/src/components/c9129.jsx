import React from 'react';
const LABEL_9129 = 'component_9129';
export function Component9129({ value = 9129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9129, 'data-value': derived.doubled }, children);
}
export default Component9129;
