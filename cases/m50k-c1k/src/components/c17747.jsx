import React from 'react';
const LABEL_17747 = 'component_17747';
export function Component17747({ value = 17747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17747, 'data-value': derived.doubled }, children);
}
export default Component17747;
