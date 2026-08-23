import React from 'react';
const LABEL_44971 = 'component_44971';
export function Component44971({ value = 44971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44971, 'data-value': derived.doubled }, children);
}
export default Component44971;
