import React from 'react';
const LABEL_13541 = 'component_13541';
export function Component13541({ value = 13541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13541, 'data-value': derived.doubled }, children);
}
export default Component13541;
