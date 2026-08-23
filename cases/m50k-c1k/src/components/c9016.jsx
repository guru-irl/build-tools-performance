import React from 'react';
const LABEL_9016 = 'component_9016';
export function Component9016({ value = 9016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9016, 'data-value': derived.doubled }, children);
}
export default Component9016;
