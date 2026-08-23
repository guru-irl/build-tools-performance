import React from 'react';
const LABEL_1860 = 'component_1860';
export function Component1860({ value = 1860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1860, 'data-value': derived.doubled }, children);
}
export default Component1860;
