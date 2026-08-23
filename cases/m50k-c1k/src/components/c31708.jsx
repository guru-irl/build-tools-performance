import React from 'react';
const LABEL_31708 = 'component_31708';
export function Component31708({ value = 31708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31708, 'data-value': derived.doubled }, children);
}
export default Component31708;
