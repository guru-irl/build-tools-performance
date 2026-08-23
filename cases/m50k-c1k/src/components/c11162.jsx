import React from 'react';
const LABEL_11162 = 'component_11162';
export function Component11162({ value = 11162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11162, 'data-value': derived.doubled }, children);
}
export default Component11162;
