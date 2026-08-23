import React from 'react';
const LABEL_42163 = 'component_42163';
export function Component42163({ value = 42163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42163, 'data-value': derived.doubled }, children);
}
export default Component42163;
