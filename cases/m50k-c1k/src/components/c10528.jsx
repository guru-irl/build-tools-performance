import React from 'react';
const LABEL_10528 = 'component_10528';
export function Component10528({ value = 10528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10528, 'data-value': derived.doubled }, children);
}
export default Component10528;
