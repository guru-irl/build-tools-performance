import React from 'react';
const LABEL_44312 = 'component_44312';
export function Component44312({ value = 44312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44312, 'data-value': derived.doubled }, children);
}
export default Component44312;
