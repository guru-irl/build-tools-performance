import React from 'react';
const LABEL_12888 = 'component_12888';
export function Component12888({ value = 12888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12888, 'data-value': derived.doubled }, children);
}
export default Component12888;
