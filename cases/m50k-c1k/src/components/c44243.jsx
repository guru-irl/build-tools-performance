import React from 'react';
const LABEL_44243 = 'component_44243';
export function Component44243({ value = 44243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44243, 'data-value': derived.doubled }, children);
}
export default Component44243;
