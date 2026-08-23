import React from 'react';
const LABEL_45341 = 'component_45341';
export function Component45341({ value = 45341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45341, 'data-value': derived.doubled }, children);
}
export default Component45341;
