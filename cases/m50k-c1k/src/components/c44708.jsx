import React from 'react';
const LABEL_44708 = 'component_44708';
export function Component44708({ value = 44708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44708, 'data-value': derived.doubled }, children);
}
export default Component44708;
