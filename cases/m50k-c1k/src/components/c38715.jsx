import React from 'react';
const LABEL_38715 = 'component_38715';
export function Component38715({ value = 38715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38715, 'data-value': derived.doubled }, children);
}
export default Component38715;
