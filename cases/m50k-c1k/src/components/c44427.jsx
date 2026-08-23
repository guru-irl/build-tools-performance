import React from 'react';
const LABEL_44427 = 'component_44427';
export function Component44427({ value = 44427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44427, 'data-value': derived.doubled }, children);
}
export default Component44427;
