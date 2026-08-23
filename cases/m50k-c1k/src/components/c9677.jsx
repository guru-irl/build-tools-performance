import React from 'react';
const LABEL_9677 = 'component_9677';
export function Component9677({ value = 9677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9677, 'data-value': derived.doubled }, children);
}
export default Component9677;
