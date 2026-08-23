import React from 'react';
const LABEL_19837 = 'component_19837';
export function Component19837({ value = 19837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19837, 'data-value': derived.doubled }, children);
}
export default Component19837;
