import React from 'react';
const LABEL_15432 = 'component_15432';
export function Component15432({ value = 15432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15432, 'data-value': derived.doubled }, children);
}
export default Component15432;
