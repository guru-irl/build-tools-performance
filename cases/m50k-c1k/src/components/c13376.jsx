import React from 'react';
const LABEL_13376 = 'component_13376';
export function Component13376({ value = 13376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13376, 'data-value': derived.doubled }, children);
}
export default Component13376;
