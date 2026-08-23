import React from 'react';
const LABEL_44678 = 'component_44678';
export function Component44678({ value = 44678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44678, 'data-value': derived.doubled }, children);
}
export default Component44678;
