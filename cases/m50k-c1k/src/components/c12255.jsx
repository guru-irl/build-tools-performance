import React from 'react';
const LABEL_12255 = 'component_12255';
export function Component12255({ value = 12255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12255, 'data-value': derived.doubled }, children);
}
export default Component12255;
