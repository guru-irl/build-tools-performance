import React from 'react';
const LABEL_23105 = 'component_23105';
export function Component23105({ value = 23105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23105, 'data-value': derived.doubled }, children);
}
export default Component23105;
