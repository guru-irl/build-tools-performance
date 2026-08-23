import React from 'react';
const LABEL_10969 = 'component_10969';
export function Component10969({ value = 10969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10969, 'data-value': derived.doubled }, children);
}
export default Component10969;
