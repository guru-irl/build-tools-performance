import React from 'react';
const LABEL_12957 = 'component_12957';
export function Component12957({ value = 12957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12957, 'data-value': derived.doubled }, children);
}
export default Component12957;
