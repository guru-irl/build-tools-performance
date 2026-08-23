import React from 'react';
const LABEL_8515 = 'component_8515';
export function Component8515({ value = 8515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8515, 'data-value': derived.doubled }, children);
}
export default Component8515;
