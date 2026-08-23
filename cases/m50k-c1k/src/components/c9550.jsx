import React from 'react';
const LABEL_9550 = 'component_9550';
export function Component9550({ value = 9550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9550, 'data-value': derived.doubled }, children);
}
export default Component9550;
