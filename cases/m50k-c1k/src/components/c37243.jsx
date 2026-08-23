import React from 'react';
const LABEL_37243 = 'component_37243';
export function Component37243({ value = 37243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37243, 'data-value': derived.doubled }, children);
}
export default Component37243;
