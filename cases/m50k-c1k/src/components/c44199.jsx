import React from 'react';
const LABEL_44199 = 'component_44199';
export function Component44199({ value = 44199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44199, 'data-value': derived.doubled }, children);
}
export default Component44199;
