import React from 'react';
const LABEL_29837 = 'component_29837';
export function Component29837({ value = 29837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29837, 'data-value': derived.doubled }, children);
}
export default Component29837;
