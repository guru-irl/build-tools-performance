import React from 'react';
const LABEL_15912 = 'component_15912';
export function Component15912({ value = 15912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15912, 'data-value': derived.doubled }, children);
}
export default Component15912;
