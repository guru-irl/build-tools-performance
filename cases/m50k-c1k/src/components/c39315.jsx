import React from 'react';
const LABEL_39315 = 'component_39315';
export function Component39315({ value = 39315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39315, 'data-value': derived.doubled }, children);
}
export default Component39315;
