import React from 'react';
const LABEL_10541 = 'component_10541';
export function Component10541({ value = 10541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10541, 'data-value': derived.doubled }, children);
}
export default Component10541;
