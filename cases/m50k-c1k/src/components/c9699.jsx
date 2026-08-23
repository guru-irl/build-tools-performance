import React from 'react';
const LABEL_9699 = 'component_9699';
export function Component9699({ value = 9699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9699, 'data-value': derived.doubled }, children);
}
export default Component9699;
