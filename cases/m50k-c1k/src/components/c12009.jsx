import React from 'react';
const LABEL_12009 = 'component_12009';
export function Component12009({ value = 12009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12009, 'data-value': derived.doubled }, children);
}
export default Component12009;
