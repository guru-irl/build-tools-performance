import React from 'react';
const LABEL_17613 = 'component_17613';
export function Component17613({ value = 17613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17613, 'data-value': derived.doubled }, children);
}
export default Component17613;
