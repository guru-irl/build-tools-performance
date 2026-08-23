import React from 'react';
const LABEL_14541 = 'component_14541';
export function Component14541({ value = 14541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14541, 'data-value': derived.doubled }, children);
}
export default Component14541;
