import React from 'react';
const LABEL_10375 = 'component_10375';
export function Component10375({ value = 10375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10375, 'data-value': derived.doubled }, children);
}
export default Component10375;
