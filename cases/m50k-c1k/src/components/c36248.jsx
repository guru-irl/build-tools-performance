import React from 'react';
const LABEL_36248 = 'component_36248';
export function Component36248({ value = 36248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36248, 'data-value': derived.doubled }, children);
}
export default Component36248;
