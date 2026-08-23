import React from 'react';
const LABEL_7383 = 'component_7383';
export function Component7383({ value = 7383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7383, 'data-value': derived.doubled }, children);
}
export default Component7383;
