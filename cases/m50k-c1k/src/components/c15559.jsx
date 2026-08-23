import React from 'react';
const LABEL_15559 = 'component_15559';
export function Component15559({ value = 15559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15559, 'data-value': derived.doubled }, children);
}
export default Component15559;
