import React from 'react';
const LABEL_1842 = 'component_1842';
export function Component1842({ value = 1842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1842, 'data-value': derived.doubled }, children);
}
export default Component1842;
