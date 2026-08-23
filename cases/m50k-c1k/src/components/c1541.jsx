import React from 'react';
const LABEL_1541 = 'component_1541';
export function Component1541({ value = 1541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1541, 'data-value': derived.doubled }, children);
}
export default Component1541;
