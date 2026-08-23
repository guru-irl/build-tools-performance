import React from 'react';
const LABEL_15473 = 'component_15473';
export function Component15473({ value = 15473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15473, 'data-value': derived.doubled }, children);
}
export default Component15473;
