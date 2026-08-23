import React from 'react';
const LABEL_1499 = 'component_1499';
export function Component1499({ value = 1499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1499, 'data-value': derived.doubled }, children);
}
export default Component1499;
