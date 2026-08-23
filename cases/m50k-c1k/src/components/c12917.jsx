import React from 'react';
const LABEL_12917 = 'component_12917';
export function Component12917({ value = 12917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12917, 'data-value': derived.doubled }, children);
}
export default Component12917;
