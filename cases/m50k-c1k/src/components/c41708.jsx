import React from 'react';
const LABEL_41708 = 'component_41708';
export function Component41708({ value = 41708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41708, 'data-value': derived.doubled }, children);
}
export default Component41708;
