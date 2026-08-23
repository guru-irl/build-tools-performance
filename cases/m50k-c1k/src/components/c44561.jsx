import React from 'react';
const LABEL_44561 = 'component_44561';
export function Component44561({ value = 44561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44561, 'data-value': derived.doubled }, children);
}
export default Component44561;
