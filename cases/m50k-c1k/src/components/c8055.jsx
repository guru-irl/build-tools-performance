import React from 'react';
const LABEL_8055 = 'component_8055';
export function Component8055({ value = 8055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8055, 'data-value': derived.doubled }, children);
}
export default Component8055;
