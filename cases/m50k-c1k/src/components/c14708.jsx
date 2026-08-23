import React from 'react';
const LABEL_14708 = 'component_14708';
export function Component14708({ value = 14708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14708, 'data-value': derived.doubled }, children);
}
export default Component14708;
