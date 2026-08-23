import React from 'react';
const LABEL_9054 = 'component_9054';
export function Component9054({ value = 9054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9054, 'data-value': derived.doubled }, children);
}
export default Component9054;
