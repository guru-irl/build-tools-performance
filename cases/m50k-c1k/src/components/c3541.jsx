import React from 'react';
const LABEL_3541 = 'component_3541';
export function Component3541({ value = 3541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3541, 'data-value': derived.doubled }, children);
}
export default Component3541;
