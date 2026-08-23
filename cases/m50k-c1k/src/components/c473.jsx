import React from 'react';
const LABEL_473 = 'component_473';
export function Component473({ value = 473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_473, 'data-value': derived.doubled }, children);
}
export default Component473;
