import React from 'react';
const LABEL_12583 = 'component_12583';
export function Component12583({ value = 12583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12583, 'data-value': derived.doubled }, children);
}
export default Component12583;
