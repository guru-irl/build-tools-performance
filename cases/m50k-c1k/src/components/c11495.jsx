import React from 'react';
const LABEL_11495 = 'component_11495';
export function Component11495({ value = 11495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11495, 'data-value': derived.doubled }, children);
}
export default Component11495;
