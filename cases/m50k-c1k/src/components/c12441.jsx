import React from 'react';
const LABEL_12441 = 'component_12441';
export function Component12441({ value = 12441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12441, 'data-value': derived.doubled }, children);
}
export default Component12441;
