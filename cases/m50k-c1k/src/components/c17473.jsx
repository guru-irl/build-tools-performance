import React from 'react';
const LABEL_17473 = 'component_17473';
export function Component17473({ value = 17473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17473, 'data-value': derived.doubled }, children);
}
export default Component17473;
