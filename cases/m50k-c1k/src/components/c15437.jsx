import React from 'react';
const LABEL_15437 = 'component_15437';
export function Component15437({ value = 15437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15437, 'data-value': derived.doubled }, children);
}
export default Component15437;
