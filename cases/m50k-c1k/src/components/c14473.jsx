import React from 'react';
const LABEL_14473 = 'component_14473';
export function Component14473({ value = 14473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14473, 'data-value': derived.doubled }, children);
}
export default Component14473;
