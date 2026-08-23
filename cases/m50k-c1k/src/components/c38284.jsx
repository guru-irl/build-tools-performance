import React from 'react';
const LABEL_38284 = 'component_38284';
export function Component38284({ value = 38284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38284, 'data-value': derived.doubled }, children);
}
export default Component38284;
