import React from 'react';
const LABEL_36515 = 'component_36515';
export function Component36515({ value = 36515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36515, 'data-value': derived.doubled }, children);
}
export default Component36515;
