import React from 'react';
const LABEL_44864 = 'component_44864';
export function Component44864({ value = 44864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44864, 'data-value': derived.doubled }, children);
}
export default Component44864;
