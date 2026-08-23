import React from 'react';
const LABEL_44102 = 'component_44102';
export function Component44102({ value = 44102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44102, 'data-value': derived.doubled }, children);
}
export default Component44102;
