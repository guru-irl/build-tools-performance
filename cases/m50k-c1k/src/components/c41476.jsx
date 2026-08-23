import React from 'react';
const LABEL_41476 = 'component_41476';
export function Component41476({ value = 41476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41476, 'data-value': derived.doubled }, children);
}
export default Component41476;
