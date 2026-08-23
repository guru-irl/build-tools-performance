import React from 'react';
const LABEL_13375 = 'component_13375';
export function Component13375({ value = 13375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13375, 'data-value': derived.doubled }, children);
}
export default Component13375;
