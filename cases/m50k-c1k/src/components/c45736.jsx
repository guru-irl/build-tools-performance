import React from 'react';
const LABEL_45736 = 'component_45736';
export function Component45736({ value = 45736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45736, 'data-value': derived.doubled }, children);
}
export default Component45736;
