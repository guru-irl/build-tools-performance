import React from 'react';
const LABEL_7515 = 'component_7515';
export function Component7515({ value = 7515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7515, 'data-value': derived.doubled }, children);
}
export default Component7515;
