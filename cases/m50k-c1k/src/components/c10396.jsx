import React from 'react';
const LABEL_10396 = 'component_10396';
export function Component10396({ value = 10396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10396, 'data-value': derived.doubled }, children);
}
export default Component10396;
