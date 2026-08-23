import React from 'react';
const LABEL_32699 = 'component_32699';
export function Component32699({ value = 32699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32699, 'data-value': derived.doubled }, children);
}
export default Component32699;
