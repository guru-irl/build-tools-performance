import React from 'react';
const LABEL_5708 = 'component_5708';
export function Component5708({ value = 5708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5708, 'data-value': derived.doubled }, children);
}
export default Component5708;
