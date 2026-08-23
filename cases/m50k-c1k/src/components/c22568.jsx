import React from 'react';
const LABEL_22568 = 'component_22568';
export function Component22568({ value = 22568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22568, 'data-value': derived.doubled }, children);
}
export default Component22568;
