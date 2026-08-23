import React from 'react';
const LABEL_37715 = 'component_37715';
export function Component37715({ value = 37715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37715, 'data-value': derived.doubled }, children);
}
export default Component37715;
