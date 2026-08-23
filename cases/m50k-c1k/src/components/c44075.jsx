import React from 'react';
const LABEL_44075 = 'component_44075';
export function Component44075({ value = 44075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44075, 'data-value': derived.doubled }, children);
}
export default Component44075;
