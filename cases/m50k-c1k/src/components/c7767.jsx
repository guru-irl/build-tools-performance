import React from 'react';
const LABEL_7767 = 'component_7767';
export function Component7767({ value = 7767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7767, 'data-value': derived.doubled }, children);
}
export default Component7767;
