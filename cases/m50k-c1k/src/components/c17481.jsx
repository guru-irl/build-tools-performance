import React from 'react';
const LABEL_17481 = 'component_17481';
export function Component17481({ value = 17481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17481, 'data-value': derived.doubled }, children);
}
export default Component17481;
