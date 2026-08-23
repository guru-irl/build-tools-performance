import React from 'react';
const LABEL_32217 = 'component_32217';
export function Component32217({ value = 32217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32217, 'data-value': derived.doubled }, children);
}
export default Component32217;
