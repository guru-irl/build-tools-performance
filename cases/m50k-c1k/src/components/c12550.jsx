import React from 'react';
const LABEL_12550 = 'component_12550';
export function Component12550({ value = 12550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12550, 'data-value': derived.doubled }, children);
}
export default Component12550;
