import React from 'react';
const LABEL_44201 = 'component_44201';
export function Component44201({ value = 44201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44201, 'data-value': derived.doubled }, children);
}
export default Component44201;
