import React from 'react';
const LABEL_17107 = 'component_17107';
export function Component17107({ value = 17107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17107, 'data-value': derived.doubled }, children);
}
export default Component17107;
