import React from 'react';
const LABEL_12262 = 'component_12262';
export function Component12262({ value = 12262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12262, 'data-value': derived.doubled }, children);
}
export default Component12262;
