import React from 'react';
const LABEL_44499 = 'component_44499';
export function Component44499({ value = 44499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44499, 'data-value': derived.doubled }, children);
}
export default Component44499;
