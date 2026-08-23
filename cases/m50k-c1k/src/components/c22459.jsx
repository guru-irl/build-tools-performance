import React from 'react';
const LABEL_22459 = 'component_22459';
export function Component22459({ value = 22459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22459, 'data-value': derived.doubled }, children);
}
export default Component22459;
