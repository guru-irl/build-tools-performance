import React from 'react';
const LABEL_42409 = 'component_42409';
export function Component42409({ value = 42409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42409, 'data-value': derived.doubled }, children);
}
export default Component42409;
