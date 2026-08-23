import React from 'react';
const LABEL_6473 = 'component_6473';
export function Component6473({ value = 6473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6473, 'data-value': derived.doubled }, children);
}
export default Component6473;
