import React from 'react';
const LABEL_44474 = 'component_44474';
export function Component44474({ value = 44474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44474, 'data-value': derived.doubled }, children);
}
export default Component44474;
