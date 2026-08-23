import React from 'react';
const LABEL_28398 = 'component_28398';
export function Component28398({ value = 28398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28398, 'data-value': derived.doubled }, children);
}
export default Component28398;
